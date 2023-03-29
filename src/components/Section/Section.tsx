import { Emoji } from "../Emoji";
import { PropsWithChildren } from "react";
import styles from "./Section.module.css";

type SectionProps = PropsWithChildren<{
  icon: string;
  title: string;
}>;

export function Section({ icon, title, children }: SectionProps) {
  return (
    <section className={styles.container}>
      <Emoji size="medium" label={title} className={styles.icon}>
        {icon}
      </Emoji>
      {children}
    </section>
  );
}
