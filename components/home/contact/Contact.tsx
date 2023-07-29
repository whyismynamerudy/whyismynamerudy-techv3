import { Reveal } from "@/components/utils/Reveal";
import Link from "next/link";
import { AiFillMail } from "react-icons/ai";
import styles from "./contact.module.scss";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            shoot me an email if you want to connect! you can also find me on{" "}
            <Link
              href="https://www.linkedin.com/in/rudraksh-monga/"
              target="_blank"
              rel="nofollow"
            >
              linkedin
            </Link>{" "}
            if that&apos;s more your speed.
          </p>
        </Reveal>
        <Reveal width="100%">
          <Link href="mailto:rudraksh.monga@mail.utoronto.ca">
            <div className={styles.contactEmail}>
              <AiFillMail size="2.4rem" />
              <span>rudraksh.monga@mail.utoronto.ca</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
