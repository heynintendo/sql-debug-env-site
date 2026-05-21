import Hero from "@/components/sections/Hero";
import Why from "@/components/sections/Why";
import Numbers from "@/components/sections/Numbers";
import Architecture from "@/components/sections/Architecture";
import Credit from "@/components/sections/Credit";
import DemoSection from "@/components/demo/DemoSection";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal>
        <Why />
      </Reveal>
      <Reveal>
        <Numbers />
      </Reveal>
      <Reveal>
        <Architecture />
      </Reveal>
      <Reveal>
        <DemoSection />
      </Reveal>
      <Reveal>
        <Credit />
      </Reveal>
    </>
  );
}
