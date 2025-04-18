
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Layout from "./components/layout";
import ContactUsPage from "./pages/ContactUsPage";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<HomePage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/services" element={<Services />} />

      </Routes>
    </>
  //   <div className="w-full h-full  relative">
  //   {/* Make sure NavBar is layered above everything */}
  //   <div className="relative z-10">
  //     <NavBar />
  //   </div>

  //   {/* Video or background content */}
  //   <div className="absolute flex flex-col gap-4 top-0 left-0 w-full z-0">
  //     <Button />
  //     <div className="w-full px-6 sm:px-10 mt-10 h-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
  //         <Card />
  //         <Card />
  //         <Card />
  //         <Card />
  //     </div>
  //     <div className="w-full h-full flex gap-6 flex-col px-6 sm:px-10 mt-10  ">
  //       <AboutCard className={`flex flex-col md:flex-row` } />
  //       <AboutCard className={`flex flex-col md:flex-row-reverse` } />

  //     </div>
  //     <Testimonial />
  //   <Footer />
  //   </div>

    

  // </div>
  );
}

export default App;
