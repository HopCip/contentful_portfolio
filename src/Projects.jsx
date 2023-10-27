import { useFetchProjects } from './fetchProjects.jsx';

const Projects = () => {
  const { loading, projects } = useFetchProjects();
  if (loading) {
    return (
      <section className="projects">
        <h2>Loading...</h2>
      </section>
    );
  }
  return (
    <section className="projects" id="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          const { id, img, url, title, tags } = project;
          return (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="project"
            >
              <div className="project-header-div">
                <h5>{title}</h5>
              </div>
              <img src={img} alt={title} className="img" />
              <div className="project-div">
                <h6>Build with:</h6>
                <div className="build-with-div">
                  <div className="project-tag">
                    <p>{tags}</p>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
