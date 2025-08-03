'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { useRef } from 'react'
import Image from 'next/image'

export default function MarqueeStack() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  const items = [
    '/skill1.svg',
    '/skill2.svg',
    '/skill3.svg',
    '/skill4.svg',
    '/skill5.svg',
    '/skill6.svg',
    '/skill7.svg',
    '/skill8.svg',
    '/skill9.svg',
  ]

  useGSAP(() => {
    const el = marqueeRef.current
    const width = el?.scrollWidth ?? 0

    gsap.to(el, {
      x: `-${width / 2}`,
      duration: 70,
      ease: 'linear',
      repeat: -1,
    })
  }, [])

  return (
    <div className="relative w-full overflow-hidden py-40 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        ref={marqueeRef}
        className="flex items-center gap-20 w-max"
      >
        {[...items, ...items].map((item, i) => (
          <div key={i}>
            <Image src={item} alt="skill" className="h-[40px] w-auto object-contain" width={218} height={40} />
          </div>
        ))}
      </div>
    </div>
  )
}
