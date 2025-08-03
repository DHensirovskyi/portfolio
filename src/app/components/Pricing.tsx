'use client'

import { useGSAP } from "@gsap/react";
import { Button } from "@mantine/core";
import Link from "next/link";
import { useRef } from "react";
import { FaCheck } from "react-icons/fa6";
import { MdStars } from "react-icons/md";
import gsap from "gsap";

type IService = {
  name: string;
  description: string;
  price: string;
  services: string[];
  duration: string;
  recom?: boolean;
};

const prices: IService[] = [
  {
    name: "AI-Automation for your website",
    description: "For businesses that already have a good website, but you're losing time and customers due to manual processing of applications and long response times.",
    price: '€1000',
    services: ['Audit of your current business processes', 'Integration with your contact form', 'Configuring AI logic for analysis and response', 'Customize notifications for you and your team'],
    duration: '/project'
  },
  {
    name: "Website + AI-Automation",
    description: "For companies that want not just an online presence, but a system that works for them 24/7, saves time and doesn't miss a single customer.",
    price: '€2500',
    services: ['Setting up a system of instant response to requests', 'AI integration for analyzing and qualifying queries', 'Automatically send notifications in Telegram/WhatsApp'],
    duration: '/project',
    recom: true,
  },
  {
    name: "One-time development",
    description: "For businesses that need a modern, fast and reliable website to attract customers",
    price: '€1500',
    services: ['Development on Next.js (speed and SEO guarantee)t', 'Adaptive design for all devices', 'Integration with CMS for independent content updating', 'Basic SEO optimization'],
    duration: '/project'
  },
];

export default function Pricing() {
  const middleIndex = Math.floor(prices.length / 2);
  const ref = useRef(null)

  useGSAP(() => {
    gsap.fromTo(ref.current,{
      scale: 15,
      opacity: 0
    },
    {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: "ease.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 50%",
        toggleActions: "play none none reverse",
        once: true,
      },
    }
  )}, [])

  return (
    <section className="w-auto md:mt-[120px] mt-[80px]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="md:text-[2rem] text-[24px] whitespace-nowrap">Pricing</h3>
        <div className="w-full h-px bg-white/20 my-10 ml-6" />
      </div>

      
      <div className="grid xl:gap-8 gap-4 grid-cols-1 xl:grid-cols-3 xl:mt-10 mt-0">
      {prices.map((price, index) => {
          const isMiddle = index === middleIndex;
          return(
            <div
              key={price.name}
              className={`rounded-[16px] bg-[#0D0D0D] border border-white/10 sm:p-10 p-8 flex flex-col gap-6 justify-between ${isMiddle && 'xl:scale-110 scale-100'}`}>
              <div className="text-left flex-1 flex-col justify-start">
                  <span className="flex justify-between items-center">
                    <p className="sm:text-[1.3rem] text-[1.2rem] text-white mb-2">{price.name}</p>
                    {price.recom ? 
                    <span ref={ref} className="w-4.7 h-4.5 mb-1.5">
                      <MdStars className="text-[#CAE8BD] text-[1.2rem]"/>
                    </span>
                    :
                    ''
                    }
                  </span>
                  <p className="text-[0.875rem] sm:text-[1rem] font-normal text-white/50">{price.description}</p>
              </div>
              <div>
                  <p className="text-[0.875rem] text-white/50">From</p>
                  <span className="flex items-end font-light mt-1.5"><p className="text-white text-[1.922rem]/9" >{price.price}</p><p className="text-[1rem]">{price.duration}</p></span>
              </div>
              <div>
                  <Link href={"/contact"}><Button id={'button'} className="w-full py-4 hover:scale-[0.97] transition ease-in-out duration-200"> Discuss the project</Button></Link>
              </div>
              <div className="flex-col flex gap-1">
                  {price.services.map((service, i) => (
                      <span className="flex gap-3 items-center" key={i}>
                          <FaCheck className="text-white sm:text-[1rem] text-[0.8rem]"/>
                          <p className="text-white/50 font-light sm:text-[1rem] text-[0.8rem]">{service}</p>
                      </span>
                  ))}
              </div>
              </div>
              )
      })}
      </div>
     
    </section>
  );
}