import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DiversitySection() {
  return (
    <section className="bg-white py-16 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Side - Image */}
          <div className="relative">
            <img
              src="/group_photo.jpg"
              alt="Diverse students studying together outdoors"
              className="w-full h-auto rounded-2xl object-cover"
            />

            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 opacity-20">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-orange-500"
              >
                <path
                  d="M20 80 Q 50 20 80 80"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M30 85 Q 60 25 90 85"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Our commitment to diversity leadership.
            </h2>

            {/* Description */}
            <p className="text-base text-gray-600 leading-relaxed sm:text-lg">
              Education has come a long way from its traditional roots and will
              continue to evolve. Learn but the majority have suffered
              alteration in some form, by injected humour, or randomised words
              which don't look even slightly. njected humour, or randomised
              words which don't look even slightly believable. If you are going
              to use a passage of Lorem Ipsum, you need to be sure there isn't
              anything embarrassing hidden in the middle.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {/* Graduate Students Stat */}
              <div className="space-y-2">
                <div className="text-4xl font-bold text-orange-500 sm:text-5xl">
                  250+
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  Trained Students
                </div>
              </div>

              {/* Happy Students Stat */}
              <div className="space-y-2">
                <div className="text-4xl font-bold text-orange-500 sm:text-5xl">
                  98%
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  Happy Students
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-base font-semibold rounded-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
