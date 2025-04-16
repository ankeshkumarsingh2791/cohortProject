import { useState } from "react";
import NavBar from "./components/NavBar";
import HomeHero from "./components/HomeHero";
import Button from "./components/utils/Button";

function App() {
  return (
    <div className="w-full h-screen relative">
    {/* Make sure NavBar is layered above everything */}
    <div className="relative z-10">
      <NavBar />
    </div>

    {/* Video or background content */}
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <Button />
    </div>
  </div>
  );
}

export default App;
