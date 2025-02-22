import axios from 'axios'
import Cookies from 'js-cookie'
import { v4 as uuid } from 'uuid'
import qs from 'query-string'
import { logEvent, analytics, setUserId } from '@/plugins/firebase'

import { ANALYTICS_SERVER_URL, ANALYTICS_APP_ID } from '@/config'

interface AnalyticEvent {
  category: string
  action: string
  label: string
  id: string
  data?: Record<string, any>
}

export function reportAnalytic(properties: AnalyticEvent) {
  getUserID().then((id: string) => {
    if (id === '') {
      console.log('User Not Authenticated')
      return
    }

    axios
      .post(
        `${ANALYTICS_SERVER_URL}/analytics/new_event/`,
        {
          app_id: ANALYTICS_APP_ID,
          user_id: id,
          category: properties.category,
          action: properties.action,
          label: properties.label,
          timestamp: new Date().toISOString(),
          properties: properties.data
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .catch(function (error) {
        console.log(error)
      })

    //    Report to Firebase
    setUserId(analytics, id);
    logEvent(
      analytics,
      `${properties.action}-${properties.label}`.replace(' ', '_').toUpperCase(),
      {
        ...properties.data
      }
    )
  });
}

export function reportPageLoad(page: string, data?: Record<string, any>) {
  const items = qs.parse(document.location.search)
  reportAnalytic({
    category: 'User Interaction',
    action: 'Page Viewed',
    label: page,
    id: `viewed-${page}`,
    data: {
      ...data,
      ...items
    }
  })
}

export function reportButtonClick(id: string, ref: string) {
  reportAnalytic({
    category: 'User Interaction',
    action: 'Button Clicked',
    label: id,
    id: `clicked-${id}`,
    data: {
      location: ref
    }
  })
}

async function getUserID(): Promise<string> {
  let userID = Cookies.get('device_id') || ''
  const newID = uuid()

  if (!userID) {
    try {
      //  Before we report hte event, make sure the user still exists

      //  Now, report the event
      const response = await axios.post(
        `${ANALYTICS_SERVER_URL}/auth/register/`,
        {
          username: newID,
          password: newID
        },
        {
          //   withCredentials: false, // Ensures cookies are sent/received
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

      userID = response.data.id

      // Store userID in a cookie for future use
      Cookies.set('device_id', userID, { expires: 30, path: '/' })
    } catch (error) {
      console.error('Error fetching userID:', error)
      return ''
    }
  }

  return userID
}
