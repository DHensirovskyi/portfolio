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


export default function LatestWorks() {

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
    <section className="w-auto" ref={ref}>
      <div className="flex justify-between items-center">
        <h3 className="md:text-[2rem] text-[24px] whitespace-nowrap">Latest works</h3>
        <div className="w-full h-px bg-white/20 my-10 mx-6" />
        <Link href="/works">
          <p className="text-[1rem] text-[#CAE8BD] hover:text-white whitespace-nowrap">See all</p>
        </Link>
      </div>

      {works.map(work => (
        <Link href={`/works/${work.slug}`} className="block mt-[10px] group mb-15" key={work.name}>
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
        <p className="my-2 text-left sm:text-[1rem] text-[0.80rem] text-white/50">
          {work.description}
        </p>
      </Link>
      ))}
    </section>
  );
}
