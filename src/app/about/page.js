import AboutClient from "./AboutClient";

export const metadata = {
  title:
    "About LuxeDrives Chandigarh | Premium Self Drive & Luxury Car Rental",

  description:
    "Learn about LuxeDrives, Chandigarh's trusted luxury car rental company offering premium self-drive and chauffeur-driven vehicles. Experience transparent pricing, luxury fleets, and exceptional customer service.",

  keywords: [
    "LuxeDrives",
    "about LuxeDrives",
    "luxury car rental Chandigarh",
    "self drive car rental Chandigarh",
    "premium car rental Chandigarh",
    "BMW rental Chandigarh",
    "Mercedes rental Chandigarh",
    "Audi rental Chandigarh",
    "car hire Chandigarh",
    "luxury vehicle rental Chandigarh",
    "self drive luxury cars",
    "chauffeur driven cars Chandigarh",
    "car rental Punjab",
    "luxury cars Chandigarh",
    "rent luxury cars Chandigarh",
  ],

  alternates: {
    canonical: "https://www.luxedrives.in/about",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
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
      "About LuxeDrives Chandigarh | Premium Self Drive & Luxury Car Rental",

    description:
      "Discover LuxeDrives, Chandigarh's trusted destination for luxury car rentals, premium self-drive vehicles, and chauffeur-driven experiences.",

    url: "https://www.luxedrives.in/about",

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
      "About LuxeDrives Chandigarh | Luxury Car Rental Service",

    description:
      "Learn more about LuxeDrives and our premium self-drive and chauffeur-driven luxury car rental services in Chandigarh.",

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

export default function About() {
  return <AboutClient />;
}