import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import SignInSignUpPage from "./pages/SignInSignUpPage";
import HelpPage from "./pages/HelpPage";
import Article from "./components/HelpArticles/Article";
import ContactPage from "./pages/ContactPage";
import BrowsePage from "./pages/BrowsePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/products/:category" element={<BrowsePage />} />
          <Route path="/products/:category/:product" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/sign" element={<SignInSignUpPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/help/:helpArticle" element={<Article />} />
            {/* <Route path="/help/:list" element={<HelpPage />}/>
            <Route path="/help/list/:articleId" element={<HelpPage />}/> */}
          {/* </Route> */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
