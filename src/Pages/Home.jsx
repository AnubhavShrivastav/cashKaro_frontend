import Header from "../Component/Header"
import Footer from "../Component/Footer";
import BannerSlider  from "../Component/BannerSlider";
import ProductSlider from "../Component/ProductSlider";
import FlashDeal from "../Component/FlashDeal";
import Ajio from "../Component/Ajio";
import Flipcart from "../Component/Flipcart";
import Amazon from "../Component/Amazon";
import Myntra from "../Component/Myntra";
import MCaffeine from "../Component/MCaffeine";



function HomePage() {
  return (
    <>
      <Header />
      <BannerSlider />
      <ProductSlider />
      <FlashDeal />
      <Ajio />
      <Flipcart />
      <Amazon />
      <Myntra />
      <MCaffeine />
      <Footer />
    </>
  );
}

export default HomePage;
