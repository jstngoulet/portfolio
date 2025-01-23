// import GitlabFillIcon from 'remixicon-react/GitlabFillIcon'
import GitlabFillIcon from 'remixicon-react/GitlabFillIcon'
import ExternalLinkFillIcon from 'remixicon-react/ExternalLinkFillIcon'
import ApplelineIcon from 'remixicon-react/AppleLineIcon'
import GooglePlayLineIcon from 'remixicon-react/GooglePlayLineIcon'
import InlineLink from '@/components/common/reusable/InlineLink'
import ProjectProps from '@/types/components/ProjectProps'
import LinkProps from '@/types/LinkProps'
import getGitHubUrl from '@/utils/getGitHubUrl'

const live: LinkProps = {
  label: 'Live',
  icon: <ExternalLinkFillIcon size={22} />
}

const filters: string[] = [
    'Swift'
    , 'Swift UI'
    , 'Objective-C'
    , 'Fastlane CI'
    , 'GigShare'
    , 'Finance'
    , 'Navigation'
    , 'Social Networks'
    , 'Sendbird'
    , 'Firebase'
    , 'MiSnap OCR'
    , 'OpenID'
    , 'Snowplow'
    , 'Stripe'
    , 'Algolia'
    , 'Argyle'
    , 'Iterable'
    , 'Adjust MMP'
    , 'Zendesk'
    , 'Salesforce'
    , 'AppAuth'
    , 'Apollo GraphQL'
    , 'REST'
    , 'GLUU'
    , 'TrustKit'
    , 'Heap Analytics'
    , 'Salesforce Integrations'
    , 'Datadog'
    , 'Instabug'
    , 'Cocoapods'
    , 'Swift Package Manager'
    , 'Objective-C'
]

const projects: ProjectProps[] = [
  {
    slug: 'hyrecar',
    featured: true,
    title: 'HyreCar by Getaround',
    description: (
      <span>
      <p>
       Carsharing marketplace for drivers in the Gig Economy. WAs brought on as sole iOS developer in 2018 and maintained it 
       until 2024 with larger team that I led.
       </p>
       <p>
       <InlineLink href='#'>Learn More</InlineLink>
      </p>
      </span>
    ),
    techStacks: ['Swift', 'Fastlane CI', 'Snowplow'],
    otherTechStacks: [
      'Sendbird'
    , 'Firebase'
    , 'MiSnap OCR'
    , 'OpenID'
    , 'Snowplow'
    , 'Stripe'
    , 'Algolia'
    , 'Argyle'
    , 'Iterable'
    , 'Adjust MMP'
    , 'Zendesk'
    , 'Salesforce'
    , 'AppAuth'
    , 'Apollo GraphQL'
    , 'REST'
    , 'GLUU'
    , 'TrustKit'
    , 'Heap Analytics'
    , 'Salesforce Integrations'
    , 'Datadog'
    , 'Instabug'
    , 'Cocoapods'
    , 'Swift Package Manager'
  ],
    category: 'iOS Development',
    links: [
      {
        label: "hyrecar-web",
        url: "https://hyrecar.com?refr_source=jstngoulet@me.com&campaign=portfolio&refr_medium=web",
        icon: <ExternalLinkFillIcon size={22} />
      },
      {
        label: "hyrecar-ios",
        url: "https://apps.apple.com/us/app/hyrecar-driver-gig-rentals/id1440817663?refr_source=jstngoulet@me.com&campaign=portfolio&refr_medium=web",
        icon: <ApplelineIcon size={22} />
      },
      {
        label: "hyrecar-android",
        url: "https://play.google.com/store/apps/details?id=com.yellowishdev.hyrecarandroid&refr_source=jstngoulet@me.com&campaign=portfolio&refr_medium=web",
        icon: <GooglePlayLineIcon size={22} />
      }
    ]
  },
  {
    slug: "beerhopper",
    featured: true,
    title: 'Beer Hopper',
    description: (
      <span>
        <p>
        A different take on the original I created, this application is designed in a modern way, 
        from the ground up. With a new icon, templated color scheme, and new features, this 
        application is set to improve the original functionality from the Obj-C version.
        </p>
        <p>
        With a social feed, users can communicate directly with their followers to know what breweries 
        they like to visit and what beers they are into.
        </p>
       <p>
       <InlineLink href='#'>Learn More</InlineLink>
      </p>
      </span>
    ),
    category: 'Food & Drink',
    techStacks: ['Swift', 'Realm', 'Cocoapods'],
    links: [
      {
        label: "BeerHopper on GitLab",
        url: "https://gitlab.com/tizzle/beerhopper/-/tree/master",
        icon: <GitlabFillIcon size={22} />
      }
    ]
  },
  {
    slug: "other-mind",
    featured: false,
    title: 'Other Mind',
    description: (
      <span>
        <p>
          Seeking to be a competitor for WhatsApp, Facebook Messenger, et. al, 'Other Mind' is an 
          application to centralize a user's chatting capability.
        </p>
        <p>
          In 'Other Mind', any user can message any user in their contacts, create groups for event 
          conversaions, and have their own channel so people can follow others at any time.
        </p>
        <p>
          More? 'Other Mind' is also a capable application determined to esnd any type of file to any user 
          within that chat or channel. This includes audio, images, sounds, word documents, sketch files, 
          music.. anything. all on a simple subscription model.
        </p>
      </span>
    ),
    category: 'Chat',
    techStacks: [
      'Watson AI'
      , 'Uber API'
      , 'Stripe'
      , 'Plaid'
      , 'Socket.io'
      , 'REST'
    ],
    links: [
      {
        label: "othermind-web",
        url: "https://www.othermind.com?refr_source=jstngoulet@me.com&campaign=portfolio&refr_medium=web",
        icon: <ExternalLinkFillIcon size={22} />
      },
      {
        label: "othermind-ios",
        url: "https://itunes.apple.com/us/app/8/id1321747249?ls=1&mt=8&refr_source=jstngoulet@me.com&campaign=portfolio&refr_medium=web",
        icon: <ApplelineIcon size={22} />
      }
    ]
  },
  {
    slug: "crowdsourz",
    featured: false,
    title: 'CrowdSorz',
    description: (
      <span>
        <p>
          CrowdSorz is an application poised to change the way we, as consumers reccommend products to one another.
        </p>
        <p>
          Currently, there are several sites that you can share ideas, but not do the same thing CrowdSorz was created to do. 
          There are no ads, the user just focuses on new products and services that may fit their needs. If one fits their 
          fancy, they, too, can reccommend it, or simply pin it to a board to view later.
        </p>
      </span>
    ),
    category: 'Social Network',
    techStacks: ['Swift', 'REST', 'Facebook API', 'Twitter API'],
    links: [
      {
        label: "crowdsorz-ios",
        url: "https://itunes.apple.com/us/app/crowdsorz/id1149315899?ls=1&mt=8&refr_source=jstngoulet@me.com&campaign=portfolio&refr_medium=web",
        icon: <ApplelineIcon size={22} />
      }
    ]
  },
  {
    slug: "bankroll",
    featured: true,
    title: 'BankRoll (now Guac)',
    description: (
      <span>
        <p>
          What if you could save some money every time you bought something? What if, that money that you 
          saved, was automatically placed in a separate account, so you wouldn;t have to do it automatically?
        </p>
        <p>
          BankRoll is a step we need to replace banks as we know it. Using the Bank of the Internet, this application syncs 
          with your bank account and knows when you make a transaction, to put some money aside based on your preferences. 
          This can be anything from a percentage of funds, rounding to the nearest dollar, among others
        </p>
      </span>
    ),
    category: 'Finance',
    techStacks: ['Swift', 'REST', 'Plaid'],
    links: [
      {
        label: "bankroll-web",
        url: "https://guacapp.com?refr_source=jstngoulet@me.com&campaign=portfolio&refr_medium=web",
        icon: <ExternalLinkFillIcon size={22} />
      },
      {
        label: "bankroll-ios",
        url: "https://apps.apple.com/us/app/guac-save-while-you-spend/id1463903144?refr_source=jstngoulet@me.com&campaign=portfolio&refr_medium=web",
        icon: <ApplelineIcon size={22} />
      },
      {
        label: "bankroll-android",
        url: "https://play.google.com/store/apps/details?id=com.guac&hl=en_US&gl=US&refr_source=jstngoulet@me.com&campaign=portfolio&refr_medium=web",
        icon: <GooglePlayLineIcon size={22} />
      }
    ]
  },
  {
    slug: "tending",
    featured: false,
    title: 'Tending',
    description: (
      <span>
        <p>
          Do you go to a bar because there is a bartender there, that knows what you like to drink? 
          This app allows bartenders and regular customers to connect, to see when the bartender is in, 
          or not, without knowing their schedule.
        </p>
        <p>
          Tending allows customers to see what bartenders do, as if they have lives (they do, you know). 
          Bartenders can post what specials they are having, when they will be in again, and they can even keep a 
          collection of photos as the customer grows closer.
        </p>
        <p>
          Bartenders: Expand your visibility and increase your income! Use Tending to let your regulars know when you’re behind the bar.
        </p>
      </span>
    ),
    category: 'Social Network',
    techStacks: ['Swift', 'Realm', 'REST', 'Yelp API'],
    links: [
      {
        label: "tending-ios",
        url: "https://itunes.apple.com/us/app/tending/id1188208027?ls=1&mt=8&refr_source=jstngoulet@me.com&campaign=portfolio&refr_medium=web",
        icon: <ApplelineIcon size={22} />
      }
    ]
  },
  {
    slug: "yurparty",
    featured: false,
    title: 'YurParty',
    description: (
      <span>
        <p>
          How many vendors do you plan on having at your child's birthday party? How would others rate the ones you 
          chose? Is there a single location I can go that is just used for party planning? Yes. YurParty
        </p>
        <p>
          YurParty is a vendor seeking application that connects vendors to clients, and vice versa. You can connect 
          directly with the vendors of a variety of differnt service types - from bartenders, to rentals, to venues, and other businesses 
          related to anything you may want to do.
        </p>
      </span>
    ),
    category: 'Productivity',
    techStacks: ['Swift', 'Swift Server', 'REST', 'Core Data', 'AWS - S3'],
    links: [
      {
        label: "yurparty-ios",
        url: "https://itunes.apple.com/us/app/yurparty/id1301502988?ls=1&mt=8&refr_source=jstngoulet@me.com&campaign=portfolio&refr_medium=web",
        icon: <ApplelineIcon size={22} />
      }
    ]
  },
  {
    slug: "referaway",
    featured: false,
    title: 'Referaway',
    description: (
      <span>
        <p>
          ReferAway is a simple and efficient way to access and share the most sought-after network of people. 
          The easy-to-use app allows you to send, receive and track referrals in just a few clicks. 
          </p>
          <p>
          Word of mouth has become the most effective form of marketing and now you can easily submit referrals for professionals, 
          vendors, customers and the everyday person. Join an existing Group or create a new one to organize like-minded peers. 
          </p>
          <p>
          Expand your business or network and begin referring great people to all sorts of services and specialists you trust.
        </p>
      </span>
    ),
    category: 'Social Network',
    techStacks: ['Swift', 'CoreData', 'REST'],
    links: [
      {
        label: "yurparty-ios",
        url: "https://itunes.apple.com/us/app/referaway/id1095691498?ls=1&mt=8&refr_source=jstngoulet@me.com&campaign=portfolio&refr_medium=web",
        icon: <ApplelineIcon size={22} />
      }
    ]
  },
  {
    slug: "beer-hopper-obj-c",
    featured: false,
    title: 'Beer Hopper',
    description: (
      <span>
        <p>
          Built with a design to match professional applications, this productivity program was created to connect microbrews to the beer drinkers.
        </p>
        <p>
          The idea behind this application was that breweries are popping up all over San Diego, and other great counties, 
          and there is not a seamless way to find them all, follow them, and see what they are currently pouring on tap. Facebook 
          is a common option for many small businesses, but it is not specialized towards a physical product.
        </p>
        <p>
          With Beer Hopper, that changes. The mobile application uses your location to find breweries near you, sorting them by which is closest, and allows 
          users to view their entire beer list, just what is on tap, their average rating (for both the beers and the actual business), hours and more!
        </p>
      </span>
    ),
    category: 'Social Network',
    techStacks: ['Objective-C', 'Airtable', 'REST'],
    links: [
      {
        label: "yurparty-ios",
        url: "https://itunes.apple.com/us/app/beer-hopper/id1073181416?mt=8&ign-mpt=uo%3D4&refr_source=jstngoulet@me.com&campaign=portfolio&refr_medium=web",
        icon: <ApplelineIcon size={22} />
      }
    ]
  },
  {
    slug: "crony",
    featured: false,
    title: 'Crony',
    description: (
      <span>
        <p>
          No longer live, due to minimal interest, this application was still a great triumph for me. Working in a group of three (3), 
          we were able to successfully create a powerful application that was geared towards meeting new people and going to new places.
        </p>
        <p>
          Crony was an application that used peer location data (anonymous) that only kept a record of a location - not a specific user. 
          The application then used the location data to tell users how many people are near a particular business.
        </p>
        <p>
          I created the curent UI of the application, as well as the backend side of the local application. My job was to create a working version 
          of our product while another was in charge of maintaining the server and the other was in charge of promoting the finalized product.
        </p>
      </span>
    ),
    category: 'Social Network',
    techStacks: ['Objective-C', 'Yelp API', 'Sendbird'],
    links: [
      {
        label: "yurparty-ios",
        url: "https://itunes.apple.com/us/app/crony/id999180611?mt=8&ign-mpt=uo%3D4&refr_source=jstngoulet@me.com&campaign=portfolio&refr_medium=web",
        icon: <ApplelineIcon size={22} />
      }
    ]
  },
  {
    slug: "krash-kourse",
    featured: true,
    title: 'Krash Kourse',
    description: (
      <span>
        <p>
          This was my top downloaded application of all time. The game is simple: move your cars on the road out of the way of oncoming traffic.
        </p>
        <p>
          An "Endless Runner" game, as many are popular, was a fun game to make. For the cars, I used an image of a 3D car I designed using Google Sketchup. 
          I then painted them differently to make them appear as different cars.
        </p>
        <p>
          The user would try to gather as many points as possible - either by pure distance or by collecting items - before crashing into too many cars.
        </p>
      </span>
    ),
    category: 'Games',
    techStacks: ['Objective-C', 'GameCenter'],
    links: [
      {
        label: "yurparty-ios",
        url: "https://itunes.apple.com/us/app/krash-kourse-2/id968211755?mt=8&ign-mpt=uo%3D4&refr_source=jstngoulet@me.com&campaign=portfolio&refr_medium=web",
        icon: <ApplelineIcon size={22} />
      }
    ]
  },
  {
    slug: "word-games",
    featured: false,
    title: 'Word Games',
    description: '',
    category: 'Games',
    techStacks: [],
    links: []
  },
  {
    slug: "that-game",
    featured: false,
    title: 'That Game',
    description: '',
    category: 'Games',
    techStacks: [],
    links: []
  },
  {
    slug: "Beer Hopper",
    featured: false,
    title: 'Beer Hopper (Web)',
    description: '',
    category: 'Social Network',
    techStacks: ['HTML', 'CSS', 'Javascript', 'MySQL', 'PHP'],
    links: []
  },
  {
    slug: "nand-2-tetris",
    featured: true,
    title: 'Nand2Tetris',
    description: '',
    category: '',
    techStacks: ['VHDL', 'Java', 'Assembly'],
    links: []
  }
]

export { filters, projects }
