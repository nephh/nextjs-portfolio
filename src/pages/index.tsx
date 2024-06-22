import Head from "next/head";
import { Link, Element, scroller, scrollSpy } from "react-scroll";
import Project from "../components/project";
import projects from "../data/projectData";
import { useEffect } from "react";
import { FloatingNav } from "@/components/ui/navbar";

function ProjectSection() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex w-10/12 flex-col items-center justify-center 2xl:grid 2xl:grid-cols-2 2xl:gap-4">
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
    <div className="flex h-screen flex-col items-center justify-center text-left">
      <h2 className="flex flex-nowrap text-lg">About Me</h2>
      <hr className="my-6 w-4/12 border opacity-25" />
      <p className="about w-8/12 text-2xl leading-8">
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
    <div className="landing flex h-screen flex-col items-center justify-center">
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
    </div>
  );
}

function Contact() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h2>Contact Me</h2>
      <hr className="my-6 w-4/12 border opacity-25" />
      <p className="about w-8/12 text-2xl leading-8">
        I am currently looking for work as a junior developer. If you would like
        to reach out to me, please feel free to contact me!
      </p>
      <form
        action="https://getform.io/f/cd4f83e1-8382-47db-8cbe-59ec62a25dc0"
        method="POST"
        className="flex w-full flex-col md:w-7/12"
      >
        <div className="flex justify-center">
          <h2 className="mb-2 text-lg font-semibold">Want to reach out?</h2>
        </div>
        <input
          type="text"
          name="name"
          placeholder="Name..."
          className="rounded-md border-2 bg-transparent p-2 focus:outline-none dark:border-slate-800"
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail..."
          className="my-2 rounded-md border-2 bg-transparent p-2 focus:outline-none dark:border-slate-800"
        />
        <textarea
          name="message"
          placeholder="Message..."
          rows={10}
          className="mb-4 resize-none rounded-md border-2 bg-transparent p-2 focus:outline-none dark:border-slate-800"
        />
        <div className="flex justify-center">
          <button
            type="button"
            className="bgsize inline-block w-max transform rounded-md bg-gradient-to-br from-slate-600 to-slate-800 px-8 py-3 text-center text-base font-medium text-white drop-shadow-md transition-all duration-300 hover:scale-105"
          >
            Work With Me
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
      <main className="text-md flex flex-col items-center justify-center bg-slate-900 text-center text-slate-200">
        <FloatingNav navItems={navItems} />
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
