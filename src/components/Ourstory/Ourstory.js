import React, { useState } from "react";
import Wrapper from "./Ourstory.styled";
import Container from "../Container/Container";
// import images
import Storyimg2 from "../../images/storyimg.png";
import Storyimg from "../../images/pirate.png";

function Ourstory() {
  const [story, setStory] = useState(false);
  return (
    <Wrapper>
      <Container dflex center={true}>
        <div className="storyimg" id="ourstory">
          <img src={Storyimg} alt="story" />
        </div>
        <div className="storydescription">
          <div className="storyTitle">
            <h3>First Treasure Hunt</h3>
          </div>
            <div className="storytext">
              <p>
                Our first treasure hunt will be for the skeletal remains of some of our Pirates. If you are lucky enough to discover the resting place of these renown pirates. You will discover a treasure of $Eth by their bones.
              </p>
            </div>
        </div>
      </Container>
    </Wrapper>
  );
}

export default Ourstory;