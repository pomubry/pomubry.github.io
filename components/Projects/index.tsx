import Project from "./Project";
import projects from "../../lib/projects.json";

const Projects = () => {
  return (
    <section>
      {projects.map((item, index) => (
        <Project
          title={item.title}
          img={item.img}
          desc={item.desc}
          github={item.github}
          site={item.site}
          index={index}
          key={item.title}
        />
      ))}
    </section>
  );
};

export default Projects;
