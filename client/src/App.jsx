import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './app.scss'
import { Footer } from "./components/footer/Footer";
import { Menu } from "./components/menu/Menu";
import { Topbar } from "./components/topbar/Topbar";
import { Cart } from "./pages/cart/Cart";
import { Home } from "./pages/home/Home";
import { NotFound } from "./pages/notFound/NotFound";
import { SingleProduct } from "./pages/singleProduct/SingleProduct";
import { Store } from "./pages/store/Store";


function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <BrowserRouter>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Store />} />
          <Route path="/products/:id" element={<Store />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
