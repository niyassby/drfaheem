import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

function StorySec({ item, index }) {
  if (!item) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary-100 transition-all duration-300 h-full flex flex-col"
    >
      <div className="absolute top-0 left-0 w-2 h-0 group-hover:h-full bg-primary-500 rounded-l-2xl transition-all duration-300" />

      <div className="relative z-10 space-y-4 flex-grow">
        {item.head && (
          <h3 className="text-2xl font-bold text-primary-800 main-font">
            {item.head}
          </h3>
        )}

        {item.head2 && (
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary-600">
            {item.head2}
          </p>
        )}

        {item.disc && (
          <p className="text-gray-600 leading-relaxed italic border-l-2 border-gray-100 pl-4 py-1">
            {item.disc}
          </p>
        )}

        {item.items && (
          <div className="space-y-3 pt-2">
            {item.items.map((listItem, i) => (
              <div key={i} className="flex items-start gap-3 group/item">
                <div className="mt-1 flex-shrink-0">
                  <div className="bg-primary-50 text-primary-600 p-1 rounded-full group-hover/item:bg-primary-500 group-hover/item:text-white transition-colors duration-200">
                    <Check size={12} strokeWidth={3} />
                  </div>
                </div>
                <p className="text-sm text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">{listItem}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default StorySec;

