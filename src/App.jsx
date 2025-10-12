import "./index.css"
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import SignUp from "./pages/SignUp.jsx";
import Header from "./components/Header.jsx"
import WomensFashion from "./pages/WomensFashion.jsx";
import MensFashion from "./pages/MensFashion.jsx";
import Electronics from "./pages/Electronics.jsx";
import HomeLifeStyle from "./pages/HomeLifeStyle.jsx";
import Medicine from "./pages/Medicine.jsx";
import BabysToys from "./pages/BabysToys.jsx";
import GroceriesPets from "./pages/GroceriesPets.jsx";
import HealthBeauty from "./pages/HealthBeauty.jsx";
import Account from "./pages/Account.jsx";
import LogIn from "./pages/LogIn.jsx";
import Cart from "./pages/Cart.jsx";
import WishList from "./pages/WishList.jsx";
import Shop from "./pages/Shop.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import FAQ from "./pages/FAQ.jsx";
import MyProfile from "./pages/MyProfile.jsx";
import AddressBook from "./pages/AddressBook.jsx";
import MyPaymentOptions from "./pages/MyPaymentOptions.jsx";
import Footer from "./components/Footer.jsx"
function App() {
  

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/womensfashion" element={<WomensFashion/>}/>
        <Route path="/mensfashion" element={<MensFashion/>}/>
        <Route path="/electronics" element={<Electronics/>}/>
        <Route path="/homelifestyle" element={<HomeLifeStyle/>}/>
        <Route path="/medicine" element={<Medicine/>}/>
        <Route path="/babystoys" element={<BabysToys/>}/>
        <Route path="/groceriespets" element={<GroceriesPets/>}/>
        <Route path="/healthbeauty" element={<HealthBeauty/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/wishlist" element={<WishList/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/terms" element={<Terms/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/myprofile" element={<MyProfile/>}/>
        <Route path="/addressbook" element={<AddressBook/>}/>
        <Route path="/mypaymentoptions" element={<MyPaymentOptions/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
