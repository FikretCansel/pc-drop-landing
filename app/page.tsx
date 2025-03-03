'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import FeaturesGrid from './components/FeaturesGrid';
import AppPreview from './components/AppPreview';
import { APP_CONFIG } from './constants/config';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Transfer Files Effortlessly
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Quick and secure file transfers between your devices with PC Drop
            </p>
            <a
              href="/PcDrop.exe"
              download
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download for Windows
            </a>
          </motion.div>
        </div>
      </div>

      {/* Requirements Section */}
      <div className="w-full py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold mb-4">System Requirements</h2>
            <div className="max-w-2xl mx-auto">
              <div className="text-left mb-6">
                <h3 className="text-xl font-semibold mb-3">System:</h3>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>✓ Windows Operating System</li>
                  <li>✓ Python 3.8 or higher</li>
                </ul>
                <h3 className="text-xl font-semibold mb-3">Key Dependencies:</h3>
                <ul className="text-gray-600 space-y-2 grid md:grid-cols-2 gap-2">
                  <li>• FastAPI 0.115+</li>
                  <li>• Uvicorn 0.34+</li>
                  <li>• Jinja2 3.1+</li>
                  <li>• WebSockets 15.0+</li>
                  <li>• QR Code 8.0+</li>
                  <li>• Pillow 11.1+</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-left">
                <p className="text-sm text-gray-600 mb-2">For developers building from source:</p>
                <code className="bg-gray-800 text-white p-2 rounded block mb-2">pip install -r requirements.txt</code>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <FeaturesGrid />

      {/* App Preview */}
      <AppPreview />

      {/* Usage Guide */}
      <div className="w-full py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">How to Use PC Drop</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Launch PC Drop</h3>
                  <p className="text-gray-600">Start the application after downloading and installing it on your Windows computer.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Set Up Your Folders</h3>
                  <p className="text-gray-600">Select your download folder in the "INBOX" section and choose which folder to share in the "SHARING BOX" section.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Connect Your Device</h3>
                  <p className="text-gray-600">Scan the QR code with your mobile device or open the displayed IP address in a web browser.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Start Transferring</h3>
                  <p className="text-gray-600">Begin sending and receiving files through the web interface. Use the chat feature for quick communication between devices.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Download Section */}
      <div id="download" className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8">Get Started with PC Drop</h2>
            <div className="max-w-2xl mx-auto mb-8">
              <h3 className="text-xl font-semibold mb-4">Configuration Options</h3>
              <ul className="text-gray-600 text-left space-y-2 mb-8">
                <li>• Automatic File Organization: Files are organized into year/month folders</li>
                <li>• Skip Duplicate Files: Option to prevent re-downloading of existing files</li>
              </ul>
            </div>
            <a
              href="/PcDrop.exe"
              download
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v18m0 0l-8-8m8 8l8-8" />
              </svg>
              Download for Windows
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
