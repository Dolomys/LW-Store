import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Menu } from "./components/menu/Menu";
import { Topbar } from "./components/topbar/Topbar";
import { Home } from "./pages/home/Home";
import { Store } from "./pages/store/Store";


function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Store />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
