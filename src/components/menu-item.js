import React from "react";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  const handleRedirect = () => history.push(`${match.url}${linkUrl}`);

  return (
    <div className={`menu-item ${size}`} onClick={handleRedirect}>
      <div style={{
        backgroundImage: `url(${imageUrl})`
      }}
        className="background-image">
      </div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);