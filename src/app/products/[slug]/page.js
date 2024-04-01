const { default: Guard } = require("@/components/layout/Gaurd");
import ProductsDetails from "@/components/products/ProductsDetails";
import { useSearchParams } from "next/navigation";

const ProductsDetailsPage = ({ params }) => {
  const prodId = params.slug;

  return (
    <Guard dynamicId={prodId}>
      <ProductsDetails prodId={prodId} />
    </Guard>
  );
};
export default ProductsDetailsPage;
