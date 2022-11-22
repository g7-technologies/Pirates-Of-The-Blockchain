import React from "react";
import Wrapper from "./Team.styled";
import Container from "../Container/Container";

// import images
import team_img1 from "../../images/team_img/team_member1.jpeg";
import team_img2 from "../../images/team_img/team_member2.jpeg";
import team_img3 from "../../images/team_img/team_member3.jpeg";
import team_img4 from "../../images/team_img/team_member4.jpeg";

function Team() {
  return (
    <Wrapper>
      <Container dflex={true} center={true}>
        <div className="title" id="team">
          <h2>Meet the Founders</h2>
          <p>
            We are committed to delivering a cutting-
            edge experience and making this a project a success.<br/> The Founders are excited to bring you this
            experiment in web3 and community which was conceptualized over a year ago.<br/> We are striving
            for the success of this community, the success of this project, and the success of this voyage as
            we all are the <br/>Pirates of the Blockchain!
          </p>
        </div>
      </Container>
      <Container dflex={true} center={true}>
        <div className="team-container">
          <div className="team">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={team_img1} alt="team" />
                  <p>Partay Captain</p>
                </div>
                <div className="flip-card-back">
                  <h4>Partay Captain</h4>
                  <p className="subtitle">Co-Founder of POTB</p>
                  <p>
                    Overseer of technical development and utility.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="team">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={team_img2} alt="team" />
                  <p>Captain Mike</p>
                </div>
                <div className="flip-card-back">
                  <h4>Captain Mike maker of Millionaires</h4>
                  <p className="subtitle">Co-Founder of POTB</p>
                  <p>
                    Community builder, project development.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*<div className="team">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={team_img3} alt="team" />
                  <p>Blue Anomaly</p>
                </div>
                <div className="flip-card-back">
                  <h4>Blue Anomaly</h4>
                  <p className="subtitle">Community Lead</p>
                  <p>
                    Community lead and outreach
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="team">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={team_img4} alt="team" />
                  <p>First Lady of the isles Amy</p>
                </div>
                <div className="flip-card-back">
                  <h4>First Lady of the isles Amy</h4>
                  <p className="subtitle">Community Organizer</p>
                  <p>
                    Community organization, announcements, social media management
                  </p>
                </div>
              </div>
            </div>
          </div>*/}
        </div>
      </Container>
    </Wrapper>
  );
}

export default Team;
