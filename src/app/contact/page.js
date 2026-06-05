import ContactClient from "./ContactClient";

 const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  title: "Contact LuxeDrives | Book Your Car Today",
  description:
    "Get in touch with LuxeDrives for bookings, inquiries, and support. We're here to help you find the perfect rental car.",
  alternates: {
    canonical: `${siteUrl}contact`,
  },
};
export default function Contact() {


  return (
  <ContactClient></ContactClient>
  );
}