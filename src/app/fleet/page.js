import FleetClient from "./FleetClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  title: "Our Fleet | Luxury & Premium Cars | LuxeDrives",
  description:
    "Browse our fleet of luxury and premium rental cars. Find the perfect vehicle for business trips, weddings, and personal travel.",
  alternates: {
    canonical: `${siteUrl}/fleet`,
  },
};



export default function Fleet() {
 
  
  return (
    <>
  
<FleetClient></FleetClient>
    </>
  );
}