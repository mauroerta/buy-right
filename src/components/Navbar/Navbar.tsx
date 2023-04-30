import Link from "next/link";
import { Emoji } from "../Emoji";
import { CartLink } from "./CartLink";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <nav className={styles.container}>
      <div />
      <div>
        <Link href="/" className={styles.link}>
          <h1 data-testid="navbar-title">buy-right</h1>
        </Link>
      </div>
      <div className={styles.links}>
        <CartLink />
        <Link href="/profile" className={styles.link}>
          <Emoji label="profile">😎</Emoji>
        </Link>
      </div>
    </nav>
  );
}
