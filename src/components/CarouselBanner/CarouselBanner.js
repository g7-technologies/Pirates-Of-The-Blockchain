import React, { useEffect, useState, useRef } from "react";
import Wrapper from "./CarouselBanner.styled";
import Container from "../Container/Container";
// import icons
import { Icon } from "@iconify/react";
// swiper slider
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper";
// swiper slider css
// import "swiper/css/bundle";
// import "swiper/css/navigation";

// import images
import Sliderimg from "../../images/storyimg.png";
import Sliderimg2 from "../../images/teamimg.png";
import gif from "../../images/gif.gif";
import bg from "../../images/bg.png";

// import DAPP
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";

function CarouselBanner() {
  const dispatch = useDispatch();
  const [mintingDapp,setmintingDapp]=useState(false);
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click Mint Now to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "0x8Ad2168a708CD31088B3339fD0A269a1Ffe9Af55",
    SCAN_LINK: "https://etherscan.io/address/0x8Ad2168a708CD31088B3339fD0A269a1Ffe9Af55",
    NETWORK: {
      NAME: "Ethereum",
      SYMBOL: "Eth",
      ID: 1,
    },
    NFT_NAME: "Pirates Of The Blockchain",
    SYMBOL: "POTB",
    MAX_SUPPLY: 10000,
    WEI_COST: 80000000000000000,
    DISPLAY_COST: 0.08,
    GAS_LIMIT: 205000,
    MARKETPLACE: "Opeansea",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
    DEEPLINK: "https://metamask.app.link/dapp/potb.io/mint",
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };


  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
    checkBrowser();
  }, [blockchain.account]);
  
  const [ counter, setCounter ] = useState(1)
  function decrementCounter () {
      if(counter <= 1) {
          setCounter(1);
      }else {
          setCounter(counter - 1);
      }
  }

  function checkBrowser(){
    const { userAgent } = navigator;
    let s = userAgent;
    let position = s.search("Chrome/77");
    if(position === -1)
      setmintingDapp(false);
    else
      setmintingDapp(true); 
    if(mintingDapp == false)
    {
      let position = s.search("CriOS/76");
      if(position === -1)
        setmintingDapp(false);
      else
        setmintingDapp(true);
    }
    console.log(mintingDapp)
  }
  
  return (
    <Wrapper>
      
      <div className="row">
        <div className="col-sm-6">
          <center><img src={gif} className="gif_img"/></center>
        </div>
        <div className="col-sm-6 center_property">
          <h1 className="mb-3">MINT YOUR <span>NFT’S</span></h1>
          {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
            <>
              <p className="d-flex justify-content-center mt-3">The sale has ended.</p>
              <p className="d-flex justify-content-center mt-3 mb-4">You can still find {CONFIG.NFT_NAME} on</p>
              <div className="mintBtn">
                <a target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                    {CONFIG.MARKETPLACE}
                  </a>
              </div>
            </>
          ) : (
            <div>
              {blockchain.account === "" || blockchain.smartContract === null ? (
                <>
                  <div className="mintBtn">
                    {(window.matchMedia("only screen and (max-width: 760px)").matches) ?
                      <a href={CONFIG.DEEPLINK} className="mt-5">Connect</a>
                      :
                      <>
                        <button onClick={(e) => { e.preventDefault(); dispatch(connect()); getData(); }}>Connect</button>
                        <p className="d-flex justify-content-center mt-3">Connect to the {CONFIG.NETWORK.NAME} network</p>
                      </>
                    }
                  </div>
                  {blockchain.errorMsg !== "" ? (
                      <p className="d-flex justify-content-center mt-3">
                        {blockchain.errorMsg}
                      </p>
                  ) : null}
                </>
              ) : (  
                <div>
                  <h4 className="d-flex justify-content-center mt-3">NFTs Minted :  {data.totalSupply} / {CONFIG.MAX_SUPPLY}</h4>
                  <p className="d-flex justify-content-center mt-3">
                    1  {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                    {CONFIG.NETWORK.SYMBOL}. Excluding gas fees.
                  </p>
                  <div className="sliderButtonGroups">
                    <button onClick={decrementMintAmount}>
                      <Icon icon="akar-icons:minus" />
                    </button>
                    <input
                      type="text"
                      value={mintAmount}
                      id="nft_amount"
                    />
                    <button onClick={incrementMintAmount} >
                      <Icon icon="akar-icons:plus" />
                    </button>
                  </div>
                  <div className="mintBtn">
                    <button onClick={(e) => {e.preventDefault(); claimNFTs(); getData(); }}>{claimingNft ? "Minting In Process" : "Mint Now"}</button>
                  </div>
                  <p className="d-flex justify-content-center mt-3">
                    {feedback}
                  </p>
                </div>
              )
            }
            </div>
          )}
        </div>
      </div>
      {/*<div className="row">
        <div className="col-sm-12">
          <center><img src={bg} className="bg-img"/></center>
        </div>
      </div>*/}
      <Container>
        <div className="buttonBottomText">
          <div className="text">
            <p>
              Pirates of the Blockchain is a unique set of 10,000 pirates created from the DNA of capt Darren Soto.<br/>
              POTB was created for everyone in the crypto space, no matter your race, gender, or financial status. We strive to create a space that is fun, engaging, and community driven. The Pirates of the blockchain invite you to join our crew as we sail the seas looking for adventure!
            </p>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}

export default CarouselBanner;
