import { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

import { ProductsList } from "../containers/products-list";
import { ProductLoaderContainer, ProductsContainer } from "./styles/products";
import { toast } from "react-toastify";

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      image
      ecologicalAgriculture
    }
  }
`;

const Products = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const [products, setProducts] = useState([]);

  const searchProducts = ({
    target: { value },
  }: {
    target: { value: String };
  }) => {
    if (value.length === 0) {
      setProducts(data.products);
      return;
    }
    console.log(value);
    console.log(value.length > 2);
    if (value.length > 2) {
      setProducts(
        data.products.filter(({ name }: { name: String }) =>
          name.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };
  useEffect(() => {
    if (error) {
      toast.error("Error al cargar los productos.");
    }
  }, [error]);
  useEffect(() => {
    if (data?.products) {
      setProducts(data.products);
    }
  }, [data]);
  useEffect(() => {
    console.log({ products });
  }, [products]);

  if (loading || error)
    return (
      <ProductLoaderContainer>
        <div>
          <Skeleton variant="rectangular" width={350} height={300} />
          <Skeleton variant="rectangular" width={350} height={300} />
          <Skeleton variant="rectangular" width={350} height={300} />
          <Skeleton variant="rectangular" width={350} height={300} />
          <Skeleton variant="rectangular" width={350} height={300} />
          <Skeleton variant="rectangular" width={350} height={300} />
        </div>
      </ProductLoaderContainer>
    );

  return (
    <ProductsContainer>
      <Box
        sx={{ display: "flex", alignItems: "flex-end" }}
        className="search-input__container"
      >
        <TextField
          className="search-input__input"
          label="Buscar productos..."
          variant="standard"
          placeholder="Ej. eco natural"
          onChange={searchProducts}
        />
        <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
      </Box>
      {products.length === 0 ? (
        <Alert severity="info">No se encontraron productos.</Alert>
      ) : (
        <ProductsList products={products} />
      )}
    </ProductsContainer>
  );
};

export { Products };
