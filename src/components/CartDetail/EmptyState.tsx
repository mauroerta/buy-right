import Link from "next/link";
import styles from "./CartDetail.module.css";

export function EmptyState() {
  return (
    <section className={styles.empty}>
      <h2>No item in the cart</h2>
      <Link href="/">Browse our products</Link>
    </section>
  );
}
