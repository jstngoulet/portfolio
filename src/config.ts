
//  Firebase
export const GOOGLE_API_KEY = 'AIzaSyB59OMhL-7cUxlA3-_ZH2eX3UCNYWNYsg4'
export const GOOGLE_AUTH_DOMAIN = 'tizzle-portfolio.firebaseapp.com'
export const GOOGLE_PROJECT_ID = 'tizzle-portfolio'
export const GOOGLE_STORAGE_BUCKET = 'tizzle-portfolio.firebasestorage.app'
export const GOOGLE_SENDER_ID = '93800741164'
export const GOOGLE_APP_ID = '1:93800741164:web:9fc1caeea5762339a99489'
export const GOOGLE_MEASUREMENT_ID = 'G-RV6S9FQZVL'

//  Analytics
export const ANALYTICS_SERVER_URL = () => {
    const foundENV = import.meta.env.VITE_ANALYTICS_SERVER_URL;
    
    if (foundENV) 
        return foundENV;
    
    return 'http://localhost:3000'
}

export const ANALYTICS_APP_ID = () => {
    const foundENV = import.meta.env.VITE_ANALYTICS_APP_ID;

    if (foundENV) return foundENV

    return 'PORTFOLIO-UNKNOWN'
}
