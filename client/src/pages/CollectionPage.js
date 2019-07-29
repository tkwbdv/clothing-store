import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../components/CollectionItem";

import { selectCollection } from "../selectors/shopSelectors";

import {
  CollectionPageContainer,
  CollectionPageTitle,
  CollectionPageItems
} from "../styles/pages/_CollectionPage";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <CollectionPageContainer>
      <CollectionPageTitle>{title}</CollectionPageTitle>
      <CollectionPageItems>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionPageItems>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
