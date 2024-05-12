import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../assets/components/pages/Home.jsx"
import Footer from "../components/layout/footer.jsx";
import Header from "../assets/components/layout/Header.jsx";


const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RoutesApp;
