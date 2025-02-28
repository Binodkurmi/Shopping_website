import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.div
      className="relative flex flex-col sm:flex-row items-center justify-between px-8 sm:px-16 py-12 min-h-[80vh] shadow-lg rounded-xl overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${assets.hero_bg})` }} // ✅ Add background image here
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Left Section */}
      <motion.div
        className="w-full sm:w-1/2 flex flex-col items-center sm:items-start text-center sm:text-left space-y-6 bg-white bg-opacity-70 p-6 rounded-lg"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="flex items-center gap-2 text-gray-700">
          <div className="w-8 h-[2px] bg-gray-700"></div>
          <p className="font-medium text-sm md:text-base tracking-wide">OUR BESTSELLERS</p>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-snug">
          Latest Arrivals
        </h1>

        <motion.button
          className="mt-4 px-6 py-3 bg-gray-900 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-gray-700 transition-all"
          whileHover={{ scale: 1.05 }}
        >
          SHOP NOW
        </motion.button>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-full sm:w-1/2 flex justify-center"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <img className="w-full max-w-md sm:max-w-lg rounded-xl shadow-xl" src={assets.hero_img} alt="Hero" />
      </motion.div>

      {/* Background Effect */}
      <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] bg-gray-200 opacity-50 rounded-full blur-3xl"></div>
    </motion.div>
  );
}

export default Hero;
