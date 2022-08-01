import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
const App = () => {
  const user = false;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {user ? (
          <Navigate to="/" replace={true} />
        ) : (
          <Route path="/login" element={<Login />} />
        )}
        <Route path="/register" element={<Register />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
