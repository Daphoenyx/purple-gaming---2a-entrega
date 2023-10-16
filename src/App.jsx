import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";
import {Navbar} from "./components/layout/navbar/Navbar";
import {Cart} from "./components/pages/cart/Cart"
import Footer from "./components/layout/footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route element={<Footer />}>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        </Route>
        </Route>
        <Routes path="*" element={<h4>The page you requested does not exist.</h4>}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
