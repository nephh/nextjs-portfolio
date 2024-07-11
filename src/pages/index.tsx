import Head from "next/head";
import { Link, Element, scroller, scrollSpy } from "react-scroll";
import Project from "../components/project";
import projects from "../data/projectData";
import { useEffect } from "react";
import { FloatingNav } from "@/components/ui/navbar";

function ProjectSection() {
  return (
    <div className="flex justify-center items-center xl:h-screen">
      <div className="flex flex-col justify-center items-center mx-8 xl:grid xl:grid-cols-2 xl:gap-4">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              tools={project.tools}
              date={project.date}
              url={project.url}
              imgUrl={project.imgUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-left">
      <h2 className="flex flex-nowrap text-lg">About Me</h2>
      <hr className="my-6 w-4/12 border opacity-25" />
      <p className="w-8/12 text-2xl leading-8 about">
        Hello! My name is Owen McCormick, I am a junior developer, and I love to
        create. I am motivated by my love for computers and a desire to leverage
        technology to create a vast amount of interesting ideas. <br />
        <br />I have always been partial to computers, and in 2022 I decided I
        wanted to pursue becoming a programmer as a full-time job. Prior to
        this, programming had been a small hobby of mine. I begin in C++,
        learning to mod and manipulate video games, and then moved towards
        Python in order to create a small Twitter Bot. <br />
        <br />
        Since then, I decided to take a bootcamp on web development and really
        push towards making this a career. My biggest strength is my desire to
        learn. I have no problem picking up a brand new language, framework, or
        software and learning the ins and outs of it in order to accomplish my
        goals. <br />
        <br />I am incredibly excited to build interesting projects, and
        continue to learn the ins and outs of being a developer.
      </p>
    </div>
  );
}

function Landing() {
  return (
    <div className="flex flex-col justify-center items-center h-screen landing">
      <h2>Hello ^-^</h2>
      <h1 className="text-[75px]">Owen McCormick</h1>
      <h2 className="text-2xl">Driven by a desire to learn and create</h2>

      <p className="mt-10 text-sm">
        <Link
          to="projects"
          smooth={true}
          duration={1000}
          className="hover:cursor-pointer"
          href="/#projects"
          spy={true}
          hashSpy={true}
        >
          Projects{" "}
        </Link>
        / <a>Github</a> /{" "}
        <Link
          to="about"
          smooth={true}
          duration={1000}
          className="hover:cursor-pointer"
          href="/#about"
          spy={true}
          hashSpy={true}
        >
          About
        </Link>
      </p>
      <p className="mt-6 text-xs">
        This site is under construction, especially for smaller screens. Please
        bear with me :)
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2>Contact Me</h2>
      <hr className="my-6 w-4/12 border opacity-50 bg-zinc-50" />
      <form
        action="https://getform.io/f/cd4f83e1-8382-47db-8cbe-59ec62a25dc0"
        method="POST"
        className="flex flex-col w-full md:w-7/12"
      >
        <input
          type="text"
          name="name"
          placeholder="Name..."
          className="p-2 bg-transparent rounded-md border-2 border-opacity-50 focus:outline-none border-zinc-600"
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail..."
          className="p-2 my-2 bg-transparent rounded-md border-2 border-opacity-50 focus:outline-none border-zinc-600"
        />
        <textarea
          name="message"
          placeholder="Message..."
          rows={10}
          className="p-2 mb-4 bg-transparent rounded-md border-2 border-opacity-50 resize-none focus:outline-none border-zinc-600"
        />
        <div className="flex justify-center">
          <button className="relative py-3 px-8 text-sm text-white rounded-full border transition duration-200 hover:shadow-2xl border-zinc-600 bg-zinc-600 bg-opacity-60 hover:shadow-white/[0.1]">
            <div className="absolute inset-x-0 -top-px mx-auto w-1/2 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent shadow-2xl" />
            <span className="relative z-20">Work With Me</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      scroller.scrollTo(hash, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
    scrollSpy.update();
  }, []);

  const navItems = [
    {
      name: "Projects",
      link: "/#projects",
    },
    {
      name: "About",
      link: "/#about",
    },
    {
      name: "Contact",
      link: "/#contact",
    },
  ];

  return (
    <>
      <Head>
        <title>Owen McCormick Portfolio</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-center items-center text-center text-md text-slate-200">
        <FloatingNav navItems={navItems} className="md:hidden" />
        <div className="w-full">
          <Landing />
          <Element name="projects">
            <ProjectSection />
          </Element>
          <Element name="about">
            <About />
          </Element>
          <Element name="contact">
            <Contact />
          </Element>
        </div>
      </main>
    </>
  );
}
