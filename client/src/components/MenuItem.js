import React from "react";
import { withRouter } from "react-router-dom";

import {
  ContentSubtitle,
  ContentTitle,
  ContentContainer,
  BackgroundImageContainer,
  MenuItemContainer
} from "../styles/components/_MenuItem";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  const handleRedirect = () => history.push(`${match.url}${linkUrl}`);

  return (
    <MenuItemContainer size={size} onClick={handleRedirect}>
      <BackgroundImageContainer
        imageUrl={imageUrl}
        className="background-image"
      />
      <ContentContainer className="content">
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
