import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Skeleton from "@mui/material/Skeleton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { NUTRI_SCORES } from "../utils/nutri-score";

import {
  LoaderContainer,
  ProductDetailContainer,
} from "./styles/product-detail";
import { toast } from "react-toastify";

const GET_PRODUCT = gql`
  query GetProducts($id: ID!) {
    product(where: { id: $id }) {
      name
      image
      availableIn
      carbohydrates
      ecologicalAgriculture
      energeticValue
      fats
      ingredients
      nutriScore
    }
  }
`;

const ProductDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PRODUCT, { variables: { id } });

  useEffect(() => {
    if (error) {
      toast.error("Error al cargar el producto");
    }
  }, [error]);

  if (loading || error)
    return (
      <LoaderContainer>
        <Skeleton variant="rectangular" width="100%" height="100%" />
      </LoaderContainer>
    );
  if (error) return <p>Error : {}</p>;

  return (
    <ProductDetailContainer>
      <div>
        <div className="product-title">
          <div className="product-title__container">
            <a href="/products">
              <ArrowBackIcon fontSize="medium" />
            </a>
          </div>
        </div>
        <h1>{data.product.name}</h1>
        <figure className="image-container__nutri-score">
          <img
            src={NUTRI_SCORES[data.product.nutriScore]}
            alt="nutri score"
            width="100%"
            height="100%"
          />
        </figure>
        <figure className="image-container">
          <img
            src={data.product.image}
            alt={data.product.name}
            width="100%"
            height="100%"
          />
        </figure>
      </div>
      <div className="product-info">
        <ul className="product-details">
          <li>
            <p>Disponible en :</p>
            <div className="product-info__circle">
              <strong>{data.product.availableIn}</strong>
            </div>
          </li>
          <li>
            <p>Valor energético :</p>
            <div className="product-info__circle">
              <strong>{data.product.energeticValue}</strong>
            </div>
          </li>
          <li>
            <p>Grasas :</p>
            <div className="product-info__circle">
              <strong>{data.product.fats}</strong>
            </div>
          </li>
          <li>
            <p>Hidratos de carbono :</p>
            <div className="product-info__circle">
              <strong>{data.product.carbohydrates}</strong>
            </div>
          </li>
        </ul>
        <div style={{ height: "60%" }}>
          <p className="accordion-title">
            <strong>Ingredientes :</strong>
          </p>
          <p className="product-ingredients">{data.product.ingredients}</p>
          {data.product.ecologicalAgriculture && (
            <p className="text-color__300 text-align__center pb-3 pt-3 m-0">
              <strong>* Procedente de agricultura ecológica</strong>
            </p>
          )}
        </div>
      </div>
    </ProductDetailContainer>
  );
};

export { ProductDetail };
