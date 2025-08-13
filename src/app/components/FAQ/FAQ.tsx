'use client'

import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { data } from './data'
import { FiPlus, FiX } from 'react-icons/fi'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { dict } from '@/app/i18n'
import { useLanguage } from '@/app/context/LanguageContext'

export default function FAQ() {
  const [opened, setOpened] = useState<string[]>([])
  const { language } = useLanguage();
  const t = dict[language].faq;

  const toggle = (value: string) => {
    setOpened(prev => (
      prev?.includes(value) ?
      prev.filter(i => i !== value) :
      [...prev, value]
    ))
  }

  const ref = useRef(null)

  useGSAP(() => {
    gsap.fromTo(ref.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 2,
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
    <div className="flex flex-col gap-4" ref={ref}>
      {t.map((item) => {
        const isOpen = opened.includes(item.value)

        return (
          <motion.div
            key={item.value}
            layout
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`rounded-2xl bg-[#171717] overflow-hidden transition-colors duration-300 ease-out hover:bg-[#191818] ${
              isOpen ? 'bg-[#191818]' : ''
            }`}
          >
            <button
              onClick={() => toggle(item.value)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-white font-normal text-[1rem]"
            >
              <span className='mr-2'>{item.value}</span>
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0D0D0D] rounded-full p-3"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="x"
                      initial={{ opacity: 0, rotate: 0 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiX className="text-white w-4 h-4" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="plus"
                      initial={{ opacity: 1, rotate: 0 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 1, rotate: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiPlus className="text-white w-4 h-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="px-6 pb-6 text-white/60 text-[15px] leading-relaxed">
                    {item.description.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}
