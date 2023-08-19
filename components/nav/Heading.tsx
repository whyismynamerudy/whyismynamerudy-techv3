import { OutlineButton } from "../buttons/OutlineButton";
import { MyLinks } from "./components/MyLinks";
import styles from "./heading.module.scss";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <MyLinks />
      <OutlineButton
        onClick={() => window.open("/Rudraksh_Monga_Resume_Aug_2023_V3.pdf")}
      >
        my resume
      </OutlineButton>
    </header>
  );
};
