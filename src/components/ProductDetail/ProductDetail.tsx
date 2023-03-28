import { Product } from "@/types/Product";
import { Emoji } from "../Emoji";
import { RelatedProducts } from "../RelatedProducts";
import styles from "./ProductDetail.module.css";

export function ProductDetail({ id, title, description, icon }: Product) {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={styles.gallery}>
        <Emoji size="large" label={title} className={styles.picture}>
          {icon}
        </Emoji>
      </div>
      <section>
        <h3>Related products</h3>
        {/* @ts-expect-error Async Server Component */}
        <RelatedProducts id={id} />
      </section>
    </div>
  );
}
