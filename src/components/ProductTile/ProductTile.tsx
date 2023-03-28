import Link from "next/link";
import { Emoji } from "../Emoji";
import { Skeleton } from "../Skeleton";
import { Product } from "@/types/Product";
import styles from "./ProductTile.module.css";

export function ProductTile({ title, slug, icon }: Product) {
  return (
    <Link href={`/products/${slug}`} className={styles.container}>
      <Emoji label={title} size="large">
        {icon}
      </Emoji>
      <p className={styles.title}>{title}</p>
    </Link>
  );
}

ProductTile.Skeleton = function ProductTileSkeleton() {
  return <Skeleton className={styles.skeleton} />;
};
