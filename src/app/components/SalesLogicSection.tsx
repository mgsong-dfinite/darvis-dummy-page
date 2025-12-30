import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function SalesLogicSection() {
  const steps = [
    { number: "01", title: "QR Scan", subtitle: "Scan QR Code", active: true },
    { number: "02", title: "Web Form", subtitle: "Submit Your Info", active: false },
    { number: "03", title: "Contact", subtitle: "Within 48 Hours", active: false },
    { number: "04", title: "Video Meeting", subtitle: "Zoom Discussion", active: false },
    { number: "05", title: "Light POC", subtitle: "Proof of Concept", active: false },
    { number: "06", title: "POC Process", subtitle: "Implementation", active: false },
    { number: "07", title: "Contract", subtitle: "Partnership", active: true },
  ];

  return (
    <section className="bg-black w-full py-20 px-16">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-[36px]">
            DARVIS Adoption Made Simple
          </h2>
          <p className="text-gray-400">
            Simple & Efficient Process
          </p>
        </motion.div>

        <div className="max-w-[800px] mx-auto">
          {/* Process Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4 relative"
          >
            {/* Gradient Line */}
            <div className="absolute left-[22px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500" />

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 relative"
              >
                {/* Step Number */}
                <div
                  className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${
                    step.active
                      ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/50"
                      : "bg-gray-800 text-gray-400 border border-gray-700"
                  }`}
                >
                  {step.number}
                </div>

                {/* Step Content */}
                <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors">
                  <h4 className="text-white font-semibold mb-1">{step.title}</h4>
                  <p className="text-gray-400 text-sm">{step.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center mt-16"
        >
          <a
            href="https://tally.so/r/VLjLL6"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 px-10 py-5 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all text-lg"
          >
            <span>Get Started with DARVIS</span>
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
