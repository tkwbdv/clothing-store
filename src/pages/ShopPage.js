import React from "react";
import CollectionPreview from "../components/CollectionPreview";
import SHOP_DATA from "../data/shop-data";

const ShopPage = () => (
  <div className="shop-page">
    {
      SHOP_DATA.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))
    }
  </div>
);

export default ShopPage;