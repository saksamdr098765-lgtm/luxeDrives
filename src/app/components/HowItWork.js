"use client"
import { motion } from "framer-motion";
import {
  FaSearch,
  FaCalendarCheck,
  FaCarSide,
} from "react-icons/fa";

const steps = [
  {
    number: "01",
    icon: <FaSearch />,
    title: "Choose Your Vehicle",
    description:
      "Browse our curated collection of luxury sedans, SUVs, sports cars, and exotic vehicles tailored to your journey.",
  },
  {
    number: "02",
    icon: <FaCalendarCheck />,
    title: "Confirm Your Reservation",
    description:
      "Select your preferred dates, location, and rental options with our seamless booking experience.",
  },
  {
    number: "03",
    icon: <FaCarSide />,
    title: "Enjoy The Experience",
    description:
      "Pick up your vehicle or have it delivered directly to your location and enjoy luxury without compromise.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-stone-50 py-24 px-6">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full border border-amber-200 bg-amber-50 px-5 py-2 text-sm font-medium text-amber-700">
            Simple Process
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-zinc-900">
            How Luxe Rides Works
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-500">
            Experience premium car rentals through a streamlined process
            designed for convenience and luxury.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-[32px] bg-white p-8 shadow-[0_15px_50px_rgba(0,0,0,0.05)]"
            >
              {/* Big Step Number */}
              <h1 className="absolute right-6 top-2 text-8xl font-black text-zinc-100">
                {step.number}
              </h1>

              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 text-2xl text-amber-600">
                {step.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold text-zinc-900">
                {step.title}
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-500">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[40px] bg-zinc-900 p-10 md:p-14 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-black text-white">
            Luxury Delivered To Your Doorstep
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-zinc-400">
            Need airport pickup, chauffeur service, or direct vehicle
            delivery? Our concierge team ensures every detail is handled
            with precision.
          </p>
        </motion.div>
      </div>
    </section>
  );
}