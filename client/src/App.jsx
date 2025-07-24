
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Layout from "./components/layout";
import ContactUsPage from "./pages/ContactUsPage";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="contact" element={<ContactUsPage />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<AboutUs />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
