'use client'

import Link from "next/link";
import { GoHomeFill } from "react-icons/go";
import { TbBriefcase2Filled } from "react-icons/tb";
import { IoPerson } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import classes from './Header.module.css'
import { useLanguage } from "@/app/context/LanguageContext";

const navItems = [
  { href: '/', icon: <GoHomeFill fontSize="1.5rem" /> },
  { href: '/works', icon: <TbBriefcase2Filled fontSize="1.5rem" /> },
  { href: '/about', icon: <IoPerson fontSize="1.5rem" /> },
  { href: '/contact', icon: <IoMail fontSize="1.5rem" /> },
];

export default function Header(){
  const pathname = usePathname()
  const segment = useSelectedLayoutSegment()
  const { language, setLanguage } = useLanguage();


  const normalizedPath = pathname.startsWith('/works/') ? '/works' : pathname;

  const activeIndex = navItems.findIndex(item => item.href === normalizedPath)

  function toggleLanguage(){
    setLanguage(language === 'En' ? 'De' : 'En')
  }

  return(
    <header className="w-[100%] flex justify-center gap-2 mt-6 z-50 fixed">
      <nav className="w-[232px] h-[64px] flex justify-between gap-2 rounded-[80] items-center px-2 backdrop-blur-xl border-t-[0.5] border-l-[0.3] border-white/15 bg-white/3" 
        style={{boxShadow: '0 5px 35px 0 rgba(0, 0, 0, 0.25), 0 -5px 35px 0 rgba(255, 255, 255, 0.04)' }}>

        <motion.div
          className={`${segment !== '/_not-found' ? 'absolute top-2 left-2 w-12 h-12 rounded-full bg-white/10' : ''}`}
          animate={{ x: activeIndex * 55.4 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

        {navItems.map(({ href, icon }) => (
          <Link
            key={href}
            href={href}
            className={`w-12 h-12 rounded-full flex items-center justify-center hover:text-white/60 ${normalizedPath === href ? 'text-white/100' : 'text-white/50'}`}
          >
            {icon}
          </Link>
        ))}
      </nav>

      <nav className={classes.languageBtn}>
        <div className="h-[64px] flex justify-between gap-2 rounded-[80] items-center px-2 backdrop-blur-xl border-t-[0.5] border-l-[0.3] border-white/15 bg-white/3" 
          style={{boxShadow: '0 5px 35px 0 rgba(0, 0, 0, 0.25), 0 -5px 35px 0 rgba(255, 255, 255, 0.04)'}} id="languageBtn">
          <button onClick={toggleLanguage} className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center cursor-pointer">
            <AnimatePresence mode="wait">
              <motion.p
                key={language}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-4 font-semibold absolute"
              >
                {language}
              </motion.p>
            </AnimatePresence>
          </button>
        </div>
      </nav>
    </header>
  )
}
