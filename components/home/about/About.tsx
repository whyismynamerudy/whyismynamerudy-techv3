import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Stats } from "./Stats";
import styles from "./about.module.scss";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="about" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              hello world🫡, i&apos;m rudy. i&apos;m a young adult entering my 20's
              with a burning desire to build cool sh!t. my goal lies in making innovative
              solutions that bring value into the lives of their users.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              outside of development and tech, my interests lie in rock climbing, hip-hop,
              and working out. you&apos;ll often find me listening to the latest {" "}
              <a target="_blank" 
                href="https://spotify.link/LpGiJgTTMBb"
              >
                hip-hop
              </a>{" "}
              songs or filming a{" "} 
              <a
              target="_blank"
              href="https://www.youtube.com/channel/UCG-cKd4nkUg4U-UKeIbt1iw"
              >
                youtube
              </a>{" "}
              video about my life as a university student.
            </p>
          </Reveal>
          <Reveal>
            <div>
              <p className={styles.aboutText} style={{ fontWeight: "bold" }}>
                now:
              </p>
              <p className={styles.aboutText}>
                i&apos;m a 3rd year computer science major (with a focus in ai)/math minor/stats
                 minor at the university of toronto.
              </p>
              <p className={styles.aboutText}>
                a co-founder and cto of an ed-tech productivity startup within the{" "}
                <a
                target="_blank"
                href="https://hatchery.engineering.utoronto.ca/nest-info-page/"
                >
                  uoft hatchery
                </a>'s nest incubation program.
              </p>
              <p className={styles.aboutText}>
                a web development executive on {" "}
                <a
                  target="_blank"
                  href="https://hackthe6ix.com"
                >
                  hack the 6ix
                </a>'s organizing team.
              </p>
              <p className={styles.aboutText}>
                focusing summer on learning new technologies and delving 
                deeper into machine learning and artificial intelligence. 
              </p>
              <p className={styles.aboutText} style={{ fontWeight: "bold" }}>
                previously:
              </p>
              <p className={styles.aboutText}>
                wrote some test automation code as a swe intern at{" "}
                <a href="https://enrichai.com" target="_blank">
                  enrichAI
                </a>
                .
              </p>
              <p className={styles.aboutText}>
                did {" "}
                <a
                target="_blank"
                href="https://link.springer.com/article/10.1007/s11277-020-07301-6"
                >research</a> {" "}
                on using particle swarm optimation to perform feature selection
                for classification models.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>continue the conversation:</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
