import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import QueryInput from "../imports/Frame2615143";
import ProductSection from "./components/ProductSection";
import SalesLogicSection from "./components/SalesLogicSection";

export default function App() {
  return (
    <div className="bg-black min-h-screen w-full overflow-hidden">
      {/* Header Section */}
      <header className="relative w-full max-w-[1000px] mx-auto px-6 sm:px-10 md:px-16 py-8 md:py-12 flex items-center justify-center min-h-[calc(100vh-80px)] md:min-h-screen">
        {/* Hero Content */}
        <div className="relative z-10 space-y-8 md:space-y-12 text-center w-full">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6 mt-[0px] mr-[0px] mb-[24px] ml-[0px]"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-[0px] mr-[0px] mb-[12px] ml-[0px] px-4 sm:px-0">
              <span className="text-white">Let Your Data Work Smarter with </span>
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                DARVIS
              </span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg pt-[0px] pr-[0px] pb-[30px] md:pb-[60px] pl-[0px] px-4 sm:px-0">
              Unlock insights from your enterprise data through conversational AI
            </p>
          </motion.div>

          {/* Query Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-[1000px] mx-auto w-full"
          >
            <QueryInput />
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="pt-4"
          >
            <a
              href="https://tally.so/r/VLjLL6"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all text-sm sm:text-base"
            >
              <span>Schedule a Call</span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Animated Background Grid */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
      </header>

      {/* Product Section */}
      <ProductSection />

      {/* Sales Logic Section */}
      <SalesLogicSection />
    </div>
  );
}