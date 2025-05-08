"use client"

import { motion } from "framer-motion";

const HowItWorks = () => {
 

  
    const steps = [
        {
            number: 1,
            title: "Upload Entries",
            description: "Input your participant list with up to 20,000 entries",
            icon: "📋"
        },
        {
            number: 2,
            title: "Set Shuffle Rounds",
            description: "Roll virtual dice or choose your own number of shuffle iterations",
            icon: "🎲"
        },
        {
            number: 3,
            title: "Get Your Winner",
            description: "View the entire selection process with iteration-by-iteration results",
            icon: "🏆"
        }
    ];

    return (
        <section className="relative w-full py-10 sm:py-16 md:py-20 overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center mb-8 md:mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 bg-clip-text cal-sans-regular ">
                        How It Works
                    </h2>
                    <div className="w-16 md:w-20 h-1 bg-yellow-600 mx-auto"></div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-16"
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="relative mb-4 md:mb-6">
                                <motion.div
                                    className="w-16 h-16 md:w-20 md:h-20 bg-yellow-600 text-black rounded-2xl flex items-center justify-center text-3xl md:text-4xl mb-4 shadow-lg shadow-yellow-900/20 transform transition-transform group-hover:scale-110"
                                    whileHover={{
                                        rotate: [0, -5, 5, -5, 0],
                                        transition: { duration: 0.5 }
                                    }}
                                >
                                    {step.icon}
                                </motion.div>
                                <div className="absolute -top-3 -right-3 w-6 h-6 md:w-8 md:h-8 bg-black rounded-full flex items-center justify-center text-xs md:text-sm font-bold border-2 border-yellow-600">
                                    {step.number}
                                </div>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 group-hover:text-yellow-400 transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-sm md:text-base text-gray-600">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="flex justify-center"
                >
                    <button className="shadow-[0_0_0_3px_#000000_inset] px-4 sm:px-6 py-2 bg-transparent border border-black text-black rounded-lg font-bold transform hover:-translate-y-1 transition cursor-pointer duration-400"
                        onClick={() => window.location.href = "/draw"}
                    >
                        Start Drawing Winners Now
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;


