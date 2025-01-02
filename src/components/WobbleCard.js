


// "use client";
// import Image from "next/image";
// import React from "react";
// import { WobbleCard } from "./ui/wobble-card";

// export function WobbleCardDemo() {
//   return (
//     <div className="flex gap-4 max-w-full mx-auto px-16">
//       {/* Main content - two rows of cards */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-grow">
//         <WobbleCard
//           containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
//           className="relative">
//           <div className="max-w-xs">
//             <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
//               Gippity AI powers the entire universe
//             </h2>
//             <p className="mt-4 text-left text-base/6 text-neutral-200">
//               With over 100,000 mothly active bot users, Gippity AI is the most
//               popular AI platform for developers.
//             </p>
//           </div>
//           <Image
//             src="https://images.unsplash.com/photo-1729366791089-6c9643dee806?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             width={500}
//             height={500}
//             alt="linear demo image"
//             className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl" />
//         </WobbleCard>

//         <WobbleCard containerClassName="col-span-1 min-h-[300px]">
//           <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
//             No shirt, no shoes, no weapons.
//           </h2>
//           <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
//             If someone yells "stop!", goes limp, or taps out, the fight is over.
//             <br/>
//             <a href="https://jamesclear.com/articles" className="text-blue-400 hover:text-blue-300 hover:underline"> Read More </a>
//           </p>
//         </WobbleCard>

//         <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[300px]">
//           <div className="max-w-sm">
//             <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
//               Signup for blazing-fast cutting-edge state of the art Gippity AI wrapper today!
//             </h2>
//             <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
//               With over 100,000 mothly active bot users, Gippity AI is the most
//               popular AI platform for developers.
//             </p>
//           </div>
//           <Image
//             src="https://images.unsplash.com/photo-1729366791089-6c9643dee806?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             width={500}
//             height={500}
//             alt="linear demo image"
//             className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl" />
//         </WobbleCard>
//       </div>

//       {/* Vertical card on the right */}
//       <WobbleCard containerClassName="hidden lg:block w-[400px] min-h-[920px] bg-indigo-900">
//         <div className="h-full flex flex-col justify-between">
//           <div>
//             <h2 className="text-left text-balance text-2xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
//               Vertical Showcase
//             </h2>
//             <p className="mt-4 text-left text-base/6 text-neutral-200">
//               This tall card shows important information that spans the full height.
//             </p>
//           </div>
//           <Image
//             src="https://images.unsplash.com/photo-1729366791089-6c9643dee806?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             width={350}
//             height={350}
//             alt="vertical card image"
//             className="object-contain rounded-2xl mx-auto" />
//           <div className="mt-4">
//             <p className="text-left text-base/6 text-neutral-200">
//               Bottom section content with additional details or calls to action.
//             </p>
//             <button className="mt-4 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </WobbleCard>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="flex flex-wrap gap-4 max-w-full mx-auto px-4 lg:px-16">
      {/* Main content - two rows of cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-grow">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className="relative">
          <div className="max-w-xs z-10 relative">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Gippity AI powers the entire universe
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              With over 100,000 mothly active bot users, Gippity AI is the most
              popular AI platform for developers.
            </p>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1729366791089-6c9643dee806?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute right-4 lg:right-0 top-1/2 transform -translate-y-1/2 object-contain rounded-2xl max-w-[50%] md:max-w-[40%]" 
            /* Adjusted width for responsiveness */ />
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            No shirt, no shoes, no weapons.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            If someone yells "stop!", goes limp, or taps out, the fight is over.
            <br/>
            <a href="https://jamesclear.com/articles" className="text-blue-400 hover:text-blue-300 hover:underline"> Read More </a>
          </p>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[300px]"
          className="relative">
          <div className="max-w-sm z-10 relative">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Signup for blazing-fast cutting-edge state of the art Gippity AI wrapper today!
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              With over 100,000 mothly active bot users, Gippity AI is the most
              popular AI platform for developers.
            </p>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1729366791089-6c9643dee806?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute right-4 lg:right-0 top-1/2 transform -translate-y-1/2 object-contain rounded-2xl max-w-[50%] md:max-w-[40%]" 
            /* Adjusted width for responsiveness */ />
        </WobbleCard>
      </div>

      {/* Vertical card on the right */}
      <WobbleCard containerClassName="hidden lg:block w-[400px] min-h-[920px] bg-indigo-900">
        <div className="h-full flex flex-col justify-between">
          <div>
            <h2 className="text-left text-balance text-2xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
              Vertical Showcase
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              This tall card shows important information that spans the full height.
            </p>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1729366791089-6c9643dee806?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={350}
            height={350}
            alt="vertical card image"
            className="object-contain rounded-2xl mx-auto" />
          <div className="mt-4">
            <p className="text-left text-base/6 text-neutral-200">
              Bottom section content with additional details or calls to action.
            </p>
            <button className="mt-4 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </WobbleCard>
    </div>
  );
}
