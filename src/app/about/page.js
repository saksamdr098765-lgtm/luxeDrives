import AboutClient from "./AboutClient";

   const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
export const metadata = {
  title: "About LuxeRides | Trusted Car Rental Service",
  description:
    "Learn about LuxeRides, our mission, commitment to quality service, and premium car rental experience.",
  alternates: {
    canonical: `${siteUrl}about`,
  },
};

export default function About() {


  return (
 <AboutClient></AboutClient>
  );
}