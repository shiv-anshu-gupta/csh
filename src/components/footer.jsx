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
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Link href="/">
                <img
                  src="/Artboard 1CSH.png"
                  alt="CSH Logo"
                  className="h-28 w-28 object-contain"
                />
              </Link>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Expand your knowledge and open doors to exciting careers with our
              world-class online education platform.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/people/Coding-Skill-Hub/61557037483827/?_rdr"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </Link>

              <Link
                href="https://www.instagram.com/codingskillhub/"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/codingskillhub/posts/?feedView=all"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
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
                  href="/courses/2"
                  className="text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/4"
                  className="text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium"
                >
                  Data Science
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/6"
                  className="text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium"
                >
                  Cyber Security
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/12"
                  className="text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/7"
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
                  Celestial Arcade, Radisson Hotel Service Rd
                  <br />
                  Vijay Nagar, Indore, Madhya Pradesh 452010
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <p className="text-gray-700 text-sm">+91 9111403030</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <p className="text-gray-700 text-sm">
                  codingskillhub@gmail.com
                </p>
              </div>
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
