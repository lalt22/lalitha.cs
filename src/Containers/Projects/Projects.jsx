import styles from "./Projects.module.scss";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import projectData from "../../projectsdata/projectsdata.json";

const Projects = () => {
    console.log(projectData);
    return (
        <section id="projects" className={styles.projects_section}>
            <h1>I've Built...</h1>
            <div className={styles.projects}>
                {projectData.map((project) => {
                    return (
                        <ProjectCard project={project} key={project.name}/>
                    )
                })}
            </div>
            
            
        </section>
    )
}

export default Projects;