const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl: "/images/menu-item/sections/hats.png",
      id: 1,
      linkUrl: "shop/hats"
    },
    {
      title: "jackets",
      imageUrl: "/images/menu-item/sections/jackets.png",
      id: 2,
      linkUrl: "shop/jackets"
    },
    {
      title: "sneakers",
      imageUrl: "/images/menu-item/sections/sneakers.png",
      id: 3,
      linkUrl: "shop/sneakers"
    },
    {
      title: "womens",
      imageUrl: "/images/menu-item/sections/womens.png",
      size: "large",
      id: 4,
      linkUrl: "shop/womens"
    },
    {
      title: "mens",
      imageUrl: "/images/menu-item/sections/men.png",
      size: "large",
      id: 5,
      linkUrl: "shop/mens"
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {


    default:
      return state;
  }
};

export default directoryReducer;