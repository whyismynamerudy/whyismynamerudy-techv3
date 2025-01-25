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
              hello world🫡, i&apos;m rudy. i&apos;m pursuing knowledge at the intersection of 
              ai and software engineering, with a focus on building systems that scale and bring value 
              to users.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              outside of tech, i&apos;m into rock climbing, hip-hop, and working out. you&apos;ll often find me listening
              to the latest{" "}
              <a target="_blank" href="https://spotify.link/LpGiJgTTMBb">
                hip-hop
              </a>{" "}
              songs or filming a{" "}
              <a target="_blank" href="https://www.youtube.com/channel/UCG-cKd4nkUg4U-UKeIbt1iw">
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
                engineering dependency visualization systems in clojure/angular, automating openshift cluster management, 
                and streamlining release cycles at{" "}
                <a target="_blank" href="https://www.intactfc.com/">
                  intact financial corporation
                </a>{" "}
                as a software engineering intern.
              </p>
              <p className={styles.aboutText}>
                building and contributing to the ai/ml ecosystem as an entrepreneur at{" "}
                <a target="_blank" href="https://www.shopify.com/">
                  shopify builder sundays
                </a>.
              </p>
              <p className={styles.aboutText}>
                entering my final year at uoft (cgpa: 3.91/4.00), studying computer science 
                with a focus in ai, mathematics, and statistics.
              </p>

              <p className={styles.aboutText} style={{ fontWeight: "bold" }}>
                previously:
              </p>
              <p className={styles.aboutText}>
                researched logical query answering over knowledge graphs using llms at{" "}
                <a target="_blank" href="https://csslab.cs.toronto.edu/">
                  the computational social sciences lab
                </a>{" "}
                under prof. ashton anderson.
              </p>
              <p className={styles.aboutText}>
                developed ontology-guided entity extraction systems using llms at the{" "}
                <a target="_blank" href="https://urbandatacentre.com/">
                  urban data center
                </a>.
              </p>
              <p className={styles.aboutText}>
                worked on autocolorization of black and white images at{" "}
                <a target="_blank" href="https://utmist.gitlab.io/">
                  utmist
                </a>, implementing and expanding on "colorful image colorization" by richard zhang et al.
              </p>
              <p className={styles.aboutText}>
                led development of an open-source dashboard cloning system at{" "}
                <a target="_blank" href="https://www.unicef.org/">
                  unicef
                </a>{" "}
                that reduced clone times by 93.6% across 100+ offices.
              </p>
              <p className={styles.aboutText}>
                co-founded and served as cto of an ed-tech startup in the{" "}
                <a target="_blank" href="https://hatchery.engineering.utoronto.ca/nest-info-page/">
                  uoft hatchery
                </a>{" "}
                nest program.
              </p>
              <p className={styles.aboutText}>
                built the website and developer platform as a full stack developer at{" "}
                <a target="_blank" href="https://hackthe6ix.com">
                  hack the 6ix
                </a>.
              </p>
              <p className={styles.aboutText}>
                automated testing processes as a swe intern at{" "}
                <a target="_blank" href="https://enrichai.com">
                  enrichai
                </a>.
              </p>
              <p className={styles.aboutText}>
                published{" "}
                <a target="_blank" href="https://link.springer.com/article/10.1007/s11277-020-07301-6">
                  research
                </a>{" "}
                on particle swarm optimization for feature selection in classification models.
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

// export const About = () => {
//   return (
//     <section id="about" className="section-wrapper">
//       <SectionHeader title="about" dir="l" />
//       <div className={styles.about}>
//         <div>
//           <Reveal>
//             <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
//               hello world🫡, i&apos;m rudy. i&apos;m a young adult entering my 20&apos;s
//               with a burning desire to build cool sh!t. i spend my time making innovative
//               solutions that bring value into the lives of their users.
//             </p>
//           </Reveal>
//           <Reveal>
//             <p className={styles.aboutText}>
//               outside of development and tech, my interests lie in rock climbing, hip-hop,
//               and working out. you&apos;ll often find me listening to the latest {" "}
//               <a target="_blank" 
//                 href="https://spotify.link/LpGiJgTTMBb"
//               >
//                 hip-hop
//               </a>{" "}
//               songs or filming a{" "} 
//               <a
//               target="_blank"
//               href="https://www.youtube.com/channel/UCG-cKd4nkUg4U-UKeIbt1iw"
//               >
//                 youtube
//               </a>{" "}
//               video about my life as a university student.
//             </p>
//           </Reveal>
//           <Reveal>
//             <div>
//               <p className={styles.aboutText} style={{ fontWeight: "bold" }}>
//                 now:
//               </p>
//               <p className={styles.aboutText}>
//                 i just finished my 3rd year at the university of toronto, where i&apos;m studying computer science (with a focus in ai), math, and stats.
//               </p>
//               <p className={styles.aboutText}>
//                 a machine learning / artificial intelligence researcher at {" "}
//                 <a
//                 target="_blank"
//                 href="https://csslab.cs.toronto.edu/"
//                 >
//                   the computational social sciences lab
//                 </a> at the university of toronto (uoft) (working under Prof. Ashton Anderson).
//               </p>
//               <p className={styles.aboutText}>
//                 a software engineering intern at {" "}
//                 <a
//                 target="_blank"
//                 href="https://www.intactfc.com/"
//                 >
//                   intact financial corporation
//                 </a>
//               </p>
              
//               {/* <p className={styles.aboutText}>
//                 a cloud developer on the open source team, infrastructure at {" "}
//                 <a
//                 target="_blank"
//                 href="https://utmist.gitlab.io/"
//                 >
//                   utmist
//                 </a>, the university of toronto machine intelligence student team.
//               </p> */}
//               <p className={styles.aboutText}>
//                 trying to understand what defines a community and how to develop products that redefine user experiences
//               </p>
//               <p className={styles.aboutText} style={{ fontWeight: "bold" }}>
//                 previously:
//               </p>
//               <p className={styles.aboutText}>
//                 an ai/nlp engineer at the {" "}
//                 <a
//                 target="_blank"
//                 href="https://urbandatacentre.com/"
//                 >
//                   urban data center
//                 </a> at the university of toronto (uoft).
//               </p>
//               <p className={styles.aboutText}>
//                 an ML developer at {" "}
//                 <a
//                 target="_blank"
//                 href="https://utmist.gitlab.io/"
//                 >
//                   utmist
//                 </a>, the university of toronto machine intelligence student team, working on the re-implementation and expansion
//                 of the paper titled “Colorful Image Colorization” authored by Richard Zhang et al. to develop an automated 
//                 colorization model for historical black and white images.
//               </p>
//               <p className={styles.aboutText}>
//                 led a team to develop an open source project w/{" "}
//                 <a
//                 target="_blank"
//                 href="https://www.unicef.org/"
//                 >
//                   unicef
//                 </a>{" "} that allows their developers to clone apache superset dashboards across
//                 instances, i.e. across staging and production environments, reducing the time taken
//                 to do so by 93.6%.
//               </p>
//               <p className={styles.aboutText}>
//                 a co-founder and cto of an ed-tech productivity startup within the{" "}
//                 <a
//                 target="_blank"
//                 href="https://hatchery.engineering.utoronto.ca/nest-info-page/"
//                 >
//                   uoft hatchery
//                 </a>&apos;s nest incubation program.
//               </p>
//               <p className={styles.aboutText}>
//                 a full stack developer and a web development executive on {" "}
//                 <a
//                   target="_blank"
//                   href="https://hackthe6ix.com"
//                 >
//                   hack the 6ix
//                 </a>&apos;s organizing team.
//               </p>
//               <p className={styles.aboutText}>
//                 wrote some test automation code as a swe intern at{" "}
//                 <a href="https://enrichai.com" target="_blank">
//                   enrichAI
//                 </a>
//                 .
//               </p>
//               <p className={styles.aboutText}>
//                 did {" "}
//                 <a
//                 target="_blank"
//                 href="https://link.springer.com/article/10.1007/s11277-020-07301-6"
//                 >research</a> {" "}
//                 on using particle swarm optimation to perform feature selection
//                 for classification models.
//               </p>
//             </div>
//           </Reveal>
//           <Reveal>
//             <div className={styles.links}>
//               <div className={styles.linksText}>
//                 <span>continue the conversation:</span>
//                 <AiOutlineArrowRight />
//               </div>
//               <MyLinks />
//             </div>
//           </Reveal>
//         </div>
//         <Stats />
//       </div>
//     </section>
//   );
// };
