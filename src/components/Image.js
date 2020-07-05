import React from "react";
import styled from "styled-components";

const Li = styled.li`
  width: 220px;
  height: 165px;
  overflow: hidden;
  margin-bottom: 15px;
`;

const Img = styled.img`
  width: 100%;
  transform: scale(1.5);
  transition: transform 1.5s;
`;

const Image = ({ url, key, title }) => (
  <Li>
    <Img src={url} alt={title} key={key}/>
  </Li>
);

export default Image;