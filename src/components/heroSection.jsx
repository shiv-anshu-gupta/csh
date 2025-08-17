import {
  Star,
  Code,
  Database,
  Shield,
  Laptop,
  Video,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function heroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-25 to-yellow-50 px-6 py-12 lg:px-12 lg:py-16 pt-24">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* LEFT CONTAINER - Text Content */}
          <div className="relative space-y-6">
            {/* Top badge */}
            <div className="flex items-center gap-2 text-gray-700">
              <div className="h-3 w-3 rotate-45 bg-orange-500"></div>
              <span className="text-base font-medium sm:text-lg">
                Discover 20,000+ World-Class Courses
              </span>
            </div>

            {/* Main heading */}
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl xl:text-6xl">
                Learn Smarter
              </h1>
              <h2 className="relative text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl xl:text-6xl">
                Achieve knowledge
                <div className="absolute -bottom-2 left-0 h-1 w-32 bg-orange-400 sm:w-48 lg:w-64"></div>
              </h2>
            </div>

            {/* Description */}
            <p className="max-w-md text-base text-gray-600 sm:text-lg lg:text-xl">
              Expand your knowledge and open doors to exciting careers with our
              online education platform.
            </p>

            {/* CTA Button */}
            <Button className="bg-orange-500 px-6 py-4 text-base font-semibold text-white hover:bg-orange-600 sm:px-8 sm:py-6 sm:text-lg">
              Explore Course
            </Button>
          </div>

          {/* RIGHT CONTAINER - Image and Floating Elements */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            {/* Background decorative elements - Right container */}
            <div className="absolute -right-10 top-8 h-60 w-60 rounded-full bg-orange-300/30 blur-2xl z-5 sm:right-0 sm:h-80 sm:w-80 lg:h-96 lg:w-96"></div>
            <div className="absolute right-8 top-16 h-40 w-40 rounded-full bg-orange-400/40 z-5 sm:right-16 sm:h-56 sm:w-56 lg:h-64 lg:w-64"></div>
            <div className="absolute right-20 bottom-4 h-20 w-20 rounded-full bg-amber-300/50 z-5 sm:right-28 sm:h-28 sm:w-28"></div>

            {/* Skills Progress Card - Right container */}
            <div className="absolute -left-8 top-4 z-10 w-44 rounded-lg bg-white p-3 shadow-lg sm:-left-12 sm:w-48 sm:p-4 lg:-left-16">
              <div className="space-y-2 text-xs sm:space-y-3 sm:text-sm">
                <div className="flex items-center gap-2">
                  <Code className="h-3 w-3 text-blue-500 sm:h-4 sm:w-4" />
                  <span className="font-medium">Web Development</span>
                </div>
                <div className="h-1.5 w-28 rounded-full bg-gray-200 sm:h-2 sm:w-32">
                  <div className="h-1.5 w-20 rounded-full bg-orange-400 sm:h-2 sm:w-24"></div>
                </div>

                <div className="flex items-center gap-2">
                  <Database className="h-3 w-3 text-green-500 sm:h-4 sm:w-4" />
                  <span className="font-medium">Data Science</span>
                </div>
                <div className="h-1.5 w-28 rounded-full bg-gray-200 sm:h-2 sm:w-32">
                  <div className="h-1.5 w-16 rounded-full bg-orange-400 sm:h-2 sm:w-20"></div>
                </div>

                <div className="flex items-center gap-2">
                  <Shield className="h-3 w-3 text-red-500 sm:h-4 sm:w-4" />
                  <span className="font-medium">Cyber Security</span>
                </div>
                <div className="h-1.5 w-28 rounded-full bg-gray-200 sm:h-2 sm:w-32">
                  <div className="h-1.5 w-12 rounded-full bg-orange-400 sm:h-2 sm:w-16"></div>
                </div>
              </div>
            </div>

            {/* Floating Tech Icons - Right container */}
            <div className="absolute right-8 top-40 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-orange-400 shadow-lg sm:right-12 sm:h-12 sm:w-12">
              <Code className="h-5 w-5 text-white sm:h-6 sm:w-6" />
            </div>

            <div className="absolute right-24 top-24 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 shadow-lg sm:right-32 sm:h-10 sm:w-10">
              <Laptop className="h-4 w-4 text-white sm:h-5 sm:w-5" />
            </div>

            <div className="absolute right-4 bottom-8 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 shadow-lg sm:right-6 sm:h-11 sm:w-11">
              <Video className="h-4 w-4 text-white sm:h-5 sm:w-5" />
            </div>

            <div className="absolute right-32 bottom-16 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-yellow-500 shadow-lg sm:right-40 sm:h-9 sm:w-9">
              <BookOpen className="h-3 w-3 text-white sm:h-4 sm:w-4" />
            </div>

            {/* Student Image */}
            <div className="relative">
              <img
                src="/girl_image.png"
                alt="Young woman with glasses sitting cross-legged with laptop"
                className="relative z-10 h-auto w-64 object-cover sm:w-80 lg:w-96"
              />

              {/* Rating Card */}
              <div className="absolute bottom-6 left-2 z-20 rounded-lg bg-white p-3 shadow-lg sm:bottom-8 sm:left-4 sm:p-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="text-2xl font-bold text-orange-500 sm:text-3xl">
                    4.9
                  </div>
                  <div>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-3 w-3 fill-yellow-400 text-yellow-400 sm:h-4 sm:w-4"
                        />
                      ))}
                      <Star className="h-3 w-3 fill-yellow-400/50 text-yellow-400 sm:h-4 sm:w-4" />
                    </div>
                    <div className="text-xs font-medium text-gray-700 sm:text-sm">
                      Instructor Rating
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
