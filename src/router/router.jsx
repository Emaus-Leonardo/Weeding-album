import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../assets/components/pages/Home.jsx"
import PhotoAlbum from "../assets/components/pages/PhotoAlbum.jsx"
import About from "../assets/components/pages/About.jsx"
import Footer from "../assets/components/layout/Footer.jsx";
import Header from "../assets/components/layout/Header.jsx";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photo-album" element={<PhotoAlbum />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RoutesApp;


