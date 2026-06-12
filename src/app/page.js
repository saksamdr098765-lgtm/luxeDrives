import CTA from "./components/CTA";
import FeaturedFleet from "./components/FeaturedFleet";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWork";
import Promotion from "./components/Promotion";
import Statistics from "./components/Statics";
import Testimonials from "./components/Testimonials";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
// const localBusinessSchema = {
//   "@context": "https://schema.org",
//   "@type": "CarRental",

//   "@id": "https://www.luxedrives.in/#business",

//   name: "LuxeDrives",

//   url: "https://www.luxedrives.in",

//   logo: "https://www.luxedrives.in/logo.webp",

//   image: "https://www.luxedrives.in/offer.jpg",

//   description:
//     "LuxeDrives provides luxury self-drive and chauffeur-driven car rental services in Chandigarh and surrounding areas.",

//   telephone: "+91XXXXXXXXXX",

//   email: "info@luxedrives.in",

//   priceRange: "₹₹₹",

//   areaServed: [
//     {
//       "@type": "City",
//       name: "Chandigarh",
//     },
//     {
//       "@type": "City",
//       name: "Mohali",
//     },
//     {
//       "@type": "City",
//       name: "Panchkula",
//     },
//   ],

//   address: {
//     "@type": "PostalAddress",
//     addressLocality: "Chandigarh",
//     addressRegion: "Chandigarh",
//     addressCountry: "IN",
//   },

//   sameAs: [
//     "https://www.instagram.com/YOUR_HANDLE",
//     "https://www.facebook.com/YOUR_PAGE",
//     "https://www.linkedin.com/company/YOUR_COMPANY"
//   ],

//   makesOffer: {
//     "@type": "Offer",
//     itemOffered: {
//       "@type": "Service",
//       name: "Luxury Car Rental",
//     },
//   },

//   serviceType: [
//     "Luxury Car Rental",
//     "Self Drive Car Rental",
//     "Chauffeur Driven Car Rental",
//     "Wedding Car Rental",
//     "Airport Transfer",
//     "Corporate Car Rental",
//   ],
// };

export const metadata = {
  title:
    "Luxury Car Rental Chandigarh | Self Drive & Premium Cars | LuxeDrives",

  description:
    "LuxeDrives offers luxury car rentals in Chandigarh with premium self-drive and chauffeur-driven vehicles. Rent BMW, Mercedes-Benz, Audi, and other luxury cars for weddings, corporate travel, airport transfers, and special occasions.",

  keywords: [
    "luxury car rental Chandigarh",
    "self drive car rental Chandigarh",
    "premium car rental Chandigarh",
    "BMW rental Chandigarh",
    "Mercedes rental Chandigarh",
    "Audi rental Chandigarh",
    "luxury cars Chandigarh",
    "rent luxury car Chandigarh",
    "car hire Chandigarh",
    "wedding car rental Chandigarh",
    "airport transfer Chandigarh",
    "corporate car rental Chandigarh",
    "luxury vehicle rental Punjab",
    "premium self drive cars",
    "LuxeDrives",
  ],

  alternates: {
    canonical: "https://www.luxedrives.in",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title:
      "Luxury Car Rental Chandigarh | Self Drive & Premium Cars | LuxeDrives",

    description:
      "Rent luxury self-drive and chauffeur-driven vehicles in Chandigarh. Explore BMW, Mercedes-Benz, Audi, and premium cars with LuxeDrives.",

    url: "https://www.luxedrives.in",

    siteName: "LuxeDrives",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "https://www.luxedrives.in/offer.jpg",
        width: 1200,
        height: 630,
        alt: "LuxeDrives Luxury Car Rental Chandigarh",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Luxury Car Rental Chandigarh | LuxeDrives",

    description:
      "Premium self-drive and chauffeur-driven luxury car rentals in Chandigarh.",

    images: ["https://www.luxedrives.in/offer.jpg"],
  },

  category: "Car Rental",

  applicationName: "LuxeDrives",

  authors: [
    {
      name: "LuxeDrives",
      url: "https://www.luxedrives.in",
    },
  ],

  creator: "LuxeDrives",

  publisher: "LuxeDrives",

  metadataBase: new URL("https://www.luxedrives.in"),
};

export default function Home() {
  return (
    <main>
         {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      /> */}
    <Hero></Hero>
    <Promotion></Promotion>
    <FeaturedFleet></FeaturedFleet>
<HowItWorks></HowItWorks>
<Testimonials></Testimonials>
<Statistics></Statistics>
<CTA></CTA>
<Footer></Footer>
     
    </main>
  );
}