import ScrollAnimation from "@/components/animations/scroll-animation";
import Link from "next/link";
import { LinkPreview } from "../ui/link-preview";

const ResumeSection = () => {
  return (
    <section id="resume-area" className="mt-6 py-20">
      <div className="container">
        <h2 className="mb-10 text-3xl font-bold">Resume Area 📝</h2>
        <ScrollAnimation>
          <h2 className="mb-4 w-fit bg-orange-500 p-1 text-2xl font-bold dark:bg-brand dark:text-black">
            Skills
          </h2>
          <h3 className="font-bold">Programming Languages_</h3>
          <p>Javascript/Typescript</p>
          <h3 className="font-bold">More Technologies_ </h3>
          <p>
            HTML, CSS, SCSS, VS Code, Git, all major
            operating systems
          </p>
          <h3 className="font-bold">Frameworks and Librarys_</h3>
          <p>
            React, Next.js TailwindCSS, Magic ui and Payload
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <hr className="my-10 dark:border-neutral-700" />
          <h2 className="mb-4 w-fit bg-orange-500 p-1 text-2xl font-bold dark:bg-brand dark:text-black">
            Work & Experience
          </h2>
          <h3 className="font-bold">Work_</h3>
          <p className="mb-1">
            since 2022: <Link
              className="text-yellow-600 dark:text-brand "
              href={"https://www.intersmartsolution.com/"}
            >
              Intersmart
            </Link>, working as web developer on multiple
            international companies with HTML, CSS, Javascript, Laravel and Next.js
          </p>
          <p className="mb-1">
            2020 - 2022: Web developer at “Oges infotech”,
            active development of web based project
          </p>
          <p className="mb-1">
            2019 - 2022: started profesional career on web at &quot;EyeT Innovations&quot;
          </p>
          <h3 className="font-bold">Strength_ </h3>
          <p className="mb-1">
            building fast and reliable fullstack dynamic or static website with cutting edge
            technology that scales easily up
          </p>
          <h3 className="font-bold">Design_ </h3>
          <p className="mb-1">
            A new way to build better relationships with clients with modern UI designs aspects
          </p>
          <h3 className="font-bold">Else_ </h3>
          <p className="mb-1">
            Optimzations, usability and relability
          </p>
          <p className="mb-1">
            ...see{" "}
            <Link
              className="text-yellow-600 dark:text-brand "
              href={"/changelog"}
            >
              changelog
            </Link>
          </p>
        </ScrollAnimation>
        <hr className="my-10 dark:border-neutral-700" />
        <ScrollAnimation>
          <h2 className="mb-4 w-fit bg-orange-500 p-1 text-2xl font-bold dark:bg-brand dark:text-black">
            Projects
          </h2>
          <p className="mb-1">
            <span className="w-fit bg-emerald-100 font-bold dark:bg-emerald-900">
              Constructed and Developed
            </span>{" "}
            a complete CMS website in to connect buyer to the dealer, {" "}
            <Link
              className="text-yellow-600 dark:text-brand "
              href={"https://www.bydoman.com/"}
            >
              BYD Oman
            </Link>.
          </p>
          <p className="mb-1">
            <span className="w-fit bg-emerald-100 font-bold dark:bg-emerald-900">
              Created
            </span>{" "}
            my own personal Portfolio using next js.
          </p>
          <p className="mb-1">
            <span className="w-fit bg-emerald-100 font-bold dark:bg-emerald-900">
              Engineered
            </span>{" "}
            the latest and simplest way of digital footprints.
          </p>
          <p className="mb-1">
            <span className="w-fit bg-emerald-100 font-bold dark:bg-emerald-900">
              Coded
            </span>{" "}
            multiple project with long visions user Experience.
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <hr className="my-10 dark:border-neutral-700" />
          <h2 className="mb-4 w-fit bg-orange-500 p-1 text-2xl font-bold dark:bg-brand dark:text-black">
            Else
          </h2>
          <h3 className="font-bold">Languages_</h3>
          <p className="mb-1">
            English (basics), Malayalam (native), Tamil (basics).
          </p>
          <h3 className="font-bold">Since 2018_ </h3>
          <p className="mb-1">
            Studying web-based technologies.
          </p>
          <h3 className="font-bold">Life vision_</h3>
          <p className="mb-1">
            Build a beautiful homestay for the rest life.
          </p>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ResumeSection;
