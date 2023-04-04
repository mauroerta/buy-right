import { ProductPrice } from "@/components/ProductPrice";
import { ProductDetail } from "@/components/ProductDetail";
import { getProductBySlug } from "@/services/getProduct";
import styles from "./page.module.css";
import { Section } from "@/components/Section";

type ProductDetailProps = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: ProductDetailProps) {
  const product = await getProductBySlug(params.slug);

  return (
    <Section icon={product.icon} title={product.title}>
      <ProductPrice product={product} className={styles.price} />
      <ProductDetail {...product} />
    </Section>
  );
}
