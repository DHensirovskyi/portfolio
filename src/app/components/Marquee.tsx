'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { useRef } from 'react'
import { dict } from "@/app/i18n";
import { useLanguage } from '../context/LanguageContext';

export default function Marquee() {
  const { language } = useLanguage();
  const t = dict[language].marquee;

  const marqueeRef = useRef<HTMLDivElement>(null)

  const items = [
    t.item1,
    t.item2,
    t.item3,
  ]

  useGSAP(() => {
    const el = marqueeRef.current
    const width = el?.scrollWidth ?? 0

    gsap.to(el, {
      x: `-${width / 2}`,
      duration: 20,
      ease: 'linear',
      repeat: -1,
    })
  }, [])

  return (
    <div className="relative w-full sm:max-w-[365px] max-w-[300px]  overflow-hidden pb-[15px] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        ref={marqueeRef}
        className="flex gap-2 w-max"
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="bg-[#171717] text-white text-sm font-light px-4 py-[6px] rounded-full border border-white/5 whitespace-nowrap select-none cursor-default transition-colors duration-300"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
