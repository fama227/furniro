import Hero from "../components/Hero";
import BrowseRange from "../components/BrowseRange";
import Products from "../components/Products";
import InspirationSection from "../components/InspirationSection";
import FuniroHeader from "../components/FuniroHeader";
import FuniroImageGrid from "../components/FuniroImageGrid";
import FuniroFooter from "../components/FuniroFooter";

export default function Home({ addToCart }) {
  return (
    <>
      <Hero />
      <BrowseRange />
      <Products addToCart={addToCart} />  
      <InspirationSection />
      <div className="funiro-app">
        <FuniroHeader />
        <FuniroImageGrid />
      </div>
      <FuniroFooter />
    </>
  );
}