import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="glass-effect mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">DisasterWaste</h3>
            <p className="text-gray-400 text-sm">
              Streamlining disaster waste management with cutting-edge technology and sustainable practices.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/upload" className="text-gray-400 hover:text-primary transition-colors">
                  Upload Waste
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Waste Tracking
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  AI Classification
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Recycling Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Disaster Response
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-primary" />
                <span className="text-gray-400">distastermanagement77@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-primary" />
                <span className="text-gray-400">+91 73027 xxxxx</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} className="text-primary" />
                <span className="text-gray-400">123,Bareilly,Uttar Pradesh, 243003</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Disaster Waste Management System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

