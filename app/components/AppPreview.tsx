'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AppPreview() {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Simple and Intuitive Interface</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            PC Drop provides a clean, easy-to-use interface that makes file transfer between devices a breeze
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video rounded-lg overflow-hidden shadow-2xl"
          >
            <Image
              src="/desktop-img.png"
              alt="PC Drop Desktop Interface"
              fill
              className="object-contain"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-video rounded-lg overflow-hidden shadow-2xl"
          >
            <Image
              src="/client-web.png"
              alt="PC Drop Web Interface"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative aspect-video rounded-lg overflow-hidden shadow-2xl max-w-3xl mx-auto"
        >
          <Image
            src="/client-web-shared-files.png"
            alt="PC Drop Shared Files Interface"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}