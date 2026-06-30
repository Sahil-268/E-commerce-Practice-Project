import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import WishlistDrawer from "./components/WishlistPopup/WishlistPopup";
import SearchResults from "./pages/SearchResults/SearchResults";

const App = () => {
  return (
    <div>
      <WishlistDrawer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </div>
  );
};

export default App;
