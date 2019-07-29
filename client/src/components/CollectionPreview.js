import React from "react";
import { Link } from "react-router-dom";
import CollectionItem from "./CollectionItem";

import {
  CollectionPreviewContainer,
  PreviewContainer,
  TitleContainer
} from "../styles/components/_CollectionPreview";

const CollectionPreview = ({ title, items, routeName }) => (
  <CollectionPreviewContainer>
    <Link to={`/shop/${routeName}`}>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
    </Link>
    <PreviewContainer>
      {items
        .filter((item, index) => index < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
