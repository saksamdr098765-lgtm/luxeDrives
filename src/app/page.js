import CTA from "./components/CTA";
import FeaturedFleet from "./components/FeaturedFleet";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWork";
import Statistics from "./components/Statics";
import Testimonials from "./components/Testimonials";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
export const metadata = {
  title: "LuxeDrives | Premium Car Rental Services",
  description:
    "Rent luxury cars with LuxeDrives. Premium vehicles, weddings, airport transfers, and corporate travel across Punjab.",
  keywords:
    "car rental, luxury car rental, premium cars, wedding cars, airport transfer Punjab",
  openGraph: {
    title: "LuxeDrives | Premium Car Rental Services",
    description:
      "Book premium and luxury cars with LuxeDrives in Punjab.",
    url: siteUrl,
    siteName: "LuxeDrives",
    images: [
      {
        url: `${siteUrl}offer.jpg`,
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function Home() {
  return (
    <main>
    <Hero></Hero>
    <FeaturedFleet></FeaturedFleet>
<HowItWorks></HowItWorks>
<Testimonials></Testimonials>
<Statistics></Statistics>
<CTA></CTA>
<Footer></Footer>
     
    </main>
  );
}