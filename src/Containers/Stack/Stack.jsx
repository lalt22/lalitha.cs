import styles from "./Stack.module.scss";
import java from "../../assets/icons/java.png";
import js from "../../assets/icons/js.png";
import html from "../../assets/icons/html.png"
import react from "../../assets/icons/react.png"
import c from "../../assets/icons/c.png"
import firestore from "../../assets/icons/firestore.png"
import ue from "../../assets/icons/ue.png";
import python from "../../assets/icons/python.png"
import concurrency from "../../assets/icons/concurrency.png"
import oop from "../../assets/icons/objects.png"
import network from "../../assets/icons/network.png"
import dsaa from "../../assets/icons/algoveri.png"
import algorithm from "../../assets/icons/network.png"


const Stack = () => {
    return (
        <section id="skills" className={styles.stack}>
            <h1>I've Worked With...</h1>
            <div className={styles.stack_list}>
                <div className={styles.stack_entry}>
                    <img src={java}/>
                    <h3>Java</h3>
                </div>

                <div className={styles.stack_entry}>
                <img src={js} />
                <h3>JavaScript</h3>
                </div>
                
                <div className={styles.stack_entry}>
                <img src={html} />
                <h3>HTML</h3>
                </div>

                <div className={styles.stack_entry}>
                <img src={react} />
                <h3>ReactJS</h3>
                </div>

                <div className={styles.stack_entry}>
                <img src={c} />
                <h3>C</h3>
                </div>
                
                <div className={styles.stack_entry}>
                <img src={firestore} />
                <h3>Google Firebase and Firestore</h3>
                </div>

                <div className={styles.stack_entry}>
                <img src={ue} />
                <h3>Unreal Engine</h3>
                </div>

                <div className={styles.stack_entry}>
                <img src={python} />
                <h3>Python</h3>
                </div>

                
            </div>
            <h1>I've Studied...</h1>
            <div className={styles.stack_list}>
                <div className={styles.stack_entry}>
                    <img src={concurrency}/>
                    <h3>Concurrency</h3>
                </div>
                <div className={styles.stack_entry}>
                    <img src={oop}/>
                    <h3>Object Oriented Programming</h3>
                </div>
                <div className={styles.stack_entry}>
                    <img src={network}/>
                    <h3>Networks</h3>
                </div>
                <div className={styles.stack_entry}>
                    <img src={dsaa}/>
                    <h3>Data Structures And Algorithms</h3>
                </div>
                <div className={styles.stack_entry}>
                    <img src={algorithm}/>
                    <h3>Algorithmic Verification</h3>
                </div>
            </div>
        </section>
    )
}

export default Stack;