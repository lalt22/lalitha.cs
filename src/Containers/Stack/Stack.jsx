import styles from "./Stack.module.scss";

const Stack = () => {
    return (
        <section id="skills" className={styles.stack}>
            <h1>I've Worked With...</h1>
            <div className={styles.stack_list}>
                <div className={styles.stack_entry}>
                    <img src="src\assets\icons\java.png"/>
                    <h3>Java</h3>
                </div>

                <div className={styles.stack_entry}>
                <img src="src\assets\icons\icons8-javascript-144.png" />
                <h3>JavaScript</h3>
                </div>
                
                <div className={styles.stack_entry}>
                <img src="src\assets\icons\icons8-html-128.png" />
                <h3>HTML</h3>
                </div>

                <div className={styles.stack_entry}>
                <img src="src\assets\icons\icons8-react-160.png" />
                <h3>ReactJS</h3>
                </div>

                <div className={styles.stack_entry}>
                <img src="src\assets\icons\icons8-c-100.png" />
                <h3>C</h3>
                </div>
                
                <div className={styles.stack_entry}>
                <img src="src\assets\icons\icons8-firestore-144.png" />
                <h3>Google Firebase and Firestore</h3>
                </div>

                <div className={styles.stack_entry}>
                <img src=" src\assets\icons\icons8-unreal-engine-100.png" />
                <h3>Unreal Engine</h3>
                </div>

                <div className={styles.stack_entry}>
                <img src="src\assets\icons\icons8-python-144.png" />
                <h3>Python</h3>
                </div>

                
            </div>
            <h1>I've Studied...</h1>
            <div className={styles.stack_list}>
                <div className={styles.stack_entry}>
                    <img src="src\assets\icons\concurrency.png"/>
                    <h3>Concurrency</h3>
                </div>
                <div className={styles.stack_entry}>
                    <img src="src\assets\icons\objects.png"/>
                    <h3>Object Oriented Programming</h3>
                </div>
                <div className={styles.stack_entry}>
                    <img src="src\assets\icons\icons8-thin-client-100.png"/>
                    <h3>Networks</h3>
                </div>
                <div className={styles.stack_entry}>
                    <img src="src\assets\icons\stack-of-three-coins.png"/>
                    <h3>Data Structures And Algorithms</h3>
                </div>
                <div className={styles.stack_entry}>
                    <img src="src\assets\icons\algorithm.png"/>
                    <h3>Algorithmic Verification</h3>
                </div>
            </div>
        </section>
    )
}

export default Stack;