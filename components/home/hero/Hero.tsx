import { StandardButton } from "@components/buttons/StandardButton";
import { Reveal } from "@components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
import anime from "animejs";

export const Hero = () => {

  // const shake = anime({
  //   targets: '#secure',
  //   easing: 'easeInOutSine',
  //   duration: 550,
  //   translateX: [
  //     {
  //       value: 16 * -1,
  //     },
  //     {
  //       value: 16,
  //     },
  //     {
  //       value: 16/-2,
  //     },
  //     {
  //       value: 16/2,
  //     },
  //     {
  //       value: 0
  //     }
  //   ],
  // });

  // const handleSecureClick = (e: any) => {
  //   shake.restart();
  // }

  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            hi, i&apos;m rudy<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            welcome to my <span>little corner of the world wide web</span>
          </h2>
        </Reveal>
        <Reveal>
          <div className={styles.aboutCopy}>
            <p>
              -&gt; compsci, math, and stats student @ uoft <br /> <br /> 
              -&gt; building <span>impactful</span>, <span>scalable</span>, and <span>secure</span> software <br /> <br /> 
              -&gt; passionate about machine learning, backend development, &emsp; and innovation
              {/* <br />
              -&gt; when i'm not at the computer, i'm usually: <br />
              &emsp; &bull; rock climbing <br />
              &emsp; &bull; listening to the latest{" "}
              <a target="_blank" 
                href="https://spotify.link/LpGiJgTTMBb"
              >
                hip-hop
              </a>{" "}
              songs <br />
              &emsp; &bull; filming{" "} 
              <a
              target="_blank"
              href="https://www.youtube.com/channel/UCG-cKd4nkUg4U-UKeIbt1iw"
              >
                youtube
              </a>{" "}
              videos. */}
              {/* i&apos;m a computer science, mathematics, and statistics student at
              the university of toronto. passionate about entrepreneurship and machine
              learning, you&apos;ll often find me developing POCs and MVPs for solutions 
              to problems my friends face, {" "}
              bangers,{" "}
              or learning the latest ml and ai technologies. */}
            </p>
            <br />
            <p>let&apos;s connect!</p>
          </div>
        </Reveal>
        <Reveal>
          <StandardButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            contact me
          </StandardButton>
        </Reveal>
      </div>
      <DotGrid />
    </section>
  );
};
