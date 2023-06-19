import { ProductCard } from "../components/product-card";

import { TProductCard } from "../utils/models/product-card";

import { ProductListContainer } from "./styles/products-list";

type Props = {
  products: TProductCard[];
};

const ProductsList: React.FC<Props> = ({ products }) => {
  return (
    <ProductListContainer>
      {products.map(({ name, id, image, ecologicalAgriculture }) => (
        <ProductCard
          key={id}
          id={id}
          name={name}
          image={image}
          ecologicalAgriculture={ecologicalAgriculture}
        />
      ))}
    </ProductListContainer>
  );
};

export { ProductsList };
