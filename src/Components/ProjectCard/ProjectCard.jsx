import styles from "./ProjectCard.module.scss";
import deploy from "../../assets/icons/deploy.png";
import github from  "../../assets/icons/github.png";

const ProjectCard = ({project}) => {
    return (
        <div className={styles.project_card}>
            <img src={`/react_portfolio/assets${project.image}`} className={styles.project_img}/>
            <div className={styles.info}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className={styles.see_projects}>
                    <h3>See Project At</h3>
                    <div className={styles.icons}>
                        {project.deployed && <a href={project.deployed} target="_blank"><img src={deploy} /></a>}
                        <a href={project.github} target="_blank"> <img src={github}></img></a>
                    </div>        
                </div>
            </div>        
        </div>
    )
}
export default ProjectCard;