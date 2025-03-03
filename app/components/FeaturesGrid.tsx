'use client';
import { motion } from 'framer-motion';
import { 
  QrCodeIcon,
  FolderIcon,
  ArrowsRightLeftIcon,
  ChatBubbleLeftRightIcon,
  DocumentDuplicateIcon,
  WindowIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Easy File Transfer',
    description: 'Quick file transfer from other devices via QR code or IP address',
    icon: QrCodeIcon,
  },
  {
    title: 'Automatic Organization',
    description: 'Files are automatically organized into date-based folders for easy management',
    icon: FolderIcon,
  },
  {
    title: 'Duplicate Control',
    description: 'Smart duplicate detection prevents re-downloading of existing files',
    icon: DocumentDuplicateIcon,
  },
  {
    title: 'Instant Messaging',
    description: 'Built-in messaging feature for quick communication between devices',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    title: 'Sharing Folder',
    description: 'Dedicated sharing folder to make specific files available to other devices',
    icon: ArrowsRightLeftIcon,
  },
  {
    title: 'User-Friendly Interface',
    description: 'Modern and intuitive interface for both desktop and web clients',
    icon: WindowIcon,
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="w-full py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need for seamless file transfers between your devices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}