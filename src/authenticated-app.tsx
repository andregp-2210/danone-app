import { Routes, Route } from "react-router-dom";
import { Products } from "./screens/products";
import { ProductDetail } from "./screens/product-detail";
import { UserProfile } from "./screens/user-profile";

const AuthenticatedApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/user-profile" element={<UserProfile />} />
    </Routes>
  );
};

export { AuthenticatedApp };
