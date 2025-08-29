'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef, useMemo, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { IWorks } from '@/app/data/works';
import { useLanguage } from '@/app/context/LanguageContext';
import { dict } from '@/app/i18n';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function AutoPlayVideo({
  src,
  poster,
  className,
  loop = true,
}: {
  src: string;
  poster?: string;
  className?: string;
  loop?: boolean;
}) {
  const vRef = useRef<HTMLVideoElement | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const v = vRef.current;
    if (!v) return;

    const onPlay = () => setPaused(false);
    const onPause = () => setPaused(true);

    v.addEventListener('play', onPlay);
    v.addEventListener('pause', onPause);
    v.controls = true;
    if (v.paused) v.play().catch(() => {});

    return () => {
      v.removeEventListener('play', onPlay);
      v.removeEventListener('pause', onPause);
    };
  }, []);

  const togglePlay = () => {
    const v = vRef.current;
    if (!v) return;
    if (v.paused) v.play();
    else v.pause();
  };

  return (
    <div className="relative group">
      <video
        ref={vRef}
        className={className ?? ''}
        poster={poster}
        playsInline
        muted
        autoPlay
        loop={loop}
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
      </video>

      <button
        type="button"
        aria-label={paused ? 'Play' : 'Pause'}
        onClick={togglePlay}
        className="absolute inset-x-0 top-0 hidden md:block"
        style={{
          bottom: 64,
          background: 'transparent',
          cursor: 'pointer',
        }}
      />

      <div
        className={`pointer-events-none absolute inset-0 hidden md:flex items-center justify-center transition-opacity duration-200 ${
          paused ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'
        }`}
      >
        <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden>
          <circle cx="32" cy="32" r="28" fill="rgba(0,0,0,0.45)" />
          {paused ? (
            <polygon points="26,20 46,32 26,44" fill="#fff" />
          ) : (
            <>
              <rect x="23" y="20" width="6" height="24" fill="#fff" />
              <rect x="35" y="20" width="6" height="24" fill="#fff" />
            </>
          )}
        </svg>
      </div>
    </div>
  );
}




export default function WorkClient({
  work,
  otherTwo,
}: {
  work: IWorks;
  otherTwo: IWorks[];
}) {
  const { language } = useLanguage();
  const t = dict[language];
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
          ease: 'power3.out',
          scrollTrigger: {
            trigger: mainRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    },
    { scope: mainRef, dependencies: [work.slug, language] }
  );

  const localizedWork = useMemo(() => {
    const l = t.workDetails?.[work.slug as keyof typeof t.workDetails];
    if (!l) return work;
    return {
      ...work,
      name: l.name ?? work.name,
      label: l.label ?? work.label,
      description: l.description ?? work.description,
      subNames: l.subNames ?? work.subNames,
      subDescriptions: l.subDescriptions ?? work.subDescriptions,
    };
  }, [t, work]);

  const localizedOther = useMemo(() => {
    return otherTwo.map((o) => {
      const l = t.workDetails?.[o.slug as keyof typeof t.workDetails];
      return {
        ...o,
        name: l?.name ?? o.name,
        label: l?.label ?? o.label,
      };
    });
  }, [t, otherTwo]);

  return (
    <main
      ref={mainRef}
      className="max-w-[860px] py-0 px-6 lg:px-0 m-auto text-white md:mt-[240px] mt-[160px] flex flex-col sm:gap-20 gap-10 sm:mb-20 mb-5"
    >
      <section className="flex flex-col gap-4">
        <Link href="/works" className="text-[0.875rem] text-white/50 hover:text-white transition duration-300">
          {t.workPage.back}
        </Link>
        <h1 className="sm:text-[4.5rem] text-[2.5rem]">{localizedWork.name}</h1>
        <div className="flex gap-4 items-center font-light">
          <div className="text-[0.875rem] px-4 py-[6px] bg-[#171717] border border-white/[0.05] rounded-full">
            <p>{localizedWork.label}</p>
          </div>
          <p className="text-[1rem] text-white/50">{localizedWork.year}</p>
        </div>
      </section>

      {localizedWork.slug === 'velvera' && localizedWork.video?.[0] ? (
        <AutoPlayVideo
          src={localizedWork.video[0]}
          poster="/velvera/poster.png"
          className={`w-[100%] rounded-[16px] ${localizedWork.border && 'border border-white/20'}`}
        />
      ) : (
        <Image
          priority
          width={840}
          height={630}
          src={localizedWork.images[0]}
          alt={localizedWork.name}
          className={`w-[100%] rounded-[16px] ${localizedWork.border && 'border border-white/20'}`}
        />
      )}

      <p className="sm:text-[2rem] text-[1.5rem] font-thin">{localizedWork.description}</p>

      <section className="flex flex-col gap-[65px]">
        <article>
          <div className="flex flex-col gap-4 mb-10">
            <h2 className="text-[2rem] font-thin">{localizedWork.subNames?.[0]}</h2>
            <p className="sm:text-[1.25rem] text-[1rem] font-thin text-white/50">
              {localizedWork.subDescriptions?.[0]}
            </p>
          </div>
          <Image
            width={840}
            height={474}
            src={localizedWork.images[1]}
            alt={`${localizedWork.name} 2`}
            className={`w-[100%] rounded-[16px] ${localizedWork.border && 'border border-white/20'}`}
          />
        </article>

        <article>
          <div className="flex flex-col gap-4 mb-10">
            <h2 className="text-[2rem] font-thin">{localizedWork.subNames?.[1]}</h2>
            <p className="sm:text-[1.25rem] text-[1rem] font-thin text-white/50">
              {localizedWork.subDescriptions?.[1]}
            </p>
          </div>
          <Image
            width={840}
            height={474}
            src={localizedWork.images[2]}
            alt={`${localizedWork.name} 3`}
            className={`w-[100%] rounded-[16px] ${localizedWork.border && 'border border-white/20'}`}
          />
        </article>
      </section>

      <section>
        <div className="flex justify-between items-center">
          <h3 className="md:text-[2rem] text-[24px] whitespace-nowrap">{t.workPage.other}</h3>
          <div className="w-full h-px bg-white/20 lg:my-0 my-10 mx-4" />
          <Link href="/works">
            <p className="text-[1rem] text-[#CAE8BD] hover:text-white whitespace-nowrap">{t.workPage.seeAll}</p>
          </Link>
        </div>

        <div className="grid xl:gap-8 gap-4 grid-cols-1 xl:grid-cols-2 xl:mt-10 mt-0">
          {localizedOther.map((o) => (
            <Link key={o.slug} href={`/works/${o.slug}`} className="flex flex-col gap-0 group">
              <div className="w-full relative aspect-[4/3] rounded-[16px] overflow-hidden mb-6">
                {o.slug === 'velvera' ? (
                  <AutoPlayVideo
                    src="/velvera/velvera.mp4"
                    poster="/velvera/poster.png"
                    className="w-full h-full object-cover rounded-[16px]"
                  />
                ) : (
                  <Image
                    src={o.otherImg}
                    alt={o.name}
                    width={412}
                    height={305}
                    className={`rounded-[16px] w-full mh-[305px] object-cover ${o.border && 'border border-white/20'}`}
                  />
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>
              <div className="flex justify-between">
                <h6 className="sm:text-[1.25rem] text-[0.9rem] text-white group-hover:opacity-80 transition">
                  {o.name}
                </h6>
                <div className="border border-white/10 rounded-full px-4 py-[6px] flex items-center bg-[#141414] sm:text-[0.875rem] text-[0.6rem]">
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
