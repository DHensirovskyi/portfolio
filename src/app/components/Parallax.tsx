'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function ParallaxGSAP() {
  const imageRef = useRef(null)

  useGSAP(() => {
    gsap.to(imageRef.current, {
      y: 160,
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top 85%',
        end: 'bottom 10%',
        scrub: true,
      },
    })
  }, [])

  return (
    <section className="flex justify-center items-center relative overflow-hidden mt-20">
      <div
        ref={imageRef}
        className="relative w-[341px] h-[600px] sm:w-[440px] sm:h-[820px] will-change-transform overflow-hidden rounded-[inherit]"
      >
        <Image
          src="/meBlack.png"
          alt="person"
          fill
          priority
          className="object-cover object-top"
        />

        <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none z-10 bg-gradient-to-b from-transparent via-[#0D0D0D]/90 to-[#0D0D0D]" />
      </div>


    </section>
  )
}
