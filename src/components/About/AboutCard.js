import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, welcome to my page, I am <span className="purple">Adeoye John </span>
            <br /> I am a <span className="purple">Full stack developer </span> and currently in Nigeria, studied at SQI College of ICT. I love creating user-friendly interfaces that enhances the overall user experience and giving it live by integrating the functions. I am driven by the desire to work collaboratively with like-minded developers and designers who share experience and knowledge for creating seamless and intuitive digital experiences.
    <br/><br/>
            Additionally, Having honed my skills in <span className="purple">frontend and backend development,</span> I am constantly seeking opportunities to learn more and grow from talented individuals who can broaden my knowledge and expertise. Working in a team environment allows me to gain insights from different perspectives, fostering creativity and innovation.
            <br /><br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Being with Teches
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Fixit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
