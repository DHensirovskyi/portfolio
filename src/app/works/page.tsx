'use client'

import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";


type IWork = {
  slug: string;
  img: string;
  name: string;
  description: string;
  label: string;
};

const works: IWork[] = [
  {
    slug: 'gartenservice',
    img: "/work1.jpg",
    name: "Gartenservice Augsburg — Corporate Website",
    description: "Development of a modern corporate website for a German company.",
    label: "Website",
  },
  {
    slug: 'calipso',
    img: "/work2.jpg",
    name: "Calipso Movies — Web Application",
    description: "A dynamic web application for searching movies using the The Movie Data Base API.",
    label: "WebApp",
  },
];

export default function Works(){

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

    return(
    <main className="max-w-[860px] py-0 px-6 lg:px-0 m-auto text-white md:mt-[240px] mt-[160px] sm:mb-40 mb-20">
        <section className="flex flex-col items-center justify-center gap-4 mb-20">
          <div className="flex items-center border border-white/10 rounded-full px-[13px] py-[6px] bg-[#141414] text-[0.875rem] w-[67px] h-[32px]">
            <p>Works</p>
          </div>
          <h1 className="text-[2.8rem] sm:text-[4.5rem] sm:leading-[110%] leading-[120%] text-white/50 font-thin">
            The hall<br /><span className="text-white">of fame.</span>
          </h1>
        </section>
        <section className="w-auto" ref={ref}>
        {works.map(work => (
        <Link href={`/works/${work.slug}`} className="block group mt-15" key={work.name}>
        <div className="w-full relative aspect-[4/3] rounded-[16px] overflow-hidden mb-6">
          <Image
            src={work.img}
            alt="gartenservice"
            fill
            className="object-cover transition duration-300"
            priority
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300" />
        </div>
        <div className="flex justify-between items-center">
          <h6 className="sm:text-[1.25rem] text-[0.9rem] text-white">{work.name}</h6>
          <div className="border border-white/10 rounded-full px-4 py-[6px] bg-[#141414] sm:text-[0.875rem] text-[0.6rem]">
            {work.label}
          </div>
        </div>
      </Link>
      ))}
    </section>
    </main>
    )
}
