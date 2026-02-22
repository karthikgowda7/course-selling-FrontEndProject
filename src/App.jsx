import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Hero from "./components/sections/Hero.jsx";
import Products from "./components/sections/Products.jsx";
import Bundles from "./components/sections/Bundles.jsx";
import ForWhom from "./components/sections/ForWhom.jsx";
import Author from "./components/sections/Author.jsx";
import Inside from "./components/sections/Inside.jsx";
import Program from "./components/sections/Program.jsx";
import Reviews from "./components/sections/Reviews.jsx";
import FAQ from "./components/sections/FAQ.jsx";
import Guarantee from "./components/sections/Guarantee.jsx";
import GetStarted from "./components/sections/GetStarted.jsx";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      <Hero />
      <Products />
      <Bundles />
      <ForWhom />
      <Author />
      <Inside />
      <Program />
      <Reviews />
      <FAQ />
      <Guarantee />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App
