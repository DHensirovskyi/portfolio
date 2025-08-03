'use client'

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

type IComment = {
  description: string;
  img: string;
  name: string;
  position: string;
};

const comments: IComment[] = [
  {
    description: "“Dmytro made the development process smooth and exciting. His unique approach and dedication resulted in a huge business results.”",
    img: "/commentPerson.svg",
    name: "Vadim Nistor",
    position: 'Business owner',
  },
];

export default function Comments() {
  const comment = useRef(null)

  useGSAP(() => {
  gsap.set(comment.current, {
    x: '-90vw',
    opacity: 0,
    scale: 0.95,
    });

  gsap.to(comment.current, {
    x: '0',
    opacity: 1,
    scale: 1,
    duration: 1.3,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: comment.current,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
      once: true,
    },
  });
  }, [])

  return (
    <section className="w-auto md:mt-[120px] mt-[80px]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="md:text-[2rem] text-[24px] whitespace-nowrap">What others say</h3>
        <div className="w-full h-px bg-white/20 my-10 ml-6" />
      </div>

      
        <div ref={comment}>
        {comments.map((comment) => (
          <div className="w-full" key={comment.name}>
            <div
              className="rounded-[16px] bg-[#141414] p-10 flex flex-col gap-4 justify-between">
              <div className="flex gap-1">
                <FaStar className="text-[#CAE8BD] text-[1rem]"/>
                <FaStar className="text-[#CAE8BD] text-[1rem]"/>
                <FaStar className="text-[#CAE8BD] text-[1rem]"/>
                <FaStar className="text-[#CAE8BD] text-[1rem]"/>
                <FaStar className="text-[#CAE8BD] text-[1rem]"/>
              </div>
              <p className="text-white/50 text-[1rem]">{comment.description}</p>
              <div className="flex gap-4">
                <Image src={"/commentPerson.svg"} alt={"person"} width={48} height={48}></Image>
                <div>
                  <p>{comment.name}</p>
                  <p className="text-white/50">{comment.position}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
     
    </section>
  );
}