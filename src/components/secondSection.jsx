import { ArrowUpRight, Clock, BarChart3 } from "lucide-react";
import { courseCategories } from "../lib/courses";
import Link from "next/link"; // ✅ import Link

export default function SecondSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Our
            <span className="text-orange-500 relative">
              {" "}
              Courses
              <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 rounded-full"></div>
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose from 20,000+ world-class courses across various domains and
            skill levels
          </p>
        </div>

        {/* Course Cards */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
          {courseCategories.map((category, index) => (
            <div
              key={`${category.id}-${index}`}
              className="min-w-[320px] max-w-[340px] bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 relative flex-shrink-0 group"
            >
              {/* Action Button */}
              <div className="absolute top-6 right-6 z-10">
                <Link
                  href={`/courses/${category.id}`}
                  className="p-2 bg-white shadow-md rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 group-hover:scale-110 inline-flex"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center bg-orange-100 text-orange-700 text-sm font-semibold px-3 py-1 rounded-full">
                      <BarChart3 className="w-4 h-4 mr-1" />
                      {category.subCourses.length} COURSES
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
