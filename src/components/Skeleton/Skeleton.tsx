import clsx from "clsx";
import { PropsWithChildren } from "react";
import styles from "./Skeleton.module.css";

type SkeletonProps = PropsWithChildren<{
  className?: string;
}>;

export function Skeleton({ className, children }: SkeletonProps) {
  return (
    <div role="progressbar" className={clsx(styles.container, className)}>
      {children}
    </div>
  );
}
