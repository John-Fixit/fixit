import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiAngularSimple
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiExpress
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { RiVuejsFill } from "react-icons/ri";
import { Tooltip, Zoom } from "@mui/material";

function Techstack() {

  const techs = [
    {name: "Javascript", icon:  <DiJavascript1 />},
    {name: "Node Js", icon:  <DiNodejs />},
    {name: "React", icon:  <DiReact />},
    {name: "Vue Js", icon:  <RiVuejsFill />},
    {name: "MongoDB", icon:  <DiMongodb />},
    {name: "Next Js", icon:  <SiNextdotjs />},
    {name: "Git", icon:  <DiGit />},
    {name: "Firebase", icon:  <SiFirebase />},
    {name: "Express JS", icon:  <SiExpress />},
    {name: "Angular Js", icon:  <DiAngularSimple />}
  ]
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {
        techs.map((tech, index) => {
            return (
              <Tooltip title={tech.name} TransitionComponent={Zoom} arrow key={index}>
                <Col xs={4} md={2} className="tech-icons">
                  {tech.icon}
                </Col>
              </Tooltip>
            )
        })
      }
    </Row>
  );
}

export default Techstack;
