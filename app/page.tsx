import Hero from "@/components/sections/Hero";
import Why from "@/components/sections/Why";
import Numbers from "@/components/sections/Numbers";
import Architecture from "@/components/sections/Architecture";
import Credit from "@/components/sections/Credit";
import DemoSection from "@/components/demo/DemoSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Why />
      <Numbers />
      <Architecture />
      <DemoSection />
      <Credit />
    </>
  );
}
