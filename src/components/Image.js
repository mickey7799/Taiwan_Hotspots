import React from "react";
import styled from "styled-components";

const Li = styled.li`
  width: 250px;
  height: 180px;
  overflow: hidden;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 30px;
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