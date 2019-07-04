import React from "react";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="collection-preview__title">{title.toUpperCase()}</h1>
    <div className="collection-preview__preview">
      {items.map(item => (
        <div key={item.id}>
          {item.name}
        </div>
      ))}
    </div>
  </div>
);

export default CollectionPreview;