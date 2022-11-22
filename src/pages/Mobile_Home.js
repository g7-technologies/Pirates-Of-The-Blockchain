import React from "react";
import Wrapper from "../Containers/Home.styled";
import Navbar from "../components/Navbar/Navbar";
import CarouselBanner from "../components/CarouselBanner/CarouselBannerMbl";
import Ourstory from "../components/Ourstory/Ourstory";
import Roadmap from "../components/Roadmap/Roadmap";
import Team from "../components/Team/Team";
import Faqs from "../components/Faqs/Faqs";
import Footer from "../components/Footer/Footer";

function Mobile_Home() {
  return (
    <Wrapper>
      <Navbar />
      <CarouselBanner />
      <Ourstory />
      <Roadmap />
      <Team />
      <Faqs />
      <Footer />
    </Wrapper>
  );
}

export default Mobile_Home;
