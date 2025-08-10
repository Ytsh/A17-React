import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";

export function App1(){

    return (
    <>
    {/* here we can add header or any other component that
    we want to display for every route */}
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/product/:id" element={<ProductDetailPage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
        </Routes>  
    {/* here we can add footer or any other component that
    we want to display for every route */}
    </>
    );
}