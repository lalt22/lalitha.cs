import styles from "./NavBar.module.scss";

const NavBar = () => {
    return (
        <nav className={styles.nav_bar}>
            <h1>lalitha.CS</h1>
            <a href="#about-me">About Me</a>
            <a href="#skills">Tech Stack</a>
            <a href="#projects">What I've Worked On</a>
            <a href="#contact">Reach Out</a>
        </nav>
    )
}

export default NavBar;