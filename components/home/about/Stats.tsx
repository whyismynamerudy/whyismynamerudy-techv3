import { Reveal } from "@/components/utils/Reveal";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { FaBrain, FaCode, FaToolbox } from "react-icons/fa";
import styles from "./stats.module.scss";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <span>tools and languages i like to use:</span>
          </h4>
          <h4>
            <FaCode size="2.4rem" color="var(--brand)" />
            <span>languages</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Python</span>
            <span className="chip">C/C++</span>
            <span className="chip">C#</span>
            <span className="chip">Java</span>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">SQL</span>
            <span className="chip">Assembly</span>
            <span className="chip">SCSS</span>
            <span className="chip">HTML/CSS</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <FaBrain size="2.4rem" color="var(--brand)" />
            <span>frameworks</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">TensorFlow</span>
            <span className="chip">PyTorch</span>
            <span className="chip">Scikit-learn</span>
            <span className="chip">Pandas</span>
            <span className="chip">Matplotlib</span>
            <span className="chip">Keras</span>
            <span className="chip">React.js</span>
            <span className="chip">Node.js</span>
            <span className="chip">Express.js</span>
            <span className="chip">Svelte.js</span>
            <span className="chip">Flask</span>
            <span className="chip">Django</span>
            <span className="chip">GraphQL</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>tools and databases</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Git/GitHub</span>
            <span className="chip">Amazon Web Services (AWS)</span>
            <span className="chip">MySQL</span>
            <span className="chip">MongoDB</span>
            <span className="chip">PostgreSQL</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
