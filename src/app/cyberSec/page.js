import React from 'react'
import CustomVid from '@/components/CustomVid'
import { CardDemo } from '@/components/CyberSecCards'
import Footer from '@/components/Footer'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { ThreeDCardDemo } from '@/components/3DCardEffect'

const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsof.com",
  },
  {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsot.com",
    },{
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsft.com",
    },
];

const page = () => {
  return (
    <div className = "bg-black">
        <CustomVid videoSrc="https://videos.pexels.com/video-files/5223113/5223113-hd_2560_1440_30fps.mp4" heading="CyberSecurity" content="Elixir provides comprehensive cybersecurity services to safeguard your business in today's increasingly digital landscape. 
              Our team of experts delivers a wide range of solutions, including advanced threat detection and response, vulnerability assessments, penetration testing, 
              and the implementation of robust security controls. By leveraging cutting-edge technologies and adhering to industry best practices, we proactively identify 
              and mitigate potential risks, ensuring your data, systems, and reputation remain protected. With Elixir, you can experience peace of mind knowing your digital
              assets are in capable hands and your business is well-equipped to withstand evolving cyber threats."/>
        <ThreeDCardDemo/>
        <Footer/>

    </div>
  )
}

export default page
