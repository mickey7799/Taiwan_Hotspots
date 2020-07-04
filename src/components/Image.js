import React from "react";

const Image = ({ url, key, title }) => (
  <li>
    <img src={url} alt={title} key={key}/>
  </li>
);

export default Image;