import FleetClient from "./FleetClient";

export const metadata = {
  title:
    "Luxury Car Fleet Chandigarh | BMW, Mercedes, Audi & More | LuxeDrives",

  description:
    "Explore the LuxeDrives fleet featuring premium self-drive and chauffeur-driven luxury cars in Chandigarh. Choose from BMW, Mercedes-Benz, Audi, and other high-end vehicles for business, weddings, travel, and special occasions.",

  keywords: [
    "luxury car fleet Chandigarh",
    "LuxeDrives fleet",
    "BMW rental Chandigarh",
    "Mercedes rental Chandigarh",
    "Audi rental Chandigarh",
    "self drive luxury cars Chandigarh",
    "premium cars Chandigarh",
    "luxury car hire Chandigarh",
    "rent BMW Chandigarh",
    "rent Mercedes Chandigarh",
    "chauffeur driven luxury cars",
    "luxury vehicle rental Chandigarh",
    "car rental fleet Chandigarh",
    "premium car rental Chandigarh",
    "luxury cars Chandigarh",
  ],

  alternates: {
    canonical: "https://www.luxedrives.in/fleet",
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
      "Luxury Car Fleet Chandigarh | BMW, Mercedes, Audi & More",

    description:
      "Browse the LuxeDrives luxury fleet featuring premium self-drive and chauffeur-driven vehicles in Chandigarh.",

    url: "https://www.luxedrives.in/fleet",

    siteName: "LuxeDrives",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "https://www.luxedrives.in/offer.jpg",
        width: 1200,
        height: 630,
        alt: "LuxeDrives Luxury Car Fleet Chandigarh",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Luxury Car Fleet Chandigarh | LuxeDrives",

    description:
      "Explore BMW, Mercedes, Audi and other premium luxury rental cars available in Chandigarh.",

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

export default function Fleet() {
  return <FleetClient />;
}