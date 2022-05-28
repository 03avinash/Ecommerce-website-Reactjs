import "../css/style.css";
import "../css/mediaquery.css";
import Header from "../Components/Header/Header";
import MainMenu from "../Components/Main-Menu/MainMenu";
import Banner from "../Components/Banner/Banner";
import Card from "../Components/Card_Section/Card";
import Offers from "../Components/Offers/Offers";
import Footer from "../Components/Footer/FooterTop";
import FooterTop from "../Components/Footer/FooterTop";
import FooterBottom from "../Components/Footer/FooterBottom";

const Home = () => {
  return (
    <>
      <Header />
      <MainMenu />
      <Banner />
      <Card />
      <Offers />
      <Card />
      <FooterTop />
      <FooterBottom />
    </>
  );
};
export default Home;
