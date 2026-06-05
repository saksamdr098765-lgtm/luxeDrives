"use client"
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import PersonalData from "./PersonalData";
import { useRouter } from "next/navigation";



export default function CTA() {
  const router=useRouter()
  const {whatsapp}=PersonalData
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[40px] bg-zinc-900 px-8 py-16 text-center md:px-16"
        >
          {/* Glow Effects */}
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-amber-500/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white/5 blur-[120px]" />

          <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-amber-400">
            Luxury Awaits
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
            Your Journey Deserves
            <span className="block text-amber-400">
              More Than Transportation
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Experience unmatched comfort, prestige, and performance
            with our premium fleet of luxury vehicles.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button onClick={()=>{window.location=`https://wa.me/${whatsapp}`}} className="group cursor-pointer flex items-center gap-3 rounded-full bg-amber-500 px-8 py-4 font-semibold text-white transition hover:scale-105">
              Reserve Your Ride
              <FaArrowRight className="transition group-hover:translate-x-1" />
            </button>

            <button onClick={()=>{router.push('/contact')}} className="rounded-full cursor-pointer border border-zinc-700 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black">
              Contact Concierge
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}