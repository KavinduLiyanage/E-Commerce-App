import { Route } from "react-router-dom";
import { Routes } from "react-router-dom/dist";
import "./App.css";
import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";
import DetailsPage from "./pages/DetailsPage";
import Navbar from "./components/NavBar";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<AllProducts />} />
                <Route path="/details/:id" element={<DetailsPage />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    );
}

export default App;
