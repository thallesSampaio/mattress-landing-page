import Hero from "./components/Hero";
import Header from "./components/Header";
import Products from "./components/Products";
import Services from "./components/Services";
import Quality from "./components/Quality";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Header></Header>
      <Hero></Hero>
      <Products></Products>
      <Services></Services>
      <Quality></Quality>
      <Footer></Footer>
    </div>
  );
}
