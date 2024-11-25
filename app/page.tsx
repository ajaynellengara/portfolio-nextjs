import ScrollDown from "@/components/ui/scroll-down";
import ResumeSection from "@/components/home/resume-section";
import BlurIn from "@/components/ui/blur-in";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import Bg from "@/components/bg/bg";

export default function Home() {
  return (
    <>
    <div className="hidden dark:block">
          <Bg />
        </div>
      <section className="flex w-full flex-col items-center justify-between pt-[var(--header-y)] min-h-[100vh]">
        <div className="container">
          <div className="w-full block mt-[100px]">
            <BlurIn
              word="I DO WEB"
              className="text-center font-montserrat text-sm font-bold tracking-[-0.02em] drop-shadow-sm md:text-md xl:mb-4 2xl:text-1xl mb-5"
            />
            <BlurIn
              word="ajay_n"
              className="text-center font-montserrat text-3xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-6xl xl:mb-4 2xl:text-8xl mb-5"
            />
            <BlurIn
              duration={1}
              word="web developer and content creator"
              className="relative font-montserrat text-sm font-light md:text-1xl 2xl:text-2xl mb-5"
            />
          </div>
        </div>
        <div className="w-full block">
          <VelocityScroll
            text="builing awesome web pages, finding new technologies,"
            default_velocity={2}
            className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-slate-200 md:text-6xl md:leading-[5rem]"
          />
        </div>
        <ScrollDown />
      </section>
      <ResumeSection />
    </>
  );
}
