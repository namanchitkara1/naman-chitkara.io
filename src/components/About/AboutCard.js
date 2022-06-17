import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Naman Chitkara </span>
            from <span className="purple"> Gurgaon,Haryana, India.</span>
            <br />I am a final year Student at SRM Institute Of science and Technology ,pursuing Computer Science and Engineering  
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gyming
            </li>
            <li className="about-activity">
              <ImPointRight /> Trading 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I'm passionate about learing new things and implimanting it in a new and better way "{" "}
          </p>
          <footer className="blockquote-footer">Naman Chitkara</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
