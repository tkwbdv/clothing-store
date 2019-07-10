import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { firebase } from "../firebase/firebase";

import { ReactComponent as Logo } from "../logo.svg";

const Header = ({ currentUser }) => {
  const signOut = () => firebase.auth().signOut();

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options-container">
        <Link className="option" to="/shop">
          SHOP
      </Link>
        <Link className="option" to="/shop">
          CONTACT
      </Link>
        {!!currentUser.id
          ? <Link className="option" to="/" onClick={signOut}>
            SIGN OUT
          </Link>
          : <Link className="option" to="/signin">
            SIGN IN
          </Link>
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(Header);