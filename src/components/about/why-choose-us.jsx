import {
  Shield,
  Users,
  Trophy,
  Clock,
  HeadphonesIcon,
  Briefcase,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: "Industry-Certified Curriculum",
      description:
        "Our courses are designed by industry experts and updated regularly to match current market demands.",
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description:
        "Learn from experienced developers with 10+ years in the industry and proven track records.",
    },
    {
      icon: Trophy,
      title: "Proven Success Rate",
      description:
        "95% of our students get placed in top companies within 6 months of course completion.",
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description:
        "Choose from weekend, evening, or intensive bootcamp schedules that fit your lifestyle.",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description:
        "Get help whenever you need it with our dedicated support team and peer community.",
    },
    {
      icon: Briefcase,
      title: "Career Assistance",
      description:
        "From resume building to interview prep, we support you throughout your career journey.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose
            <span className="text-orange-500"> CodingSkillHub?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another coding institute. We're your partners in
            building a successful tech career.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
