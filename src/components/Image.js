import React from "react";
import styled from "styled-components";

const Li = styled.li`
  width: 240px;
  height: 175px;
  overflow: hidden;
  margin-left: 0.5em;
  margin-right: 0.5em;
  margin-bottom: 1em;
`;

const Img = styled.img`
  width: 100%;
  height: 175px;
  transform: scale(1.2);
  transition: transform 1.5s;
  &:hover {
    transform: scale(1.5);
  }
`;

const Image = ({ url, key, title }) => (
  <Li>
    <Img src={url} alt={title} key={key}/>
  </Li>
);

export default Image;