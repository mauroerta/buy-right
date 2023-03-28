import clsx from "clsx";
import styles from "./ProductDetail.module.css";

export function Skeleton() {
  return (
    <div
      role="progressbar"
      className={clsx(styles.container, styles.skeleton)}
    />
  );
}
