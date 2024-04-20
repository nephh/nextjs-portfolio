import Head from "next/head";
import { Link, Element } from "react-scroll";
import Project from "../components/Project";
import projects from "../data/projectData";

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
        >
          Projects{" "}
        </Link>
        / <a>Github</a> /{" "}
        <Link
          to="about"
          smooth={true}
          duration={1000}
          className="hover:cursor-pointer"
        >
          About
        </Link>
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Owen McCormick Portfolio</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-md flex flex-col items-center justify-center bg-slate-900 text-center text-slate-200">
        <div className="w-full">
          <Landing />
          <Element name="projects">
            <ProjectSection />
          </Element>
          <Element name="about">{/* <About /> */}</Element>
        </div>
      </main>
    </>
  );
}
