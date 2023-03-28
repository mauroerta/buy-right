import { Emoji } from "@/components/Emoji";
import { ProductPrice } from "@/components/ProductPrice";
import { ProductDetail } from "@/components/ProductDetail";
import { getProduct } from "@/queries/getProduct";
import styles from "./page.module.css";

type ProductDetailProps = {
  params: { slug: string };
};

export default async function Page({ params }: ProductDetailProps) {
  const product = await getProduct(params.slug);

  return (
    <section className={styles.container}>
      <Emoji size="medium" label={product.title} className={styles.icon}>
        {product.icon}
      </Emoji>
      <ProductPrice price={product.price} className={styles.price} />
      <ProductDetail {...product} />
    </section>
  );
}
