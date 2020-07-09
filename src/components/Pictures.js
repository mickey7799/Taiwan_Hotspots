import React from "react";
import NoImages from "./NoImages";
import Image from "./Image";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  -ms-align-items: flex-start;
  align-items: flex-start;
  margin: 2em 2em;
`;

const Pictures = props => {
  const data = props.images;
  let images;
  let noImages;
  
  if (data.length > 0) {
    images = data.map(image => {
      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      return (
        <div key={id}>
             <Image url={url} alt={title} />
        </div>
      );
    });
  } else {
    noImages = <NoImages />;
  }
  return (
    <div>
      <Ul>{images}</Ul>
      {noImages}
    </div>
  );
};

export default Pictures;