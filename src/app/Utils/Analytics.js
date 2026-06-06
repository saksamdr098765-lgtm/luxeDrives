export default function trackEvent(eventName,params={}){
        window.gtag?.("event",eventName,params)
}