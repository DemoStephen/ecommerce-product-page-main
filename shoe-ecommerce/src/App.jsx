import CoreImportance from "./components/CoreImportance";
import FeaturedProduct from "./components/FeaturedProduct";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import SpecialOffer from "./components/SpecialOffer";
import SpiceUp from "./components/SpiceUp";
import TrendingNow from "./components/TrendingNow";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <TrendingNow />
      <SpiceUp />
      <FeaturedProduct />
      <hr className="my-24 border w-[90%] ml-[5%] md:block hidden" />
      <CoreImportance />
      <SpecialOffer />
      <Footer />
    </>
  );
}

export default App;
