import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import Footer from "./components/home/Footer/Footer";
import FooterBottom from "./components/home/Footer/FooterBottom";
import Header from "./components/home/Header/Header";
import HeaderBottom from "./components/home/Header/HeaderBottom";
import SpecialCase from "./components/SpecialCase/SpecialCase";
import About from "./pages/About/About";
import SignIn from "./pages/Account/SignIn";
import SignUp from "./pages/Account/SignUp";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Journal from "./pages/Journal/Journal";
import Offer from "./pages/Offer/Offer";
import Payment from "./pages/payment/Payment";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";
import { Earing } from "./components/SearchByCatregri/Earing";
import { Pendants } from "./components/SearchByCatregri/Pendants";
import { FingerRing } from "./components/SearchByCatregri/FingerRing";
import { Mangalsutra } from "./components/SearchByCatregri/Mangalsutra";
import { Chains } from "./components/SearchByCatregri/Chains";
import { NosePin } from "./components/SearchByCatregri/NosePin";
import { Necklace } from "./components/SearchByCatregri/Necklace";
import { NecklaceSet } from "./components/SearchByCatregri/NecklaceSet";
import { Bangels } from "./components/SearchByCatregri/Bangels";
import { Brecelets } from "./components/SearchByCatregri/Brecelets";
import { PendatsEaringSet } from "./components/SearchByCatregri/PendatsEaringSet";
import UserList from "./pages/UserCard/UserList";
import { Ring } from "./components/SearchByCatregri/Ring";
import Blog from "./components/Blog/Blog";
import BlogDetail from "./components/Blog/BlogDetail";

const Layout = () => {
  return (
    <div>
      <Header />
      <HeaderBottom />
      <SpecialCase />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <FooterBottom />
    </div>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        {/* ==================== Header Navlink Start here =================== */}
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/journal" element={<Journal />}></Route>
        {/* ==================== Header Navlink End here ===================== */}
        <Route path="/offer" element={<Offer />}></Route>
        <Route path="/product/:_id" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/paymentgateway" element={<Payment />}></Route>
        {/* ==================== Product by catregrie Start ===================== */}
         <Route path="/ring" element={<Ring />}></Route>
         <Route path="/earing" element={<Earing />}></Route>
         <Route path="/pendants" element={<Pendants />}></Route>
         <Route path="/fingerring" element={<FingerRing />}></Route>
         <Route path="/mangalsutra" element={<Mangalsutra />}></Route>
         <Route path="/chains" element={<Chains />}></Route>
         <Route path="/nosepin" element={<NosePin />}></Route>
         <Route path="/necklace" element={<Necklace />}></Route>
         <Route path="/necklaceset" element={<NecklaceSet />}></Route>
         <Route path="/bangles" element={<Bangels />}></Route>
         {/* <Route path="/bangles" element={<Bangels />}></Route> */}
         <Route path="/bracelets" element={<Brecelets />}></Route>
         <Route path="/pendantsearringset" element={<PendatsEaringSet />}></Route>
         <Route path="/userlist" element={<UserList />}></Route>
         <Route path="/" element={<Blog />}></Route>
         <Route path="/blog/:id" element={<BlogDetail />}></Route>
      </Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
    </Route>
  )
);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
