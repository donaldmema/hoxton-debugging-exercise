import { Product as ProductType } from "../../utils/types";
import LoadingAnimation from "../LoadingAnimation";
import Product from "../Product";
import "./style.css";

type Props = {
  products: ProductType[] | null;
};

const ProductList = ({ products }: Props) => {
  if (!products) return <LoadingAnimation />;

  return (
    <div>
      {products.products.map((product:ProductType) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
