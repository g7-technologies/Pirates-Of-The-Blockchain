import React from "react";
import Wrapper from "../Containers/Home.styled";
import Navbar from "../components/Navbar/Navbar";
import CarouselBanner from "../components/CarouselBanner/CarouselBanner";
import Ourstory from "../components/Ourstory/Ourstory";
import Roadmap from "../components/Roadmap/Roadmap";
import Team from "../components/Team/Team";
import Faqs from "../components/Faqs/Faqs";
import Footer from "../components/Footer/Footer";

function Home() {
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

export default Home;
