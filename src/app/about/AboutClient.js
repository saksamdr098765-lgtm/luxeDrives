"use client"
import React from 'react'
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  FaCar,
  FaCrown,
  FaShieldAlt,
  FaClock,
  FaUsers,
  FaStar,
} from "react-icons/fa";
export default function AboutClient() {
    const router=useRouter()
   
  const stats = [
    { value: "50+", label: "Luxury Vehicles" },
    { value: "10K+", label: "Happy Clients" },
    { value: "15+", label: "Premium Brands" },
    { value: "24/7", label: "Support Available" },
  ];

  const values = [
    {
      icon: <FaCrown />,
      title: "Luxury First",
      desc: "Every journey is crafted with elegance, comfort, and prestige.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Safety Assured",
      desc: "Professionally maintained vehicles with top safety standards.",
    },
    {
      icon: <FaClock />,
      title: "Always On Time",
      desc: "Reliable service with punctual pickups and seamless experiences.",
    },
    {
      icon: <FaStar />,
      title: "Exceptional Service",
      desc: "Dedicated support and personalized attention for every client.",
    },
  ];
  return (
     <div className="bg-stone-50">

      {/* HERO */}
      <section className="relative overflow-hidden bg-zinc-950 py-32">
        <div className="absolute inset-0 opacity-20">
          <img
           loading="lazy"
            src="/about.webp"
            alt="car"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 text-center text-white">
          <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2 text-sm text-amber-400">
            About LuxeDrives
          </span>

          <h1 className="mt-6 text-5xl font-black md:text-7xl">
            Driving Luxury Beyond Expectations
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-300">
            LuxeDrives is dedicated to delivering premium transportation
            experiences through an exceptional fleet of luxury vehicles and
            world-class customer service.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-semibold text-amber-600">
              OUR STORY
            </span>

            <h2 className="mt-4 text-4xl font-black text-zinc-900">
              Luxury Mobility Redefined
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-zinc-600">
              Founded with a vision to redefine luxury transportation,
              LuxeDrives offers a curated collection of premium vehicles for
              business, leisure, weddings, airport transfers, and special
              occasions.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              Our commitment is simple: provide an extraordinary driving
              experience through unmatched comfort, reliability, and service.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
             loading="lazy"
              src="/about2.webp"
              alt="car"
              className="rounded-[32px] shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="text-center">
              <h3 className="text-5xl font-black text-amber-500">
                {item.value}
              </h3>
              <p className="mt-3 text-zinc-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-4xl font-black text-zinc-900">
            Why Choose LuxeDrives
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-500">
            We combine luxury, convenience, and reliability to create
            unforgettable travel experiences.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="rounded-3xl bg-white p-8 shadow-lg"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-2xl text-amber-600">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-zinc-500">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-zinc-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <img
             loading="lazy"
              src="/about3.webp"
              alt="car"
              className="rounded-[32px]"
            />

            <div>
              <span className="text-amber-400 font-semibold">
                PREMIUM EXPERIENCE
              </span>

              <h2 className="mt-4 text-4xl font-black">
                More Than Just Car Rental
              </h2>

              <p className="mt-6 text-lg text-zinc-400">
                From executive travel and airport transfers to weddings and
                special events, LuxeDrives provides tailored transportation
                solutions designed around your needs.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <FaCar className="text-amber-400" />
                  Premium luxury fleet
                </div>

                <div className="flex items-center gap-3">
                  <FaUsers className="text-amber-400" />
                  Professional chauffeurs
                </div>

                <div className="flex items-center gap-3">
                  <FaShieldAlt className="text-amber-400" />
                  Fully insured vehicles
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-5xl font-black text-zinc-900">
            Experience Luxury Today
          </h2>

          <p className="mt-5 text-lg text-zinc-500">
            Discover why thousands of customers trust LuxeDrives for premium
            transportation experiences.
          </p>

          <button onClick={()=>{router.push("/fleet")}} className="mt-8 rounded-full bg-zinc-900 px-8 py-4 font-semibold text-white transition hover:bg-black">
            Explore Our Fleet
          </button>
        </div>
      </section>

    </div>
  )
}
