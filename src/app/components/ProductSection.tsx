import { motion } from "motion/react";
import dbChatImage from "@/assets/fd2b40702c3c414ade4efcc6cce08a4e961750c8.png";
import documentChatImage from "@/assets/e129f3c0cb473fbd59e41b6d1e2eacc7ceebb71a.png";

export default function ProductSection() {
  return (
    <section className="bg-black min-h-screen w-full py-20 px-16">
      <div className="max-w-[1440px] mx-auto space-y-16">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mt-[0px] mr-[0px] mb-[64px] ml-[0px]"
        >
          <h2 className="font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-[36px] mt-[0px] mr-[0px] mb-[8px] ml-[0px]">
            DARVIS Product Features
          </h2>
          <p className="text-gray-400">
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
          <h3 className="text-white">
            <span className="text-purple-400">01.</span> Database Chat
          </h3>
          
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
          <h3 className="text-white">
            <span className="text-purple-400">02.</span> Document Chat
          </h3>
          
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
    </section>
  );
}