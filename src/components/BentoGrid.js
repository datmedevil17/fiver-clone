


import { cn } from "@/lib/utils";
import Image from "next/image";



export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Innovating with Cutting-Edge Technologies",
      description: `We specialize in emerging technologies like AI/ML, cloud-native apps, IoT, and blockchain, staying
       ahead of the curve since before they were mainstream. With certifications from AWS, Microsoft Azure, and Google
        Cloud, and strong partnerships with tech giants, we deliver next-gen solutions that set you apart.`,
      image: "https://images.unsplash.com/photo-1729366791089-6c9643dee806?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gradientColor: "from-blue-800",
      accentColor: "bg-blue-500"
    },
    {
      title: "Delivering Results that Matter",
      description: `We focus on delivering measurable outcomes that make a real impact, whether it’s cost
       savings, improved efficiency, or faster go-to-market. With case studies that showcase tangible ROI, we
        prove that our solutions consistently drive business success, transforming challenges into opportunities.`,
      image: "https://images.unsplash.com/photo-1729366791089-6c9643dee806?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gradientColor: "from-purple-800",
      accentColor: "bg-purple-500"
    },
    {
      title: " Solutions Tailored to You",
      description: `No two businesses are the same, and neither are our solutions. We design customized strategies that align
       perfectly with your industry’s unique challenges and goals, ensuring that every service we provide is a perfect fit for
        your needs—no one-size-fits-all here.`,
      image: "https://images.unsplash.com/photo-1729366791089-6c9643dee806?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gradientColor: "from-green-800",
      accentColor: "bg-green-500"
    },
    {
      title: " Agility at the Speed of Business",
      description: `In today’s fast-paced world, speed is everything. We pride ourselves on quickly deploying teams and solutions, enabling
       you to stay ahead of deadlines and tackle time-sensitive IT projects with confidence, ensuring fast and efficient execution every time.`,
      image: "https://images.unsplash.com/photo-1729366791089-6c9643dee806?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gradientColor: "from-red-800",
      accentColor: "bg-red-500"
    },
    {
      title: "Bridging Tech and Business",
      description: `We combine top-tier technical expertise with a deep understanding of business processes, ensuring
       that your IT strategy aligns with your overall business goals. This hybrid approach allows us to deliver solutions
        that drive real business value, not just technical outcomes.`,
      image: "https://images.unsplash.com/photo-1729366791089-6c9643dee806?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gradientColor: "from-yellow-800",
      accentColor: "bg-yellow-500"
    },
    {
      title: " Staffing Excellence, Guaranteed",
      description: `We excel at finding the right talent, even for hard-to-fill tech roles. With low attrition rates, quick
       time-to-fill, and outstanding client satisfaction scores, our staffing solutions ensure that you get the best-fit talent
        that helps drive your projects forward with success.`,
      image: "https://images.unsplash.com/photo-1729366791089-6c9643dee806?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gradientColor: "from-pink-800",
      accentColor: "bg-pink-500"
    },
    {
      title: " Your One-Stop IT Partner",
      description: `From consulting and implementation to staffing and ongoing support, we offer a full suite of services
       that streamline your IT needs. By acting as your comprehensive, end-to-end service provider, we simplify the vendor
       ecosystem and make managing your tech requirements effortless.`,
      image: "https://images.unsplash.com/photo-1729366791089-6c9643dee806?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gradientColor: "from-indigo-800",
      accentColor: "bg-indigo-500"
    },
    {
      title: "Tapping Into Emerging Markets",
      description: `We focus on unlocking potential in emerging markets—industries or geographies that are under-served 
      by cutting-edge technologies. By bringing expertise in the latest innovations to these spaces, we help businesses gain
       a competitive edge in untapped areas.`,
      image: "https://images.unsplash.com/photo-1729366791089-6c9643dee806?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gradientColor: "from-teal-800",
      accentColor: "bg-teal-500"
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
  index,
  gradientColor,
  accentColor
}) => {
  return (
    <div
      className={cn(
        "flex flex-col min-h-[450px] lg:min-h-[500px] relative group/feature",
        index < 4 && "border-b dark:border-neutral-800",
        "lg:border-r dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        "transition-all duration-300"
      )}>
      {/* Gradient Hover Effect */}
      {index < 4 && (
        <div className={cn(
          "opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t to-transparent pointer-events-none",
          gradientColor
        )} />
      )}
      {index >= 4 && (
        <div className={cn(
          "opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b to-transparent pointer-events-none",
          gradientColor
        )} />
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
            <div className={cn(
              "absolute left-0 -ml-3 top-1/2 -translate-y-1/2 h-8 w-1 rounded-r-full transition-all duration-300",
              accentColor,
              "group-hover/feature:h-10"
            )} />
            <span className="group-hover/feature:translate-x-2 transition duration-300 inline-block text-white text-2xl">
              {title}
            </span>
          </div>

          <p className="text-base leading-relaxed text-neutral-300 group-hover/feature:text-white transition-colors duration-300">
            {description}
          </p>
        </div>

         {/* Learn More Link */}
         {/* <div className="mt-6">
          <button className="text-sm text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300">
            Learn more →
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default FeaturesSectionDemo;