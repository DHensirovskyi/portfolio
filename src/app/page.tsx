import Comments from "./components/Comments";
import FAQ from "./components/FAQ/FAQ";
import HeroSection from "./components/HeroSection/HeroSection";
import LatestWorks from "./components/LatestWorks";
import MarqueeStack from "./components/MarqueeStack";
import Parallax from "./components/Parallax";
import Pricing from "./components/Pricing";
import WhatIDo from "./components/WhatIDo";
import EndSection from './components/EndSection'

export default function Home() {
  return (
    <main>
      <section className="max-w-[860px] py-0 px-6 lg:px-0 m-auto text-white md:mt-[240px] mt-[160px]">
        <HeroSection />
        <Parallax />
        <LatestWorks />
        <WhatIDo />
        <MarqueeStack/>
        <FAQ />
      </section>
      <section className="max-w-[1300px] py-0 px-6 m-auto text-white">
        <Pricing />
      </section>
      <section className="max-w-[860px] py-0 px-6 lg:px-0 m-auto text-white sm:mb-40 mb-20">
        <Comments/>
        <EndSection />
      </section>
    </main>
  );
}
