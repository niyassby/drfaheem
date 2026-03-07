import React from 'react';
import { motion } from 'framer-motion';

function WhoIAm({ data }) {
    return (
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[32rem] h-[32rem] bg-secondary-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 mb-6 tracking-tight main-font">
                            {data.head}
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            {data.disc}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-10 flex justify-center"
                    >
                        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default WhoIAm;
