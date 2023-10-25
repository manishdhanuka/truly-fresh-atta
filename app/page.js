import ProductListing from "@components/ProductListing";
import { products } from "@constants/Products";

export default function Home() {
  return (
    <>
      <ProductListing products={products} />
    </>
  );
}
