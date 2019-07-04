import React from "react";
import MenuItem from "./menu-item";

const sectionsData = [
  {
    title: "hats",
    imageUrl: "images/menu-item/hats.png",
    id: 1,
    linkUrl: "shop/hats"
  },
  {
    title: "jackets",
    imageUrl: "images/menu-item/jackets.png",
    id: 2,
    linkUrl: "shop/jackets"
  },
  {
    title: "sneakers",
    imageUrl: "images/menu-item/sneakers.png",
    id: 3,
    linkUrl: "shop/sneakers"
  },
  {
    title: "womens",
    imageUrl: "images/menu-item/womens.png",
    size: "large",
    id: 4,
    linkUrl: "shop/womens"
  },
  {
    title: "mens",
    imageUrl: "images/menu-item/men.png",
    size: "large",
    id: 5,
    linkUrl: "shop/mens"
  }
];

const Directory = () => {
  // const [sections, setSetctions] = useState(sectionsData);

  return (
    <div className="directory-menu">
      {sectionsData.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
}

export default Directory;