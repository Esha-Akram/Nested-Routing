import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { About } from "../Pages/About/About";
import { Contact } from "../Pages/Contact/Contact";
import { Blog } from "../Pages/Blog/Blog";
import { Perfume } from '../Pages/Products/Perfume';
import { Makeup } from '../Pages/Products/Makeup';
import { Shoes } from '../Pages/Products/Shoes';
import { Outfit } from '../Pages/Products/Outfits';
import { Jewellery } from '../Pages/Products/Jewellery';
import { Login } from '../Pages/Login/Login';
import { Product } from "../Pages/Products/Product";
import { Finance } from '../Pages/Blog/Finance';
import { Food } from '../Pages/Blog/Food';
import { Lifestyle } from '../Pages/Blog/Lifestyle';
import { Media } from '../Pages/Blog/Media';
import { Photography } from '../Pages/Blog/Photography';
import ThankYou from "../Pages/Contact/Thankyou";
import { Navbar } from "../Components/Navbar/Navbar";

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< Navbar />}>
          <Route index element={< Home />} />
          <Route path="products">
            <Route index element={< Product />} />
            <Route path="jewellery" element={< Jewellery />} />
            <Route path="shoes" element={< Shoes />} />
            <Route path="makeup" element={< Makeup />} />
            <Route path="outfit" element={< Outfit />} />
            <Route path="perfume" element={< Perfume />} />
          </Route>
          <Route path="about" element={< About />} />
          <Route path="contact" element={< Contact />} />
          <Route path="success" element={< ThankYou />} />
          <Route path="blog" >
            <Route index element={< Blog />} />
            <Route path="lifestyle" element={< Lifestyle />} />
            <Route path="food" element={< Food />} />
            <Route path="media" element={< Media />} />
            <Route path="photography" element={< Photography />} />
            <Route path="finance" element={< Finance />} />
          </Route>
          <Route path="login" element={< Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
