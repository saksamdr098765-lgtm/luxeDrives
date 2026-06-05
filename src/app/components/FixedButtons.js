"use client";

import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import PersonalData from "./PersonalData";

export default function FloatingButtons() {
  const { whatsapp, phone } = PersonalData;

  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:scale-110 transition"
      >
        <FaWhatsapp size={26} />
      </a>

      {/* Call */}
      <a
        href={`tel:${phone}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:scale-110 transition"
      >
        <FaPhoneAlt size={22} />
      </a>

    </div>
  );
}