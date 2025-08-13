'use client'

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import ContactForm from "../components/ContactForm/ContactForm";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { dict } from "../i18n";

export default function Contact(){
    const { language } = useLanguage();
    const t = dict[language].contact;
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
                toggleActions: "play none none reverse",},
            }
        );
    }, [])

    return(
    <main className="max-w-[860px] py-0 px-6 lg:px-0 m-auto text-white md:mt-[240px] mt-[160px] sm:mb-40 mb-20 flex flex-col sm:gap-20 gap-10">
        <section className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex items-center border border-white/10 rounded-full px-4 py-[6px] bg-[#171717] text-[0.875rem] w-auto h-[32px]">
            <p>{t.label}</p>
          </div>
          <h1 className="text-[2.8rem] sm:text-[4.5rem] sm:leading-[110%] leading-[120%] text-white/50 font-thin">
            {t.line1}<br /><span className="text-white">{t.line2}</span>
          </h1>
        </section>
        <section ref={ref} className="flex flex-col sm:gap-20 gap-10">
            <section  className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <div className="sm:px-10 px-5 sm:py-10 py-5 bg-[#171717] rounded-[16px] flex flex-col gap-2 font-regular">
                    <p className="text-[1rem] text-white/50 mb-1">{t.details}</p>
                    <p className="sm:text-[1.25rem] text-[1.2rem] break-all">dmytrohensirovskyi@gmail.com</p>
                    <p className="text-[1.25rem]">+49 151 61 69 38 65</p>
                </div>
                <div className="sm:px-10 px-5 sm:py-10 py-5 bg-[#171717] rounded-[16px] flex flex-col gap-1 font-regular">
                    <p className="text-[1rem] text-white/50 mb-0.5">{t.adress}</p>
                    <Link href="https://www.google.com/maps?q=Augsburg,+Germany" target="_blank" rel="noopener noreferrer">
                        <p className="text-[1.25rem]">{t.country}</p>
                        <p className="text-[1.25rem]"><span className="border-b-1 border-white border-dashed">Augsburg</span></p>
                    </Link>
                </div>
            </section>
            <section className="sm:px-10 px-5 sm:py-10 py-5 bg-[#171717] rounded-[16px]">
                <ContactForm />
            </section>
        </section>
    </main>
    )
}