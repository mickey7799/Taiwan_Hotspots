import React from "react";
import styled from "styled-components";

const Li = styled.li`
  width: 250px;
  height: 180px;
  overflow: hidden;
  margin-left: 0.5em;
  margin-right: 0.5em;
  margin-bottom: 1em;
`;

const Img = styled.img`
  width: 100%;
  height: 180px;
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