import Header from "../Component/Header"
import Footer from "../Component/Footer";
import BannerSlider from "../Component/BannerSlider";
import CategorySlider from "../Component/CategorySlider";
import FlashDeal from "../Component/FlashDeal";
import { Brands } from "../Component/Brands"


function HomePage() {
  return (
    <>
      <Header />
      <BannerSlider />
      <CategorySlider />
      <FlashDeal />
      <Brands />
      <Footer />
    </>
  );
}

export default HomePage;
