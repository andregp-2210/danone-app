import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { Products } from "./screens/products";
import { ProductDetail } from "./screens/product-detail";
import { UserProfile } from "./screens/user-profile";

type Props = {
  title: String;
  children: React.ReactNode;
};

const HeaderTitle: React.FC<Props> = ({ title, children }) => {
  useEffect(() => {
    document.title = title + " - Danone";
  }, [title]);

  return <div>{children}</div>;
};

const AuthenticatedApp = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HeaderTitle title="Productos">
            <Products />
          </HeaderTitle>
        }
      />
      <Route
        path="/products"
        element={
          <HeaderTitle title="Productos">
            <Products />
          </HeaderTitle>
        }
      />
      <Route
        path="/product/:id"
        element={
          <HeaderTitle title="Producto">
            <ProductDetail />
          </HeaderTitle>
        }
      />
      <Route
        path="/user-profile"
        element={
          <HeaderTitle title="Perfil de usuario">
            <UserProfile />
          </HeaderTitle>
        }
      />
    </Routes>
  );
};

export { AuthenticatedApp };
