import Link from "next/link";
import { Emoji } from "../Emoji";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <nav className={styles.container}>
      <div />
      <div>
        <Link href="/" className={styles.link}>
          <h1>buy-right</h1>
        </Link>
      </div>
      <div className={styles.links}>
        <Link href="/cart" className={styles.link}>
          <Emoji label="cart">🛒</Emoji>
        </Link>
        <Link href="/profile" className={styles.link}>
          <Emoji label="profile">😎</Emoji>
        </Link>
      </div>
    </nav>
  );
}
