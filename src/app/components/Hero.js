"use client"
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import {
  FaArrowRight,
  FaStar,
  FaCarSide,
  FaMapMarkerAlt,
} from "react-icons/fa";


export default function Hero() {
const router = useRouter()
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-stone-50 to-white">
      {/* Background Blur */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-amber-200/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-zinc-200/30 blur-[120px]" />

      <div className="container mx-auto px-5 lg:px-16 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          
          {/* Image First On Mobile */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative order-1 lg:order-2 mx-auto w-full max-w-xl"
          >
            {/* Main Car Image */}
            <motion.img
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            
              src="/fleet/audia4.webp"
              alt="Luxury Car"
              className="relative z-10 w-full rounded-[24px] sm:rounded-[40px] shadow-2xl"
            />

            {/* Floating Card 1 */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute left-2 top-4 sm:left-0 sm:top-12 z-20 rounded-2xl bg-white/95 p-3 sm:p-5 shadow-xl backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <FaCarSide className="text-lg text-amber-500" />

                <div>
                  <p className="text-sm sm:text-base font-semibold text-zinc-900">
                  Audi A4
                  </p>

                  <span className="text-xs sm:text-sm text-zinc-500">
                    Available Now
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute bottom-2 right-2 sm:bottom-10 sm:right-0 z-20 rounded-2xl bg-white/95 p-3 sm:p-5 shadow-xl backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-lg text-amber-500" />

                <div>
                  <p className="text-sm sm:text-base font-semibold text-zinc-900">
                    10+ Locations
                  </p>

                  <span className="text-xs sm:text-sm text-zinc-500">
                    Across India
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 shadow-sm"
            >
              <FaStar className="text-amber-500" />

              <span className="text-sm font-medium text-zinc-700">
                Premium Car Rental Experience
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-black leading-tight text-zinc-900">
              Drive Luxury
              <span className="block text-amber-600">
                Without Limits
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-zinc-600">
              Experience elite mobility with Luxe Rides. Choose from a
              handpicked fleet of premium vehicles designed for comfort,
              performance, and unforgettable journeys.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button onClick={()=>{router.push('/fleet')}} className="group cursor-pointer  flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-zinc-900 px-8 py-4 font-medium text-white transition hover:bg-black">
                Explore Fleet

                <FaArrowRight className="transition group-hover:translate-x-1" />
              </button>

              <button onClick={()=>{router.push('/contact')}} className="w-full cursor-pointer sm:w-auto rounded-full border border-zinc-300 px-8 py-4 font-medium text-zinc-700 transition hover:bg-white">
                Book now
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900">
                  500+
                </h3>

                <p className="text-sm sm:text-base text-zinc-500">
                  Vehicles
                </p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900">
                  50K+
                </h3>

                <p className="text-sm sm:text-base text-zinc-500">
                  Clients
                </p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900">
                  4.9
                </h3>

                <p className="text-sm sm:text-base text-zinc-500">
                  Rating
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}