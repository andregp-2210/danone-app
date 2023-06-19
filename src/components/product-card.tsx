import { useNavigate } from "react-router-dom";

import { TProductCard } from "../utils/models/product-card";

import { ProductCardContainer } from "./styles/product-card";

const ProductCard: React.FC<TProductCard> = ({
  id,
  name,
  image,
  ecologicalAgriculture,
}) => {
  const navigate = useNavigate();

  const showDetails = () => {
    navigate(`/product/${id}`);
  };

  return (
    <ProductCardContainer key={id} onClick={showDetails}>
      <figure className="image-container">
        <img src={image} alt={name} width="100%" height="100%" />
      </figure>
      <h4>{name}</h4>
      {ecologicalAgriculture && (
        <div className="ecological-agriculture-item">
          <div className="ribbon">
            <span>Procedente de agricultura ecológica</span>
          </div>
        </div>
      )}
    </ProductCardContainer>
  );
};

export { ProductCard };
