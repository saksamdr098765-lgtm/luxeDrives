"use client"
import { motion } from "framer-motion";
import {
 
  FaArrowRight,
} from "react-icons/fa";
import PersonalData from "./PersonalData";
import { useRouter } from "next/navigation";
import trackEvent from "../Utils/Analytics";


PersonalData

const cars = [
  {
    id: 1,
    name: "Thar 4x4 Soft Top Automatic",
    category: "Off-Road SUV",
    price: "₹4500",
    image: "/fleet/thar.webp",
  },
  {
    id: 2,
    name: "Swift Manual",
    category: "Hatchback",
    price: "₹1800",
    image: "/fleet/swift.webp",
  },
  {
    id: 3,
    name: "Scorpio S11",
    category: "SUV",
    price: "₹3500",
    image: "/fleet/scorpios11.webp",
  },
];

export default function FeaturedFleet() {
const router=useRouter()
  const {whatsapp}=PersonalData
  return (
    <section className="bg-stone-50 py-24 px-6">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-amber-200 bg-amber-50 px-5 py-2 text-sm font-medium text-amber-700">
            Premium Collection
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-zinc-900">
            Featured Fleet
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-500">
            Discover our handpicked selection of luxury vehicles
            crafted for comfort, performance, and prestige.
          </p>
        </motion.div>

        {/* Fleet Grid */}
  
<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
  {cars.map((car, index) => (
    <motion.div
      key={car.id}
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-[32px]"
    >
      {/* Image */}
      <img
        loading="lazy"
        src={car.image}
        alt={car.name}
        className="h-[450px] md:h-[500px] w-full object-cover transition duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Category */}
      <div className="absolute left-5 top-5">
        <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
          {car.category}
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-amber-400">
          Premium Collection
        </p>

        <h3 className="text-2xl md:text-3xl font-black text-white">
          {car.name}
        </h3>

        <p className="mt-3 max-w-md text-sm text-zinc-300">
          Experience unmatched comfort, performance and style with our
          premium vehicle fleet.
        </p>

        <button
          onClick={() => {
              trackEvent("whatsapp_click",{
                  page_location:window.location.href
                })
            const message = `Hi LuxeDrives, I would like to book the ${car.name}. Please share availability and pricing details.`;

            window.open(
              `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`,
              "_blank"
            );
          }}
          className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black"
        >
          Reserve Vehicle
          <FaArrowRight />
        </button>
      </div>
    </motion.div>
  ))}
</div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button onClick={()=>{router.push('/fleet')}} className="rounded-full border border-zinc-300 px-8 py-4 font-semibold text-zinc-800 transition hover:bg-white">
            View Entire Fleet
          </button>
        </motion.div>
      </div>
    </section>
  );
}