// import './AnimatedLogoCloud.css'

// const logos = [
//   {
//     name: 'Vercel',
//     url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg',
//   },
//   {
//     name: 'Nextjs',
//     url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881475/nextjs_logo_dark_gfkf8m.svg',
//   },
//   {
//     name: 'Prime',
//     url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/t2awrrfzdvmg1chnzyfr.svg',
//   },
//   {
//     name: 'Trustpilot',
//     url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tkfspxqmjflfllbuqxsi.svg',
//   },
//   {
//     name: 'Webflow',
//     url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/nymiivu48d5lywhf9rpf.svg',
//   },
//   {
//     name: 'Airbnb',
//     url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/pmblusboe7vkw8vxdknx.svg',
//   },
//   {
//     name: 'Tina',
//     url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/afqhiygywyphuou6xtxc.svg',
//   },
//   {
//     name: 'Stackoverflow',
//     url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/ts1j4mkooxqmscgptafa.svg',
//   },
//   {
//     name: 'mistral',
//     url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tyos2ayezryjskox3wzs.svg',
//   },
// ]

// const AnimatedLogoCloud = () => {
//   return (
//     <div className="w-full bg-black py-12">
//       <div className="mx-auto w-full px-4 md:px-8">
//         <div
//           className="group relative mt-6 flex gap-6 overflow-hidden p-2"
//           style={{
//             maskImage:
//               'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
//           }}
//         >
//           {[0, 1].map((groupIndex) => (
//             <div
//               key={`group-${groupIndex}`}
//               className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-16"
//             >
//               {logos.map((logo) => (
//                 <img
//                   key={`${groupIndex}-${logo.name}`}
//                   src={logo.url}
//                   className="h-10 w-28 px-2 invert" // Removed brightness-0
//                   alt={logo.name}
//                 />
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AnimatedLogoCloud

import './AnimatedLogoCloud.css'

const logos = [
  {
    name: 'Vercel',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg',
  },
  {
    name: 'Nextjs',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881475/nextjs_logo_dark_gfkf8m.svg',
  },
  {
    name: 'Prime',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/t2awrrfzdvmg1chnzyfr.svg',
  },
  {
    name: 'Webflow',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/nymiivu48d5lywhf9rpf.svg',
  },
  {
    name: 'Airbnb',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/pmblusboe7vkw8vxdknx.svg',
  },
  {
    name: 'Tina',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/afqhiygywyphuou6xtxc.svg',
  },
  {
    name: 'Stackoverflow',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/ts1j4mkooxqmscgptafa.svg',
  },
  {
    name: 'mistral',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tyos2ayezryjskox3wzs.svg',
  },
]

const AnimatedLogoCloud = () => {
  return (
    <div className="w-full bg-black py-12">
      <div className="mx-auto w-full px-4 md:px-8">
        <div
          className="group relative mt-6 flex gap-6 overflow-hidden p-2"
          style={{
            maskImage:
              'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
          }}
        >
          {/* Only need 2 copies for seamless loop */}
          {[0, 1].map((groupIndex) => (
            <div
              key={`group-${groupIndex}`}
              className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-16"
            >
              {logos.map((logo) => (
                <img
                  key={`${groupIndex}-${logo.name}`}
                  src={logo.url}
                  className="h-10 w-28 px-2 text-white  dark:invert"
                  // brightness-0
                  alt={logo.name}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AnimatedLogoCloud