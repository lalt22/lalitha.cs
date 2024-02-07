import styles from "./About.module.scss";
import profile from "../../assets/profile.png";

const About = () => {
    return (
        <section id="about-me" className={styles.about}>
            <img src={profile}/>
            <div className={styles.about_text}>
                <h1>Hi, I'm Lalitha.</h1>
                <p className={styles.about_p}>A Software Engineering student aspiring to become a full-stack developer. I'm passionate about solving problems, framing new ideas into real applications, and immersing myself in everything in Computer Science, from the bleeding edge to the foundations.
                <br/>
                <br/>
                In my free time, you can find me dancing, exercising, drinking lots of lattes and tinkering with my PC.
                </p>
            </div>
        </section>
    )
}

export default About;