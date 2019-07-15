import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { firebase } from "../firebase/firebase";
import CartIcon from "./CartIcon";
import CartDropdown from "./CartDropdown";

import { ReactComponent as Logo } from "../assets/logo.svg";
import { selectCartHidden } from "../selectors/cartSelectors";
import { selectCurrentUser } from "../selectors/userSelectors";

const Header = ({ currentUser, isCartHidden }) => {
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
        {!!currentUser
          ? <Link className="option" to="/" onClick={signOut}>
            SIGN OUT
          </Link>
          : <Link className="option" to="/signin">
            SIGN IN
          </Link>
        }
        <CartIcon />
      </div>
      {!isCartHidden && <CartDropdown />}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isCartHidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);