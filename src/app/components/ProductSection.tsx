import { motion } from "motion/react";
import dbChatImage from "@/assets/fd2b40702c3c414ade4efcc6cce08a4e961750c8.png";
import documentChatImage from "@/assets/e129f3c0cb473fbd59e41b6d1e2eacc7ceebb71a.png";
import dbManagementImage from "@/assets/5d8c8d79fddbc8e2b500bb51abbbf89cf845ef12.png";
import scenarioManagementImage from "@/assets/9ab35d17bdfbb92b9d8c1cf7e2dabd01087b3c1a.png";
import documentManagementImage from "@/assets/c738bf03e0662054a6ba9102e03194e4730d354a.png";

export default function ProductSection() {
  return (
    <section className="bg-black min-h-screen w-full py-20 px-6 md:px-16">
      <div className="max-w-[1440px] mx-auto space-y-16">
        {/* User Features Section */}
        <div className="space-y-16">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mt-[0px] mr-[0px] mb-[64px] ml-[0px]"
          >
            <h2 className="font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-[28px] md:text-[36px] mt-[0px] mr-[0px] mb-[8px] ml-[0px]">
              DARVIS Product Features
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              Explore our powerful data conversation capabilities
            </p>
          </motion.div>

          {/* DB Chat Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-white text-xl md:text-2xl">
              <span className="text-purple-400">01.</span> Database Chat
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              Access and explore consolidated information from your company's databases.
            </p>
            
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/20"
            >
              <img 
                src={dbChatImage} 
                alt="Database Chat Interface"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>

          {/* Document Chat Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-white text-xl md:text-2xl">
              <span className="text-purple-400">02.</span> Document Chat
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              Search for the information you need based on your internal documents.
            </p>
            
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20"
            >
              <img 
                src={documentChatImage} 
                alt="Document Chat Interface"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Admin Features Section */}
        <div className="space-y-16 pt-16 border-t border-white/10">
          {/* Admin Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mt-[0px] mr-[0px] mb-[64px] ml-[0px]"
          >
            <h2 className="font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent text-[28px] md:text-[36px] mt-[0px] mr-[0px] mb-[8px] ml-[0px]">
              Admin Dashboard
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              Powerful management tools for your enterprise data
            </p>
          </motion.div>

          {/* Database Management Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-white text-xl md:text-2xl">
              <span className="text-cyan-400">01.</span> Database Management
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              Connect and manage your company's databases through the DB Management page.
            </p>
            
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-2xl shadow-cyan-900/20"
            >
              <img 
                src={dbManagementImage} 
                alt="Database Management Interface"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>

          {/* Scenario Management Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-white text-xl md:text-2xl">
              <span className="text-cyan-400">02.</span> Scenario Management
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              Review and refine how your company's data is structured to improve AI performance.
            </p>
            
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/20"
            >
              <img 
                src={scenarioManagementImage} 
                alt="Scenario Management Interface"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>

          {/* Document Management Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-white text-xl md:text-2xl">
              <span className="text-cyan-400">03.</span> Document Management
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              If you don't have an internal document platform, upload and manage your documents using DARVIS's built-in document management system.
            </p>
            
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20"
            >
              <img 
                src={documentManagementImage} 
                alt="Document Management Interface"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}