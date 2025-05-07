"use client"

import { Announcement, AnnouncementTitle } from "@/components/Announcements";
import HowItWorks from "@/components/how-it-works";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { WorldMap } from "@/components/ui/world-map";
import { motion } from "framer-motion";

const featuresArray = [
  {
    title: "High Capacity",
    description: "Support for up to 20,000 entries in a single drawing",
    // icon: "M8 2h8 M9 2v2.789a4 4 0 0 1-1.467 3.108l-1.154.77a4 4 0 0 0-1.466 3.108V12 M15 2v2.789a4 4 0 0 0 1.467 3.108l1.154.77a4 4 0 0 1 1.466 3.108V12 M3 12h18 M3 12v8h18v-8 M8 20.01V20 M16 20.01V20"
  },
  {
    title: "Quantum Algorithms",
    description: "True randomness powered by quantum computing technology",
    // icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z M3.27 6.96 12 12.01 20.73 6.96 M12 22.08V12"
  },
  {
    title: "Multiple Shuffle Rounds",
    description: "Dice-based random rounds or manual control for customized shuffling",
    // icon: "M1 3h22v18H1z M7 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M17 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
  },
  {
    title: "Transparent Process",
    description: "View results of every iteration for complete transparency and authenticity",
    // icon: "M22 12h-6l-2-3h-4l-2 3H2 M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
  }
];

export default function Home() {
  return (
    <div className="w-full flex flex-col bg-black justify-center items-center text-white py-6 md:py-10 lg:py-16">
      {/* Hero Section with Map Background */}
      <div className="relative w-full min-h-[50vh] md:min-h-[60vh] lg:h-[80vh] flex justify-center items-center overflow-hidden">
        {/* Map Background */}
        <div className="absolute inset-0 w-full h-full opacity-60">
          <WorldMap
            dots={[
              {
                start: {
                  lat: 64.2008,
                  lng: -149.4937,
                }, // Alaska (Fairbanks)
                end: {
                  lat: 34.0522,
                  lng: -118.2437,
                }, // Los Angeles
              },
              {
                start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              },
              {
                start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
              },
              {
                start: { lat: 51.5074, lng: -0.1278 }, // London
                end: { lat: 28.6139, lng: 77.209 }, // New Delhi
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
              },
            ]}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col gap-3 md:gap-4 items-center py-6 md:py-8 px-4 md:px-8 rounded-2xl">
          <Announcement className="-mb-1 md:-mb-2 max-w-2xs text-center">
            <AnnouncementTitle>
              <span className="montserrat-700 text-sm md:text-base">
                Powered by Quantum RNG ⚡
              </span>
            </AnnouncementTitle>
          </Announcement>
          <span className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold text-center cal-sans-regular">Promo Dome</span>
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-center yellowtail-400">Choose your winners <span className="text-yellow-600">randomly</span></span>
          <motion.button
            className="mt-2 cursor-pointer md:mt-4 shadow-[0_0_0_3px_#000000_inset] px-4 md:px-6 py-2 bg-transparent border border-white text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
            onClick={() => window.location.href = "/draw"}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 cal-sans-regular">Truly Random Winner Selection</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Our platform uses quantum algorithms to ensure completely unbiased and unpredictable results for your giveaways, raffles, and contests.
          </p>
        </div>
        <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-8">
          <HoverEffect items={featuresArray} />
        </div>
      </div>

      {/* How It Works Section */}
      <HowItWorks />

    </div>
  );
}
