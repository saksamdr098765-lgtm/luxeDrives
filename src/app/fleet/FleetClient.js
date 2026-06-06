"use client"
import { motion } from "framer-motion";
import {
  FaUsers,

  FaArrowRight,
  FaCar,
  FaCrown,
  FaShieldAlt,
} from "react-icons/fa";
import PersonalData from "../components/PersonalData";
import trackEvent from "../Utils/Analytics";


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
  {
    id: 4,
    name: "Scorpio N",
    category: "Premium SUV",
    price: "₹4000",
    image: "/fleet/scropion.webp",
  },
  {
    id: 5,
    name: "Thar Roxx",
    category: "Off-Road SUV",
    price: "₹5000",
    image: "/fleet/tharrox.webp",
  },
  {
    id: 6,
    name: "Audi A4",
    category: "Luxury Sedan",
    price: "₹7000",
    image: "/fleet/audia4.webp",
  },
  {
    id: 7,
    name: "Fronx Automatic",
    category: "Compact SUV",
    price: "₹2500",
    image: "/fleet/fronx.avif",
  },
  {
    id: 8,
    name: "Thar 4x2 Manual",
    category: "Off-Road SUV",
    price: "₹4000",
    image: "/fleet/thar42.webp",
  },
  {
    id: 9,
    name: "Fortuner",
    category: "Premium SUV",
    price: "₹6500",
    image: "/fleet/fortuner.webp",
  },
];

export default function FleetClient() {
  const {whatsapp}=PersonalData

  return (
    <>
   
    <div className="bg-stone-50">
      {/* HERO */}
      <section className="relative overflow-hidden bg-zinc-950 py-32 text-white">
        <div className="absolute inset-0 opacity-20">
          <img
           loading="lazy"
            src="/contact.webp"
            alt="Luxury Car"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2 text-sm text-amber-400">
            Premium Vehicle Collection
          </span>

          <h1 className="mt-6 text-5xl font-black md:text-7xl">
            Our Luxury Fleet
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-300">
            Discover a curated collection of luxury sedans, executive SUVs,
            supercars, and chauffeur-driven vehicles tailored for every journey.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4">
          <div className="text-center">
            <FaCar className="mx-auto text-3xl text-amber-500" />
            <h3 className="mt-3 text-3xl font-bold">50+</h3>
            <p className="text-zinc-500">Luxury Cars</p>
          </div>

          <div className="text-center">
            <FaCrown className="mx-auto text-3xl text-amber-500" />
            <h3 className="mt-3 text-3xl font-bold">15+</h3>
            <p className="text-zinc-500">Premium Brands</p>
          </div>

          <div className="text-center">
            <FaShieldAlt className="mx-auto text-3xl text-amber-500" />
            <h3 className="mt-3 text-3xl font-bold">100%</h3>
            <p className="text-zinc-500">Insured Fleet</p>
          </div>

          <div className="text-center">
            <FaUsers className="mx-auto text-3xl text-amber-500" />
            <h3 className="mt-3 text-3xl font-bold">24/7</h3>
            <p className="text-zinc-500">Support</p>
          </div>
        </div>
      </section>

    

      {/* FLEET GRID */}
      <section className="pb-24 px-6">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {cars.map((car, index) => (
         <motion.div
  key={car.id}
  initial={{ opacity: 0, y: 70 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: index * 0.1 }}
  whileHover={{ y: -10 }}
  className={`group relative overflow-hidden rounded-[32px]
    ${index === 0 ? "xl:col-span-2" : ""}
  `}
>
  {/* Image */}
  <img
    loading="lazy"
    src={car.image}
    alt={car.name}
    className="h-[450px] md:h-[500px] xl:h-[550px] w-full object-cover transition duration-700 group-hover:scale-110"
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

    <h3 className="text-2xl md:text-3xl xl:text-4xl font-black text-white">
      {car.name}
    </h3>

    <p className="mt-3 max-w-md text-sm md:text-base text-zinc-300">
      Experience unmatched comfort, performance and style with our premium
      vehicle fleet.
    </p>

    <button
      onClick={() => {
         trackEvent(`whatsApp_click`,{
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
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-950 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-4xl font-black md:text-5xl">
            Ready to Drive Luxury?
          </h2>

          <p className="mt-5 text-lg text-zinc-400">
            Experience unmatched comfort, prestige, and performance with
            LuxeDrives premium vehicle collection.
          </p>

          <button  onClick={()=>{window.location=`https://wa.me/${whatsapp}`}} className="mt-8 cursor-pointer rounded-full bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400">
            Book Your Vehicle
          </button>
        </div>
      </section> 
    </div>
    </>
  );
}