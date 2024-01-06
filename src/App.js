import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Aboutus from "./pages/aboutUs/Aboutus";
import Contact from "./pages/contactUs/Contact";
import Shop from "./pages/shop/Shop";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import Product from "./pages/productDetailed/Product";
import Login from "./pages/login/Login";
import Cart from "./pages/cart/Cart";

// "homepage": " https://arjunn2313.github.io/Cantari-Corp",
// "predeploy":"npm run build",
// "deploy":"gh-pages -d build",

function App() {
  return (
     <>
     <div>
     <NavBar/>
     </div>
     <Routes>
      <Route exact path="/" element={<Home/>}></Route>
   <Route exact path="/CantariCorp" element={<Home/>}></Route>
      <Route exact path="/aboutus" element={<Aboutus/>}></Route>
      <Route exact path="/contactus" element={<Contact/>}></Route>
      <Route exact path="/shop" element={<Shop/>}></Route>
      <Route exact path="product/:id" element={<Product/>}></Route>
      <Route exact path="/login" element={<Login/>}></Route>
      <Route exact path="/cart" element={<Cart/>}></Route>
     </Routes>
     <Footer/>
     </>
  );
}

export default App;
