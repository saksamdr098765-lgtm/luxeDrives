

import LuxuryCarRentalClient from "./LuxuryCarRentalClient";

export const metadata = {
  title: "Luxury Car Rental in Chandigarh | BMW, Mercedes & Audi",
  description:
    "Book premium chauffeur-driven luxury cars in Chandigarh. BMW, Mercedes, Audi available for weddings, airport transfers, and events with Luxe Drives.",
  keywords: [
    "luxury car rental Chandigarh",
    "BMW rental Chandigarh",
    "Mercedes hire Chandigarh",
    "Audi car rental Chandigarh",
    "chauffeur service Chandigarh",
  ],
    openGraph: {
    title: "LuxeDrives | Premium Car Rental Services",
    description:
      "Book premium and luxury cars with LuxeDrives in Punjab.",
    url:"https://www.luxedrives.in",
    siteName: "LuxeDrives",
    images: [
      {
        url: `https://www.luxedrives.in/offer.jpg`,
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};
export default function LuxuryCarRentalPage() {

  return (
<LuxuryCarRentalClient></LuxuryCarRentalClient>
  );
}