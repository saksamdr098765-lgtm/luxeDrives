"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaArrowRight, FaCar, FaCrown, FaMapMarkerAlt } from "react-icons/fa";
import PersonalData from "@/app/components/PersonalData";
import trackEvent from "@/app/Utils/Analytics";

export default function LuxuryCarRentalClient() {
  const router = useRouter();
  const { whatsapp } = PersonalData;
  return (
    <div className="bg-stone-50">

      {/* HERO */}
      <section className="relative overflow-hidden bg-zinc-950 py-32 text-white">

        {/* background image */}
        <div className="absolute inset-0 opacity-30">
          <img
            src="/fleet/audia4.webp"
            alt="Luxury Car Rental"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 text-center">

          <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2 text-sm text-amber-400">
            Premium Chauffeur Experience
          </span>

          <h1 className="mt-6 text-5xl font-black md:text-7xl">
            Luxury Car Rental
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-300">
            Experience premium chauffeur-driven luxury cars in Chandigarh,
            Mohali & Panchkula with BMW, Mercedes & Audi from LuxeDrives.
          </p>

          <button
            onClick={() => router.push("/contact")}
            className="mt-8 flex mx-auto items-center gap-3 rounded-full bg-amber-500 px-8 py-4 font-semibold text-black hover:bg-amber-400 transition"
          >
            Book Now <FaArrowRight />
          </button>

        </div>
      </section>

      {/* SERVICE HIGHLIGHTS */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4">

          <div className="text-center">
            <FaCar className="mx-auto text-3xl text-amber-500" />
            <h3 className="mt-3 text-2xl font-bold">Luxury Fleet</h3>
            <p className="text-zinc-500">BMW, Audi, Mercedes</p>
          </div>

          <div className="text-center">
            <FaCrown className="mx-auto text-3xl text-amber-500" />
            <h3 className="mt-3 text-2xl font-bold">Premium Service</h3>
            <p className="text-zinc-500">Elite Chauffeurs</p>
          </div>

          <div className="text-center">
            <FaMapMarkerAlt className="mx-auto text-3xl text-amber-500" />
            <h3 className="mt-3 text-2xl font-bold">3 Cities</h3>
            <p className="text-zinc-500">Chandigarh Area</p>
          </div>

          <div className="text-center">
            <FaCrown className="mx-auto text-3xl text-amber-500" />
            <h3 className="mt-3 text-2xl font-bold">24/7</h3>
            <p className="text-zinc-500">Support</p>
          </div>

        </div>
      </section>

      {/* SERVICE DESCRIPTION */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl text-center">

          <h2 className="text-4xl font-black">
            Premium Luxury Experience
          </h2>

          <p className="mt-6 text-zinc-600 text-lg leading-relaxed">
            LuxeDrives offers high-end luxury car rental services designed for weddings,
            corporate travel, airport transfers, and special occasions. Every ride is
            delivered with comfort, elegance, and professionalism.
          </p>

        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-7xl">

          <h2 className="text-3xl font-bold text-center">
            Perfect For Every Occasion
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-8">

            {[
              "Wedding Luxury Car Arrival",
              "Airport Pickup & Drop",
              "Corporate Business Travel",
              "VIP Events & Celebrations",
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-3xl border border-zinc-200 bg-stone-50 p-6 hover:shadow-md transition"
              >
                🚗 {item}
              </div>
            ))}

          </div>
        </div>
      </section>
{/* FLEET SECTION */}
<section className="bg-white py-20 px-6">
  <div className="mx-auto max-w-7xl">

    <h2 className="text-3xl font-black text-center">
      Our Available Luxury & Premium Fleet
    </h2>

    <p className="mt-4 text-center text-zinc-600 max-w-2xl mx-auto">
      Choose from our curated collection of SUVs, sedans, and luxury vehicles available for rent.
    </p>

    <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {[
        "Thar 4x4 Soft Top Automatic",
        "Swift Manual",
        "Scorpio S11",
        "Scorpio N",
        "Thar Roxx",
        "Audi A4",
        "Fronx Automatic",
        "Thar 4x2 Manual",
        "Fortuner",
      ].map((car, i) => (
        <div
          key={i}
          className="rounded-3xl border border-zinc-200 bg-stone-50 p-6 hover:shadow-md transition"
        >
          <p className="text-lg font-semibold">🚗 {car}</p>

          <p className="mt-2 text-sm text-zinc-500">
            Available for self-drive & chauffeur service (based on category).
          </p>
        </div>
      ))}

    </div>
  </div>
</section>
      {/* CTA */}
      <section className="bg-zinc-950 py-24 text-center text-white">

        <div className="mx-auto max-w-4xl px-6">

          <h2 className="text-4xl font-black">
            Book Your Luxury Ride Today
          </h2>

          <p className="mt-5 text-zinc-400">
            Limited luxury cars available for weekends and weddings.
          </p>

          <button
            onClick={() => {
              trackEvent("whatsapp_click_services", {
                page: "luxury_car_rental",
              });

              window.open(
                `https://wa.me/${whatsapp}?text=${encodeURIComponent(
                  "Hi LuxeDrives, I want to book a luxury car rental. Please share availability."
                )}`,
                "_blank"
              );
            }}
            className="mt-8 rounded-full bg-amber-500 px-8 py-4 font-semibold text-black hover:bg-amber-400 transition"
          >
            Book on WhatsApp
          </button>

        </div>

      </section>

    </div>
  );
}