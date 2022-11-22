import React from "react";
import Wrapper from "./Footer.styled";
import Container from "../Container/Container";
// import images
import Logo from "../../images/logo.svg";
import { FaDiscord } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Icon } from "@iconify/react";
function Footer() {
  return (
    <Wrapper>
      <Container>
        <div className="footerlogo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="socialIcons">
          <div className="socialIcons">
            <a href="https://discord.gg/YnMcJHF9Bv" target="_blank" rel="noreferrer">
              <FaDiscord />
            </a>
            <a href="https://twitter.com/BChainPirates?t=l53XroOGtu4PSRDstVWnSA&s=09" target="_blank" rel="noreferrer">
              <AiFillTwitterCircle />
            </a>
            {/*<a href="https://discord.gg/rsXKx8JE" target="_blank" rel="noreferrer">
              <Icon icon="entypo-social:instagram-with-circle" />
            </a>*/}
          </div>
        </div>
        <div className="text">
          <p>&copy; 2022 Pirates of the blockchain. All rights reserved</p>
          <p className="development">Developed by <a href="https://g7technologies.com/" target="blank" className="anchor">G7Technologies</a></p>
        </div>
      </Container>
    </Wrapper>
  );
}

export default Footer;
