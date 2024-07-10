import "./App.css";
import "./styles/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MainLayout from "./components/MainLayout/MainLayout";
import AboutUs from "./pages/AboutUs/AboutUs";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/ContactUs/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Parent route with MainLayout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
