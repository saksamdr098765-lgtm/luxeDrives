"use client"
import { motion } from "framer-motion";
import {
  FaCarSide,
  FaUsers,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaCarSide />,
    value: "50+",
    label: "Premium Vehicles",
  },
  {
    icon: <FaUsers />,
    value: "50K+",
    label: "Happy Clients",
  },
  {
    icon: <FaMapMarkerAlt />,
    value: "10+",
    label: "Locations Worldwide",
  },
  {
    icon: <FaStar />,
    value: "4.9/5",
    label: "Customer Rating",
  },
];

export default function Statistics() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-amber-200 bg-amber-50 px-5 py-2 text-sm font-medium text-amber-700">
            Our Achievements
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-zinc-900">
            Luxury Driven By Numbers
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-500">
            Trusted by travelers, executives, and luxury enthusiasts
            across the globe.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group rounded-[32px] border border-zinc-100 bg-stone-50 p-8 transition"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-2xl text-amber-500 shadow-sm">
                {stat.icon}
              </div>

              <h3 className="mt-8 text-5xl font-black text-zinc-900">
                {stat.value}
              </h3>

              <p className="mt-3 text-lg text-zinc-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Luxury Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden rounded-[40px] bg-zinc-900 p-10 md:p-14"
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-3xl md:text-5xl font-black text-white">
                Excellence On Every Road
              </h3>

              <p className="mt-5 text-lg text-zinc-400">
                From luxury sedans to exotic supercars, every vehicle
                in our fleet is selected to deliver an unforgettable
                driving experience.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-4xl font-black text-amber-400">
                  98%
                </h4>
                <p className="mt-2 text-zinc-400">
                  Repeat Customers
                </p>
              </div>

              <div>
                <h4 className="text-4xl font-black text-amber-400">
                  24/7
                </h4>
                <p className="mt-2 text-zinc-400">
                  Concierge Support
                </p>
              </div>

              <div>
                <h4 className="text-4xl font-black text-amber-400">
                  10+
                </h4>
                <p className="mt-2 text-zinc-400">
                  Years Experience
                </p>
              </div>

              <div>
                <h4 className="text-4xl font-black text-amber-400">
                  100%
                </h4>
                <p className="mt-2 text-zinc-400">
                  Insured Fleet
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}