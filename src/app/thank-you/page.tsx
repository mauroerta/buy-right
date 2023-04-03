import { ButtonLink } from "@/components/Button";
import { Section } from "@/components/Section";
import styles from "./page.module.css";

export default function ThankYouPage() {
  return (
    <Section icon="🙏" title="ThankYou">
      <div className={styles.container}>
        <h1>Thank You</h1>
        <p>Your order has been successfully placed.</p>
        <ButtonLink href="/" className={styles.link}>
          Got It
        </ButtonLink>
      </div>
    </Section>
  );
}
