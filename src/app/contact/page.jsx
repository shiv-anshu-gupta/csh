"use client";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Car,
  Bus,
  ExternalLink,
} from "lucide-react";
import { useEffect } from "react";
import Breadcrumb from "../../components/breadcrumb";
import Navbar from "../../components/Navbar";
export default function LocationContact() {
  const breadcrumbItems = [{ label: "About", href: "/about", current: true }];
  useEffect(() => {
    // Add click handler for map interaction
    const mapFrame = document.getElementById("location-map");
    if (mapFrame) {
      mapFrame.addEventListener("load", () => {
        console.log("Map loaded successfully");
      });
    }
  }, []);

  const coordinates = {
    lat: 22.750712726705963,
    lng: 75.90000234355573,
  };

  const openInGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}&zoom=17`;
    window.open(url, "_blank");
  };

  const openDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Navbar />
      {/* Breadcrumb Section */}
      <div className="bg-white py-4 border-b border-gray-200 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Visit Our
              <span className="text-orange-500"> Campus</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Indore, our modern campus is easily
              accessible and equipped with state-of-the-art facilities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Address
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        1st Floor, HP Petrol Pump, Celestial Arcade,
                        <br />
                        Radisson Hotel, Service Rd, near Vijay Nagar,
                        <br />
                        Ganga Devi Nagar, Indore, Madhya Pradesh 452010
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Phone
                      </h4>
                      <p className="text-gray-600">+91 9111403030</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Email
                      </h4>
                      <p className="text-gray-600">info@codingskillhub.com</p>
                      <p className="text-gray-600">
                        admissions@codingskillhub.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <Clock className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Hours
                      </h4>
                      <p className="text-gray-600">
                        Mon - Sat: 9:00 AM - 8:00 PM
                      </p>
                      <p className="text-gray-600">
                        Sunday: 10:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transportation */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  How to Reach
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Bus className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-600">
                      Bus Stop: Vijay Nagar (2 min walk)
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Car className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-600">
                      Near HP Petrol Pump & Radisson Hotel
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-600">
                      Celestial Arcade, 1st Floor
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Static Map with JavaScript Controls */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Map Container */}
              <div className="relative h-96 w-full">
                <iframe
                  id="location-map"
                  src={`https://maps.google.com/maps?q=${coordinates.lat},${coordinates.lng}&t=m&z=17&output=embed&iwloc=near`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CodingSkillHub Exact Location"
                  className="rounded-t-2xl"
                ></iframe>

                {/* Overlay with location info */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-900">
                      CodingSkillHub
                    </span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    Celestial Arcade, Indore
                  </div>
                </div>
              </div>

              {/* Map Controls */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Our Location
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Celestial Arcade, Vijay Nagar, Indore
                    </p>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <MapPin className="w-3 h-3" />
                    <span>Pinpoint Accurate</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={openDirections}
                    className="flex items-center justify-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <Car className="w-4 h-4" />
                    <span>Directions</span>
                  </button>
                  <button
                    onClick={openInGoogleMaps}
                    className="flex items-center justify-center space-x-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open Maps</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
