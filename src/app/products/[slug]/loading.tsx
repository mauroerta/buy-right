import { Skeleton } from "@/components/Skeleton";
import clsx from "clsx";
import styles from "./page.module.css";

export default function Loading() {
  return (
    <Skeleton className={styles.skeleton}>
      <Skeleton className={clsx(styles.icon, styles.iconSkeleton)} />
      <Skeleton className={clsx(styles.price, styles.priceSkeleton)} />
    </Skeleton>
  );
}
