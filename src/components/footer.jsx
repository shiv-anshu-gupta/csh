import {
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">CSH</span>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Expand your knowledge and open doors to exciting careers with our
              world-class online education platform.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </Link>
            </div>
          </div>
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Popular Courses */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900">Popular Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium"
                >
                  Data Science
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium"
                >
                  Cyber Security
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium"
                >
                  UI/UX Design
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-sm">
                  123 Education Street
                  <br />
                  Learning City, LC 12345
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <p className="text-gray-700 text-sm">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <p className="text-gray-700 text-sm">info@jobaway.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter Section */}
      <div className="border-t border-gray-200 bg-amber-50 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-700 text-sm">
                Subscribe to our newsletter for the latest courses and updates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-500 flex-1 md:w-64"
              />
              <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="border-t border-gray-200 bg-amber-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center text-sm text-gray-600">
              <p>&copy; {new Date().getFullYear()} CSH. All rights reserved.</p>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <p>Developed by Shivanshu Gupta</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
