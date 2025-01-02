
import { cn } from "@/lib/utils";
import Image from "next/image";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Built for developers",
      description: "Built for engineers, developers, dreamers, thinkers and doers.",
      image: "https://images.unsplash.com/photo-1729366791089-6c9643dee806?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Ease of use",
      description: "It's as easy as using an Apple, and as expensive as buying one.",
      image: "/api/placeholder/200/150"
    },
    {
      title: "Pricing like no other",
      description: "Our prices are best in the market. No cap, no lock, no credit card required.",
      image: "/api/placeholder/200/150"
    },
    {
      title: "100% Uptime guarantee",
      description: "We just cannot be taken down by anyone.",
      image: "/api/placeholder/200/150"
    },
    {
      title: "Multi-tenant Architecture",
      description: "You can simply share passwords instead of buying new seats",
      image: "/api/placeholder/200/150"
    },
    {
      title: "24/7 Customer Support",
      description: "We are available a 100% of the time. Atleast our AI Agents are.",
      image: "/api/placeholder/200/150"
    },
    {
      title: "Money back guarantee",
      description: "If you donot like EveryAI, we will convince you to like us.",
      image: "/api/placeholder/200/150"
    },
    {
      title: "And everything else",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      image: "/api/placeholder/200/150"
    },
  ];

  return (
    <div className="w-full bg-black px-16 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  image,
  index
}) => {
  return (
    <div
    className={cn(
        "flex flex-col min-h-[450px] lg:min-h-[500px] relative group/feature",
        // Only add border-b to the first row (indexes 0-3) ⬇️
        index < 4 && "border-b dark:border-neutral-800",
        // Keep vertical borders ⬇️
        "lg:border-r dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        "transition-all duration-300"
      )}>
      {/* Gradient Hover Effect */}
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent pointer-events-none" />
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col p-6 lg:p-8">
        {/* Image Section */}
        <div className="mb-6 w-full h-48 relative">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Text Content */}
        <div className="flex-grow">
          <div className="text-xl font-bold mb-4 relative">
            <div className="absolute left-0 -ml-3 top-1/2 -translate-y-1/2 h-8 w-1 rounded-r-full bg-neutral-700 group-hover/feature:bg-blue-500 group-hover/feature:h-10 transition-all duration-300" />
            <span className="group-hover/feature:translate-x-2 transition duration-300 inline-block text-white text-2xl">
              {title}
            </span>
          </div>

          <p className="text-base leading-relaxed text-neutral-300 group-hover/feature:text-white transition-colors duration-300">
            {description}
          </p>
        </div>

        {/* Learn More Link */}
        <div className="mt-6">
          <button className="text-sm text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300">
            Learn more →
          </button>
        </div>
      </div>
    </div>
  );
};