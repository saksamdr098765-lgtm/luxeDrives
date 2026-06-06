"use client"
import { motion } from "framer-motion";
import {
  FaCrown,
  FaCar,
  FaPercentage,
  FaHeadset,
} from "react-icons/fa";
import PersonalData from "./PersonalData";
import trackEvent from "../Utils/Analytics";

export default function Promotion() {
    const {whatsapp}=PersonalData
    const handleClick=()=>{
         trackEvent("whatsapp_click",{
                            page_location:window.location.href
                          })
                          window.location.href=`https://wa.me/${whatsapp}`
    }
  const perks = [
    {
      icon: <FaPercentage />,
      title: "Up to 40% Savings",
      desc: "Exclusive discounts on monthly rentals.",
    },
    {
      icon: <FaCar />,
      title: "Priority Access",
      desc: "Book premium vehicles before everyone else.",
    },
    {
      icon: <FaCrown />,
      title: "Free Upgrades",
      desc: "Get complimentary vehicle upgrades when available.",
    },
    {
      icon: <FaHeadset />,
      title: "VIP Support",
      desc: "Dedicated concierge assistance 24/7.",
    },
  ];

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-yellow-500/30 text-yellow-400 text-sm tracking-widest uppercase">
            Exclusive Membership
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mt-6">
            Luxe Elite Membership
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto mt-6 text-lg">
            Drive luxury vehicles all month while enjoying premium
            benefits, priority reservations, and up to
            <span className="text-yellow-400 font-semibold">
              {" "}40% savings
            </span>
            on monthly rentals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {perks.map((perk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 text-center"
            >
              <div className="text-yellow-400 text-3xl mb-4 flex justify-center">
                {perk.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {perk.title}
              </h3>

              <p className="text-zinc-400 text-sm">
                {perk.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-yellow-500 to-amber-400 text-black rounded-[32px] p-10 md:p-14 text-center"
        >
          <h3 className="text-3xl md:text-5xl font-bold mb-4">
            Save More. Drive More.
          </h3>

          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Join Luxe Elite and unlock exclusive pricing on
            monthly bookings, premium support, and member-only perks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleClick} className="bg-black cursor-pointer text-white px-8 py-4 rounded-xl font-semibold">
              Join Membership
            </button>

          
          </div>
        </motion.div>
      </div>
    </section>
  );
}