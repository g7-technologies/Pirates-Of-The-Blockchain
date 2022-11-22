import React, { useState, useEffect } from "react";
import Wrapper from "./Navbar.styled";
import Container from "../Container/Container";
import { NavHashLink } from "react-router-hash-link";
// import icons
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { FaDiscord } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Icon } from "@iconify/react";
import Logo from "../../images/logo.svg";
function Banner() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [socialMenu, setSocialMenu] = useState(false);
  // mobile menu function
  useEffect(() => {
    const x = document.querySelector(".buttonGroups");
    window.addEventListener("resize", () => {
      if (window.innerWidth > 767) {
        x.style.width = "auto";
      } else {
        x.style.width = 0 + "%";
      }
    });

    if (window.innerWidth < 575) {
      if (mobileMenu) {
        x.style.width = 75 + "%";
      } else {
        x.style.width = 0 + "%";
      }
    } else if (window.innerWidth < 768) {
      if (mobileMenu) {
        x.style.width = 50 + "%";
      } else {
        x.style.width = 0 + "%";
      }
    }
  }, [mobileMenu]);
  // mobile menu function
  useEffect(() => {
    const y = document.querySelector(".socialIcons");
    window.addEventListener("resize", () => {
      if (window.innerWidth > 767) {
        y.style.width = "auto";
      } else {
        y.style.width = 0 + "px";
      }
    });

    if (window.innerWidth < 768) {
      if (socialMenu) {
        y.style.width = 80 + "px";
      } else {
        y.style.width = 0 + "px";
      }
    }
  }, [socialMenu]);

  return (
    <Wrapper>
      <Container dflex between>
        <button
          className="mobileMenu"
          onClick={() => {
            setMobileMenu(!mobileMenu);
          }}
        >
          <HiOutlineMenuAlt1 />
        </button>
        <div className="buttonGroups">
          <button
            className="closeMobileMenu"
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
          >
            <ImCross />
          </button>
          <NavHashLink
            to="/#ourstory"
            smooth
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
          >
            OUR STORY
          </NavHashLink>
          <NavHashLink
            to="/#roadmap"
            smooth
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
          >
            TREASURE MAP
          </NavHashLink>
          <NavHashLink
            to="/#team"
            smooth
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
          >
            TEAM
          </NavHashLink>
          <NavHashLink
            to="/#faq"
            smooth
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
          >
            FAQ
          </NavHashLink>
        </div>
        <div className="logo">
          <NavHashLink to="/#">
            <img src={Logo} alt="logo" />
          </NavHashLink>
        </div>
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
        <button
          className="socialMenu"
          onClick={() => {
            setSocialMenu(!socialMenu);
          }}
        >
          <Icon icon="akar-icons:more-vertical" />
        </button>
      </Container>
    </Wrapper>
  );
}

export default Banner;
