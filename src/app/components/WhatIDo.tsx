'use client'

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { dict } from "../i18n";
import { useLanguage } from "../context/LanguageContext";


type IService = {
  img: string;
  name: string;
  description: string;
};

const services: IService[] = [
  {
    img: "/webdevIcon.svg",
    name: "Modern business websites",
    description: "Conversion-focused websites that are fast, scalable, and easy to update via CMS.",
  },
  {
    img: "/AIIcon.svg",
    name: "AI & Automation",
    description: "I build automations that reduce manual work — from client onboarding to reports & email handling. Less routine, more growth.",
  },
];

export default function LatestWorks() {
  const { language } = useLanguage();
  const t = dict[language].whatido;

  const ref = useRef(null)

  useGSAP(() => {
    gsap.fromTo(ref.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
  }, [])

  return (
    <section className="w-auto md:mt-[120px] mt-[80px]" ref={ref}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="md:text-[2rem] text-[24px] whitespace-nowrap">{t.line1}</h3>
        <div className="w-full h-px bg-white/20 my-10 ml-6" />
      </div>

      
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {t.services.map((service) => (
            <div
            key={service.name}
            className="rounded-[16px] bg-[#0D0D0D] border border-white/10 p-2 flex flex-col justify-between"
            >
            <div className="h-[104px] w-full rounded-[16px] bg-[#171717] flex items-center justify-center">
                <div className="rounded-full aspect-square bg-[#0D0D0D] p-4 flex items-center justify-center">
                <Image
                    src={service.img}
                    width={20}
                    height={20}
                    alt="service icon"
                />
                </div>
            </div>
            <div className="mt-4 text-center flex-1 flex-col justify-start">
                <h3 className="text-[1.125rem] sm:text-[1.25rem] text-white mb-2">{service.name}</h3>
                <p className="text-[0.875rem] sm:text-[1rem] font-light text-white/50 mb-4">{service.description}</p>
            </div>
            </div>
        ))}
        </div>
     
    </section>
  );
}