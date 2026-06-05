"use client"
import {
  
  FaInstagram,

  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp
} from "react-icons/fa";
import Link from "next/link";
import PersonalData from "./PersonalData";
const company=[
  "Home",
  "Fleet",
   "Contact",
   "About"

]

export default function Footer() {
  const {address,phone,email,name,whatsapp,instagram,logo}=PersonalData
  const socialLinks = [
  {
    icon: FaWhatsapp,
    url: `https://wa.me/${whatsapp}`,
  },
  {
    icon: FaInstagram,
    url: instagram,
  },
];
  return (
    <footer className="bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        
        <div className="grid gap-12 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl  text-white">
              <img
              loading="lazy"
      src={logo}
      alt="Logo"
      className="h-full w-full object-cover"
    />
              </div>

              <div>
                <h2 className="text-2xl font-black">
                  {name}
                </h2>
                <p className="text-sm text-zinc-500">
                  Premium Car Rentals
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md leading-relaxed text-zinc-400">
              Discover luxury without compromise. From executive sedans
              to exotic supercars, Luxe Rides delivers unforgettable
              driving experiences tailored to every journey.
            </p>

         <div className="mt-8 flex gap-4">
  {socialLinks.map((item, index) => {
    const Icon = item.icon;

    return (
      <button
        key={index}
        onClick={() => window.open(item.url, "_blank")}
        className="flex h-11 cursor-pointer w-11 items-center justify-center rounded-full border border-zinc-800 transition hover:border-amber-500 hover:bg-amber-500"
      >
        <Icon />
      </button>
    );
  })}
</div>
          </div>

          {/* Fleet */}
          <div>
            <h3 className="mb-5 text-lg font-bold">
              Fleet
            </h3>

        <ul className="space-y-3 text-zinc-400">
  {[
 
    "Scorpio N",
    "Thar Roxx",
    "Audi A4",
    "Fortuner",
  ].map((car) => (
    <li key={car}>
      <a
        href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(
          `Hi, I would like to book the ${car}. Please share availability and pricing details.`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-amber-500"
      >
        {car}
      </a>
    </li>
  ))}
</ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-lg font-bold">
              Company
            </h3>
            <ul className="space-y-3 text-zinc-400">
              {company.map((item ,i)=>{
              return <li key={i}><Link  href={`/${item.toLowerCase()}`}>{item}</Link></li>
              })}
             
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-bold">
              Contact
            </h3>

            <ul className="space-y-5 text-zinc-400">
              <li className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-amber-500" />
                <span>{address}</span>
              </li>

              <li className="flex gap-3">
                <FaPhoneAlt className="mt-1 text-amber-500" />
                <span>{phone}</span>
              </li>

              <li className="flex gap-3">
                <FaEnvelope className="mt-1 text-amber-500 shrink-0" />
                <span>{email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 text-sm text-zinc-500 md:flex-row">
          <p>
            © 2026 Luxe Rides. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a>Privacy Policy</a>
            <a>Terms & Conditions</a>
            <a>Cookie Policy</a>
          </div>
        </div>
      </div>
      <div className=" border-zinc-800 pb-5 text-center text-sm text-zinc-500">
  Crafted with precision by{" "}
  <a
    href="https://rohit-portfolio-mern.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold text-amber-500 transition hover:text-amber-400"
  >
    Rohit Kumar
  </a>
</div>
    </footer>
  );
}