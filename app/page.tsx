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
  },
  {
    title: "Quantum Algorithms",
    description: "True randomness powered by quantum computing technology",
  },
  {
    title: "Multiple Shuffle Rounds",
    description: "Dice-based random rounds or manual control for customized shuffling",
  },
  {
    title: "Transparent Process",
    description: "View results of every iteration for complete transparency and authenticity",
  }
];

export default function Home() {
  return (
    <div className="w-full flex flex-col  justify-center items-center py-6 md:py-10 lg:py-16">
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
          <Announcement className="-mb-1  md:-mb-2 max-w-2xs text-center">
            <AnnouncementTitle>
              <span className="montserrat-700  text-sm md:text-base text-yellow-600">
                Powered by Quantum RNG ⚡
              </span>
            </AnnouncementTitle>
          </Announcement>
          <span className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold text-center text-black cal-sans-regular">Promo Dome</span>
          <span className="text-lg text-black sm:text-xl md:text-2xl font-bold text-center yellowtail-400">Choose your winners <span className="text-yellow-600">randomly</span></span>
          <motion.button
            className="mt-2 cursor-pointer md:mt-4 shadow-[0_0_0_3px_#000000_inset] px-4 md:px-6 py-2 bg-transparent border border-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
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
          <h2 className="text-2xl  sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 cal-sans-regular">Truly Random Winner Selection</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
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
