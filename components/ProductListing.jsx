import ProductCard from "./ProductCard";

export default function ProductListing({ products }) {
  return (
    <div className="flex flex-wrap my-2 gap-1">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}
