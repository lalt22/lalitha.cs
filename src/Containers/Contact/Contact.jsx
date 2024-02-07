import styles from "./Contact.module.scss";
import github from "../../assets/icons/github-white.png";
import linkedin from "../../assets/icons/linkedin.png";

const Contact = () => {
    return (
        <section id="contact">
            <div className={styles.contact_div}>
                <h1>Get In Touch...</h1>

                <div className={styles.contact_methods}>
                    <div className={styles.contact}>
                        <a href="mailto:lalitha2seshadri@gmail.com">
                            <img src="src\assets\icons\email.png"></img>
                            <p>lalitha2seshadri@gmail.com</p>
                        </a>
                        
                    </div>
                    <div className={styles.contact}>
                        <a href="https://github.com/lalt22" target="_blank">
                            <img src={github}></img>
                            <p>@lalt22</p>
                        </a>
                    </div>
                    <div className={styles.contact}>
                        <a href="https://www.linkedin.com/in/lalithacs" target="_blank">
                            <img src={linkedin}></img>
                            <p>@lalithacs</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;