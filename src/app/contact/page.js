import ContactClient from "./ContactClient";

export const metadata = {
  title:
    "Contact LuxeDrives Chandigarh | Luxury Car Rental & Booking Support",

  description:
    "Contact LuxeDrives Chandigarh for luxury car rentals, self-drive bookings, chauffeur services, pricing inquiries, and customer support. Our team is ready to assist you.",

  keywords: [
    "contact LuxeDrives",
    "LuxeDrives Chandigarh",
    "car rental contact Chandigarh",
    "luxury car rental Chandigarh",
    "self drive car rental Chandigarh",
    "book luxury car Chandigarh",
    "chauffeur service Chandigarh",
    "BMW rental Chandigarh",
    "Mercedes rental Chandigarh",
    "Audi rental Chandigarh",
    "luxury vehicle rental Chandigarh",
    "car hire Chandigarh",
    "rent luxury cars Chandigarh",
    "premium car rental Chandigarh",
  ],

  alternates: {
    canonical: "https://www.luxedrives.in/contact",
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
      "Contact LuxeDrives Chandigarh | Luxury Car Rental Support",

    description:
      "Get in touch with LuxeDrives for luxury car rentals, self-drive bookings, chauffeur services, and customer assistance in Chandigarh.",

    url: "https://www.luxedrives.in/contact",

    siteName: "LuxeDrives",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "https://www.luxedrives.in/offer.jpg",
        width: 1200,
        height: 630,
        alt: "Contact LuxeDrives Chandigarh",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Contact LuxeDrives Chandigarh | Luxury Car Rental Service",

    description:
      "Contact our team for luxury car bookings, self-drive rentals, chauffeur services, and support.",

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

export default function Contact() {
  return <ContactClient />;
}