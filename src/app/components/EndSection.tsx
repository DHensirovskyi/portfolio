'use client'
import { useGSAP } from "@gsap/react";
import { Button } from "@mantine/core";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";

export default function EndSection(){
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
        <section
        ref={ref}
        style={{
            background: `
            linear-gradient(to bottom right, rgba(202, 232, 189, 0.10) 13%, #0C0C0C 50%) bottom right / 50% 50% no-repeat,
            linear-gradient(to bottom left, rgba(202, 232, 189, 0.10) 13%, #0C0C0C 50%) bottom left / 50% 50% no-repeat,
            linear-gradient(to top left, rgba(202, 232, 189, 0.10) 13%, #0C0C0C 50%) top left / 50% 50% no-repeat,
            linear-gradient(to top right, rgba(202, 232, 189, 0.10) 13%, #0C0C0C 50%) top right / 50% 50% no-repeat`
        }}
        className="w-full h-auto mt-30 border-[0.5] border-white/10 rounded-[16] flex items-center justify-center py-10 px-5 sm:py-20">
            <div className="flex flex-col items-center">
                <h1 className="text-white text-[1.5rem] text-center sm:text-[2rem]">Ready to take your business to the next level?</h1>
                <p className="text-white/50 sm:text-[1rem] text-[0.875rem] text-center mt-4 max-w-[640px]">Whether it's a high-performance website, a complex web application, or smart AI automation, I'm here to turn your business idea into reality.</p>
                <Link href={'/contact'}><Button id={'button'} className="px-10 py-4 mt-8 hover:scale-[0.97] transition ease-in-out duration-200">Discuss the project</Button></Link>
            </div>
        </section>
    )
}