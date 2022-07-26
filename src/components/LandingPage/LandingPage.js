import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();
//   useEffect(() => {
//     if (userInfo) {
//       navigate("/mynotes");
//     }
//   }, [navigate]);
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              {/* <h1 className="title text-white">Welcome to project</h1>
              <p className="subtitle text-white">keey your all notes here.</p> */}
            </div>

            <div className="buttonContainer">
              <a href="/login">
                <Button size="lg" className="landingbutton">
                  Login{" "}
                </Button>
              </a>
              <a href="/register">
                <Button
                  size="lg"
                  className="landingbutton"
                  variant="outline-primary"
                >
                  Register{" "}
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
