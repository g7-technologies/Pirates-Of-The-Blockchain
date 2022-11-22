import React, { useState } from "react";
import Wrapper from "./Faqs.styled";
import Container from "../Container/Container";

function Faqs() {
  const data = [
    {
      id: "01",
      q: "Q1",
      title: "WHAT IS PIRATES OF THE BLOCKCHAIN?",
      text: "Pirates of the Blockchain (POTB) is a collection of 10,000 Non Fungible Tokens. Owning one (or more) grants the owner exclusive rights into one of the best up and coming communities!",
    },
    {
      id: "02",
      q: "Q2",
      title: "HOW MUCH IS IT TO MINT MY POTB?",
      text: "the price to mint your official POTB is 0.08 ETH.",
    },
    {
      id: "03",
      q: "Q3",
      title: "WHEN WILL MINTING BE AVAILABLE?",
      text: "Minting will be available at launch date TBD",
    },
    {
      id: "04",
      q: "Q4",
      title: "HOW MANY CAN WE MINT PER WALLET?",
      text: "You will be able to mint 10 per wallet.",
    },
    {
      id: "05",
      q: "Q5",
      title: "WHAT ARE THE ROYALITES ON OPEN SEA?",
      text: "Royalties are paid to both open sea (2.5%) and POTB (6.5%) when the seller sells a POTB nft.",
    },
    {
      id: "06",
      q: "Q6",
      title: "HOW CAN I USE MY NFT?",
      text: "PFP on social media. Eventually, your personna in the Metaverse. And also will serve as your ticket to our in person events and real world treasure hunts!",
    },
    {
      id: "07",
      q: "Q7",
      title: "WHO IS MIKE AND MIKE?",
      text: "A couple of regular guys that wanted to do something special for the people. So we created this project as a means to give back to the community.",
    },
  ];
  const [rectangle, setRectangle] = useState({
    titleb: "WHAT IS PIRATES OF THE BLOCKCHAIN?",
    textb:
      "Pirates of the Blockchain (POTB) is a collection of 10,000 Non Fungible Tokens. Owning one (or more) grants the owner exclusive rights into one of the best up and coming communities!",
  });
  // mouse enter get data set
  function handleOver(e) {
    let id = e.target.id;
    data.forEach((item) => {
      if (item.id === id) {
        setRectangle({ ...rectangle, titleb: item.title, textb: item.text });
      }
    });
  }
  return (
    <Wrapper>
      <Container dflex={true} center>
        <div className="title" id="faq">
          <h2>Frequently Asked Questions</h2>
        </div>
      </Container>
      <Container dflex={true} between={true}>
        <div className="container">
          <div className="firstrow">
            {data.map((item, index) => (
              <div
                className="circle"
                id={item.id}
                key={index}
                onMouseEnter={handleOver}
                onClick={handleOver}
              >
                {item.q}
              </div>
            ))}
          </div>
          <div className="second-row">
            <div className="rectangle">
              <h3>{rectangle.titleb}</h3>
              <p>{rectangle.textb}</p>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}

export default Faqs;
