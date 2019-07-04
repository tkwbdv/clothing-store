import React from "react";
import CollectionPreview from "../components/CollectionPreview";
import SHOP_DATA from "../data/shop-data";

const ShopPage = () => (
  <div className="shop-page">
    {SHOP_DATA.map(({ title, items, id }) => (
      <CollectionPreview title={title} items={items} key={id} />
    ))}
  </div>
);

export default ShopPage;