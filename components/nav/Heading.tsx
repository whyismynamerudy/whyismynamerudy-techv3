import { OutlineButton } from "../buttons/OutlineButton";
import { MyLinks } from "./components/MyLinks";
import styles from "./heading.module.scss";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <MyLinks />
      <OutlineButton
        onClick={() => window.open("/Rudraksh_Monga_Resume_Jan_24 (2).pdf")}
      >
        my resume
      </OutlineButton>
    </header>
  );
};
