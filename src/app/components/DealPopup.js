"use client";

import { useEffect, useState } from "react";
import { FaTimes, FaCarSide, FaBolt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import PersonalData from "./PersonalData";
import trackEvent from "../Utils/Analytics";

export default function DealPopup() {
  const [show, setShow] = useState(false);
  const { whatsapp } = PersonalData;

  useEffect(() => {
    const alreadySeen = localStorage.getItem("dealPopupSeen");

    if (!alreadySeen) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setShow(false);
    localStorage.setItem("dealPopupSeen", "true");
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.8, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 40, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative w-[92%] max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-black p-6 text-white shadow-2xl border border-white/10"
          >
            {/* Glow effect */}
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-amber-500 blur-3xl opacity-30" />

            {/* Close */}
            <button
              onClick={closePopup}
              className="absolute right-5 top-5 text-zinc-300 hover:text-white"
            >
              <FaTimes />
            </button>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-1 text-xs text-amber-400 border border-amber-500/30">
              <FaBolt />
              LIMITED TIME OFFER
            </div>

            {/* Title */}
            <h2 className="mt-5 text-3xl font-black leading-tight">
              Get <span className="text-amber-400">40% OFF</span> on Monthly
              Rentals
            </h2>

            {/* Description */}
            <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
              Book any luxury vehicle for 1 month and unlock an exclusive discount.
              Perfect for long trips, weddings, and business use.
            </p>

            {/* Feature */}
            <div className="mt-5 flex items-center gap-3 text-sm text-zinc-300">
              <FaCarSide className="text-amber-400" />
              Premium fleet • Chauffeur available • 24/7 support
            </div>

            {/* CTA */}
            <a
              href={`https://wa.me/${whatsapp}`}
              onClick={()=>{  trackEvent("whatsapp_click",{
                    page_location:window.location.href
                  })}}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full rounded-2xl bg-amber-500 py-3 text-center font-semibold text-black hover:bg-amber-400 transition"
            >
              Claim Offer on WhatsApp
            </a>

            <button
              onClick={closePopup}
              className="mt-3 w-full text-sm text-zinc-400 hover:text-white"
            >
              Maybe later
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}