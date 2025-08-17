import { Calendar, Target, Lightbulb, Rocket } from "lucide-react";

export default function OurStory() {
  const milestones = [
    {
      year: "2018",
      title: "The Beginning",
      description:
        "Founded CodingSkillHub with a vision to make quality coding education accessible in Indore",
      icon: Lightbulb,
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description:
        "Adapted to online learning during pandemic, reaching students across Madhya Pradesh",
      icon: Rocket,
    },
    {
      year: "2022",
      title: "Industry Partnerships",
      description:
        "Established partnerships with leading tech companies for placement opportunities",
      icon: Target,
    },
    {
      year: "2024",
      title: "Excellence Recognition",
      description:
        "Recognized as the leading coding institute in Central India with 2000+ successful graduates",
      icon: Calendar,
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our
            <span className="text-orange-500"> Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a small classroom in Indore to becoming Central India's premier
            coding institute, our story is one of passion, dedication, and
            countless success stories.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200 hidden lg:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`lg:w-1/2 ${
                    index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"
                  }`}
                >
                  <div className="bg-gray-50 rounded-2xl p-8 relative">
                    <div className="flex items-center mb-4">
                      <div className="bg-orange-500 text-white p-3 rounded-full mr-4">
                        <milestone.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-orange-500">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {milestone.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>

                    {/* Arrow pointing to timeline */}
                    <div
                      className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gray-50 rotate-45 border hidden lg:block ${
                        index % 2 === 0
                          ? "right-0 translate-x-2 border-r-0 border-b-0"
                          : "left-0 -translate-x-2 border-l-0 border-t-0"
                      }`}
                    ></div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:block w-6 h-6 bg-orange-500 rounded-full border-4 border-white shadow-lg relative z-10"></div>

                {/* Spacer */}
                <div className="lg:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
