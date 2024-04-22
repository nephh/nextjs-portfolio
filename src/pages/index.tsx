import Head from "next/head";
import { Link, Element, scroller, scrollSpy } from "react-scroll";
import Project from "../components/project";
import projects from "../data/projectData";
import { useEffect } from "react";
import { FloatingNav } from "@/components/ui/navbar";

function ProjectSection() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center 2xl:grid 2xl:grid-cols-2 2xl:gap-4">
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
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
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
        </div>
      </main>
    </>
  );
}
