import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MobileMenu from './components/MobileMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PC Drop - Fast File Transfer Between Devices',
  description: 'PC Drop enables quick and secure file transfers between your devices using QR codes or IP addresses. Features automatic file organization and instant messaging.',
  keywords: 'file transfer, PC Drop, QR code transfer, local file sharing, Windows app',
  openGraph: {
    title: 'PC Drop - Fast File Transfer Between Devices',
    description: 'Quick and secure file transfers between your devices with PC Drop',
    images: ['/desktop-img.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PC Drop - Fast File Transfer Between Devices',
    description: 'Quick and secure file transfers between your devices with PC Drop',
    images: ['/desktop-img.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* Navigation */}
        <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-blue-600">PC Drop</div>
              <div className="hidden md:flex space-x-8">
                <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
                <a href="#download" className="text-gray-600 hover:text-blue-600 transition-colors">Download</a>
                <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
              </div>
              <MobileMenu />
            </div>
          </div>
        </nav>

        {/* Add padding to account for fixed navigation */}
        <div className="pt-16">
          {children}
        </div>

        {/* Footer */}
        <footer className="w-full bg-gray-900 text-white py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">PC Drop</h3>
                <p className="text-gray-400">
                  Quick and secure file transfers between your devices
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
                  </li>
                  <li>
                    <a href="#download" className="text-gray-400 hover:text-white transition-colors">Download</a>
                  </li>
                  <li>
                    <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
                  </li>
                </ul>
              </div>
              <div id="contact" className="scroll-mt-20">
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <p className="text-gray-400">
                  Have questions? Contact Fikret Cansel at{' '}
                  <a 
                    href="mailto:fikretcansel25@hotmail.com" 
                    className="hover:text-white transition-colors"
                  >
                    fikretcansel25@hotmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} PC Drop. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
