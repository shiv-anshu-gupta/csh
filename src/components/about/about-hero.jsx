import { MapPin, Users, Award, BookOpen } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-orange-100 rounded-full opacity-50"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-orange-200 rounded-full opacity-30"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-orange-600">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">Indore, Madhya Pradesh</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                About
                <span className="text-orange-500 relative">
                  {" "}
                  CodingSkillHub
                  <div className="absolute bottom-2 left-0 w-full h-2 bg-orange-200 rounded-full -z-10"></div>
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Empowering the next generation of developers in the heart of
                India with world-class coding education and industry-relevant
                skills.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-8 h-8 text-orange-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">2000+</div>
                <div className="text-sm text-gray-600">Students Trained</div>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                  <BookOpen className="w-8 h-8 text-orange-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Courses Offered</div>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="w-8 h-8 text-orange-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Placement Rate</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl p-8 transform rotate-3">
              <img
                src="/codingClass.png?height=400&width=500"
                alt="CodingSkillHub Classroom"
                className="w-full h-80 object-cover rounded-2xl transform -rotate-3 shadow-2xl"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4">
              <div className="text-center">
                <div className="text-lg font-bold text-orange-500">4.9★</div>
                <div className="text-xs text-gray-600">Student Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
