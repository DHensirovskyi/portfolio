'use client';

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { IWorks } from "@/app/data/works";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function WorkClient({
  work,
  otherTwo,
}: {
  work: IWorks;
  otherTwo: IWorks[];
}) {
  const mainRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (!mainRef.current) return;
      gsap.fromTo(
        mainRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: mainRef, dependencies: [work.slug] } // корректный scope и пересоздание на смену проекта
  );

  return (
    <main
      ref={mainRef}
      className="max-w-[860px] py-0 px-6 lg:px-0 m-auto text-white md:mt-[240px] mt-[160px] flex flex-col sm:gap-20 gap-10 sm:mb-20 mb-5"
    >
      <section className="flex flex-col gap-4">
        <Link href="/works" className="text-[0.875rem] text-white/50 hover:text-white transition duration-300">
          ‹ Back
        </Link>
        <h1 className="sm:text-[4.5rem] text-[2.5rem]">{work.name}</h1>
        <div className="flex gap-4 items-center font-light">
          <div className="text-[0.875rem] px-4 py-[6px] bg-[#141414] border border-white/[0.05] rounded-full">
            <p>{work.label}</p>
          </div>
          <p className="text-[1rem] text-white/50">{work.year}</p>
        </div>
      </section>

      <p className="sm:text-[2rem] text-[1.5rem] font-thin">{work.description}</p>

      <Image
        priority
        width={840}
        height={630}
        src={work.images[0]}
        alt={work.name}
        className={`w-[100%] rounded-[16px] ${work.border && "border border-white/20"}`}
      />

      <section className="flex flex-col gap-[65px]">
        <article>
          <div className="flex flex-col gap-4 mb-10">
            <h2 className="text-[2rem] font-thin">{work.subNames[0]}</h2>
            <p className="sm:text-[1.25rem] text-[1rem] font-thin text-white/50">{work.subDescriptions[0]}</p>
          </div>
          <Image
            width={840}
            height={474}
            src={work.images[1]}
            alt={`${work.name} 2`}
            className={`w-[100%] rounded-[16px] ${work.border && "border border-white/20"}`}
          />
        </article>

        <article>
          <div className="flex flex-col gap-4 mb-10">
            <h2 className="text-[2rem] font-thin">{work.subNames[1]}</h2>
            <p className="sm:text-[1.25rem] text-[1rem] font-thin text-white/50">{work.subDescriptions[1]}</p>
          </div>
          <Image
            width={840}
            height={474}
            src={work.images[2]}
            alt={`${work.name} 3`}
            className={`w-[100%] rounded-[16px] ${work.border && "border border-white/20"}`}
          />
        </article>
      </section>

      <section>
        <div className="flex justify-between items-center">
          <h3 className="md:text-[2rem] text-[24px] whitespace-nowrap">Other projects</h3>
          <div className="w-full h-px bg-white/20 lg:my-0 my-10 mx-6" />
          <Link href="/works">
            <p className="text-[1rem] text-[#CAE8BD] hover:text-white whitespace-nowrap">See all</p>
          </Link>
        </div>

        <div className="grid xl:gap-8 gap-4 grid-cols-1 xl:grid-cols-2 xl:mt-10 mt-0">
          {otherTwo.map((o) => (
            <Link key={o.slug} href={`/works/${o.slug}`} className="flex flex-col gap-0 group">
              <div className="w-full relative aspect-[4/3] rounded-[16px] overflow-hidden mb-6">
                <Image
                  src={o.images[0]}
                  alt={o.name}
                  width={412}
                  height={305}
                  className={`rounded-[16px] w-full mh-[305px] object-cover ${o.border && "border border-white/20"}`}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>
              <div className="flex justify-between">
                <h6 className="sm:text-[1.25rem] text-[0.9rem] text-white group-hover:opacity-80 transition">{o.name}</h6>
                <div className="border border-white/10 rounded-full px-4 py-[6px] bg-[#141414] sm:text-[0.875rem] text-[0.6rem]">
                  {o.label}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
