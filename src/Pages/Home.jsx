import Header from "../Component/Header"
import Footer from "../Component/Footer";
import BannerSlider  from "../Component/BannerSlider";
import CategorySlider from "../Component/CategorySlider";
import FlashDeal from "../Component/FlashDeal";
import Ajio from "../Component/Ajio";
import Flipkart from "../Component/Flipkart";
import Amazon from "../Component/Amazon";
import Myntra from "../Component/Myntra";
import MCaffeine from "../Component/MCaffeine";
import Hyphen from "../Component/Hyphen"


function HomePage() {
  return (
    <>
      <Header />
      <BannerSlider />
      <CategorySlider />
      <FlashDeal />
      <Ajio />
      <Flipkart />
      <Amazon />
      <Myntra />
      <MCaffeine /> 
      <Hyphen />
      <Footer />
    </>
  );
}

export default HomePage;
