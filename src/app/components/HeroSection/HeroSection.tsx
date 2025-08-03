'use client'

import { Button } from "@mantine/core";
import { easeOut, motion } from "framer-motion";
import Marquee from "../Marquee";
import Link from "next/link";
import classes from './HeroSection.module.css'
import gsap from "gsap";

export default function HeroSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <motion.div
      className="marquee-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}>
        <Marquee />
      </motion.div>
      <motion.div
        className="text-center"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-[2.8rem] sm:text-[4.5rem] sm:leading-[110%] leading-[120%] text-white/50 font-thin">
          I'm Dmytro,<br /><span className="text-white">Web Developer.</span>
        </h1>
      </motion.div>

      <motion.div
        className="w-[320px] sm:w-[438px] text-[18px] text-center mt-6 text-white/50 font-normal"
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.3, duration: 0.5, ease: easeOut }}
      >
        <p>
          I help businesses automate routine work, save hours weekly, and grow faster.
        </p>
      </motion.div>

      <div className="mt-10 flex gap-3">
        <Link href={"/works"}>
          <Button id="button" className={classes.button}>
            See Works
          </Button>
        </Link>
        <Link href={"/contact"}>
          <Button id="button-2" className={classes.button2}>
            Contact
          </Button>
        </Link>
      </div>
    </section>
  );
}
