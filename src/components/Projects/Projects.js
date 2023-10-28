import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecom from "../../Assets/Projects/ecom.png";
import ens from "../../Assets/Projects/ens.png";
import cv from "../../Assets/Projects/cv.PNG";
import fixchat from "../../Assets/Projects/fixchat.PNG";
import fixtech from "../../Assets/Projects/fixtech.PNG";

function Projects() {
  const projects = [
    {img: ecom, title: "E-commerce", desc: "An e-commerce website, which is done using React Js, Node Js, MongoDB. It has functions which include, authentication, user add to cart, view cart items, able to check out also payment gateway was also integrated.", gitLink: "https://github.com/John-Fixit/E-commerce-Frontend", demoLink: "https://ecomfix.netlify.app/"},
    {img: ens, title: "Emergency Notification System(ENS)", desc: "Emergency Notification system is developed using React, Node Js, MongoDB, Express, Socket.io. ENS features such that, it is used for an emergency situation. This ENS include two part, the user and admin part. all user can make use of the application while the admin will recieve the emergency message sent by the user at their end. to check the admin end, register and login through this: https://ens-pro.netlify.app/register", gitLink: "https://github.com/John-Fixit/Emergency-system-frontend", demoLink: "https://ens-pro.netlify.app/"},
    {img: cv, title: "CV Creator", desc: "CV creator was developed using Next Js, mongoDB, Express. it can be used to develop cv", gitLink: "https://github.com/John-Fixit/CV-creator", demoLink: "https://create-my-cv.vercel.app/"},
    {img: fixchat, title: "FIXCHAT", desc: "FIXCHAT is a chatting app to communicate with friends. it is done with React, Node, express, mongoDB, socket", gitLink: "https://github.com/John-Fixit/FIXchat-app-frontend", demoLink: "https://fixchat.vercel.app/"},
    {img: fixtech, title: "FIXTECH", desc: "FIXTECH is a banking app platform, created using Angular Js, Node, express, mongoDB, socket", gitLink: "https://github.com/John-Fixit/FIXTECH-banking-app-Frontend", demoLink: "https://fixtech-lac.vercel.app/"},
  ]
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {
            projects.map((project, index)=>{
              return(
                <Col lg={4} md={12} sm={12} className="project-card" key={index}>
                  <ProjectCard
                    imgPath={project.img}
                    isBlog={false}
                    title={project.title}
                    description={project.desc}
                    ghLink={project.gitLink}
                    demoLink={project.demoLink}
                  />
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
