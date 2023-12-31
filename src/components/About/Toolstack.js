import { Tooltip, Zoom } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiNetlify,
  SiStackoverflow,
  SiRender
} from "react-icons/si";

function Toolstack() {
  const tools = [
    {name: "Visual Studio code", icon: <SiVisualstudiocode />},
    {name: "Postman", icon: <SiPostman />},
    {name: "Vercel", icon: <SiVercel />},
    {name: "Netlify", icon: <SiNetlify />},
    {name: "Slack", icon: <SiSlack />},
    {name: "Stack overflow", icon: <SiStackoverflow />},
    {name: "Render", icon: <SiRender />}
  ]
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {
        tools.map((tool, index) => {
            return (
              <Tooltip title={tool.name} TransitionComponent={Zoom} arrow key={index}>
                <Col xs={4} md={2} className="tech-icons">
                  {tool.icon}
                </Col>
              </Tooltip>
            )
        })
      }
    </Row>
  );
}

export default Toolstack;
