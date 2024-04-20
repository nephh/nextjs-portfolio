import Project from "../components/Project";
import projects from "../data/projectData";

export default function ProjectSection() {
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
