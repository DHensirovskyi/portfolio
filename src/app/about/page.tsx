'use client'

import { useGSAP } from "@gsap/react";
import Image from "next/image"
import { useRef } from "react";
import gsap from "gsap";
import { useLanguage } from "../context/LanguageContext";
import { dict } from "../i18n";

export default function AboutMe(){
    const ref = useRef(null)
    const { language } = useLanguage();
    const t = dict[language].about;

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
                toggleActions: "play none none reverse",},
            }
        );
    }, [])

    return(
    <main className="max-w-[860px] py-0 px-6 lg:px-0 m-auto text-white md:mt-[240px] mt-[160px] sm:mb-40 mb-20 flex flex-col sm:gap-20 gap-10">
        <section className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex items-center border border-white/10 rounded-full px-4 py-[6px] bg-[#141414] text-[0.875rem] w-auto h-[32px]">
            <p>{t.label}</p>
          </div>
          <h1 className="text-[2.8rem] sm:text-[4.5rem] sm:leading-[110%] leading-[120%] text-white/50 font-thin">
            {t.line1}<br /><span className="text-white">{t.line2}</span>
          </h1>
        </section>
        <section className="flex flex-col sm:gap-20 gap-10" ref={ref}>
        <Image src={'/me.jpg'} width={840} height={487} alt={'me'} className="rounded-[16px] w-auto" priority></Image>

        <div className="flex flex-col items-center justify-center gap-6">
            <p className="sm:text-[2rem] text-[1.5rem]">{t.line3}</p>
            <p className="text-[1.25rem] text-white/50 font-thin">{t.line4}</p>
            <p className="text-[1.25rem] text-white/50 font-thin">{t.line5}</p>
            <p className="text-[1.25rem] text-white/50 font-thin">{t.line6}</p>
        </div>
        </section>
    </main>
    )
}