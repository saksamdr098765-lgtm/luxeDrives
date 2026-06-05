"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaShieldAlt,
  FaCrown,
  FaCar,
} from "react-icons/fa";
import PersonalData from "../components/PersonalData";


export default function ContactClient() {
  
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
    image: "/fleet/swift.jpg",
  },
  {
    id: 3,
    name: "Scorpio S11",
    category: "SUV",
    price: "₹3500",
    image: "/fleet/scorpios11.avif",
  },
  {
    id: 4,
    name: "Scorpio N",
    category: "Premium SUV",
    price: "₹4000",
    image: "/fleet/scropion.jpeg",
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
    image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1200",
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
    image: "/fleet/thar42.jpg",
  },
  {
    id: 9,
    name: "Fortuner",
    category: "Premium SUV",
    price: "₹6500",
    image: "/fleet/fortuner.jpg",
  },
];
const {whatsapp,phone,email,address}=PersonalData

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    date: "",
    time: "",
    pickup: "",
    dropoff: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
✨ *NEW LUXEDRIVES BOOKING*

━━━━━━━━━━━━━━

👤 *Customer Information*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

🚘 *Vehicle Selected*
${formData.vehicle}

📅 *Journey Details*
Date: ${formData.date}
Time: ${formData.time}

📍 *Pickup Location*
${formData.pickup}

🏁 *Drop-off Location*
${formData.dropoff}

📝 *Special Requests*
${formData.message || "None"}

━━━━━━━━━━━━━━
Sent from LuxeDrives Website
`;

    const whatsappUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
    
   
    <div className="bg-stone-50">
      {/* HERO */}
      <section className="relative overflow-hidden bg-zinc-950 py-28">
        <div className="absolute inset-0 opacity-20">
          <img
           loading="lazy"
            src="/contact.webp"
            alt="Luxury Car"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 text-center text-white">
          <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2 text-sm text-amber-400">
            Luxury Booking
          </span>

          <h1 className="mt-6 text-5xl font-black md:text-7xl">
            Reserve Your Luxury Ride
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-300">
            Submit your booking request and our concierge team will help arrange
            the perfect luxury vehicle for your journey.
          </p>
        </div>
      </section>

      {/* BOOKING FORM */}
     <section className="py-12 md:py-24">
  <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-3">
    {/* FORM */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-[24px] bg-white p-5 sm:p-6 md:p-8 shadow-xl lg:col-span-2"
    >
      <h2 className="text-2xl md:text-3xl font-black text-zinc-900">
        Booking Details
      </h2>

      <form onSubmit={handleSubmit} className="mt-6 md:mt-8 space-y-5">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Full Name"
            required
            className="w-full rounded-2xl border border-zinc-200 px-4 py-3 md:px-5 md:py-4 outline-none transition focus:border-amber-500"
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email Address"
            required
            className="w-full rounded-2xl border border-zinc-200 px-4 py-3 md:px-5 md:py-4 outline-none transition focus:border-amber-500"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full rounded-2xl border border-zinc-200 px-4 py-3 md:px-5 md:py-4 outline-none transition focus:border-amber-500"
          />

          <select
            name="vehicle"
            value={formData.vehicle}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-zinc-200 px-4 py-3 md:px-5 md:py-4 outline-none transition focus:border-amber-500"
          >
           <option value="">Select Vehicle</option>

  {cars.map((car) => (
    <option key={car.id} value={car.name}>
      {car.name}
    </option>
  ))}
          </select>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            name="date"
            value={formData.date}
            onChange={handleChange}
            type="date"
            required
            className="w-full rounded-2xl border border-zinc-200 px-4 py-3 md:px-5 md:py-4 outline-none transition focus:border-amber-500"
          />

          <input
            name="time"
            value={formData.time}
            onChange={handleChange}
            type="time"
            required
            className="w-full rounded-2xl border border-zinc-200 px-4 py-3 md:px-5 md:py-4 outline-none transition focus:border-amber-500"
          />
        </div>

        <input
          name="pickup"
          value={formData.pickup}
          onChange={handleChange}
          type="text"
          placeholder="Pickup Location"
          required
          className="w-full rounded-2xl border border-zinc-200 px-4 py-3 md:px-5 md:py-4 outline-none transition focus:border-amber-500"
        />

        <input
          name="dropoff"
          value={formData.dropoff}
          onChange={handleChange}
          type="text"
          placeholder="Drop-off Location"
          required
          className="w-full rounded-2xl border border-zinc-200 px-4 py-3 md:px-5 md:py-4 outline-none transition focus:border-amber-500"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          placeholder="Special Requests..."
          className="w-full rounded-2xl border border-zinc-200 px-4 py-3 md:px-5 md:py-4 outline-none transition focus:border-amber-500"
        />

        <button
          type="submit"
          className="w-full cursor-pointer rounded-2xl bg-zinc-900 py-3 md:py-4 text-sm md:text-base font-semibold text-white transition hover:bg-black"
        >
          Submit Booking Request
        </button>
      </form>
    </motion.div>

    {/* SIDEBAR */}
    <div className="space-y-6">
      <div className="rounded-[24px] bg-zinc-900 p-5 sm:p-6 md:p-8 text-white">
        <h3 className="text-xl md:text-2xl font-bold">
          Contact Information
        </h3>

        <div className="mt-6 space-y-5">
          <div className="flex items-start gap-4">
            <FaPhoneAlt className="mt-1 shrink-0 text-amber-400" />
            <span>{phone}</span>
          </div>

          <div className="flex items-start gap-4">
            <FaEnvelope className="mt-1 shrink-0 text-amber-400" />
            <span className="break-all">{email}</span>
          </div>

          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="mt-1 shrink-0 text-amber-400" />
            <span className="break-words">{address}</span>
          </div>

          <div className="flex items-start gap-4">
            <FaClock className="mt-1 shrink-0 text-amber-400" />
            <span>24/7 Support</span>
          </div>
        </div>
      </div>

      <div className="rounded-[24px] bg-white p-5 sm:p-6 md:p-8 shadow-lg">
        <h3 className="text-xl md:text-2xl font-bold">
          Why Book With Us?
        </h3>

        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3">
            <FaCrown className="mt-1 shrink-0 text-amber-500" />
            <span>Premium luxury fleet</span>
          </div>

          <div className="flex items-start gap-3">
            <FaShieldAlt className="mt-1 shrink-0 text-amber-500" />
            <span>Fully insured vehicles</span>
          </div>

          <div className="flex items-start gap-3">
            <FaCar className="mt-1 shrink-0 text-amber-500" />
            <span>Professional chauffeurs</span>
          </div>

          <div className="flex items-start gap-3">
            <FaClock className="mt-1 shrink-0 text-amber-500" />
            <span>24/7 booking assistance</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
    </>
  );
}