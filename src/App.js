import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Home/Navbar";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Products from "./Pages/Products/Products";
import Review from "./Pages/Review/Review";
import Footer from "./Pages/Share/Footer";
import Shop from "./Pages/Shop/Shop";
import Signup from "./Pages/SignUp/Signup";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/review" element={<Review />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
