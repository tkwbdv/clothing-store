import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// import { firebase } from "../firebase/firebase";
import CartIcon from "./CartIcon";
import CartDropdown from "./CartDropdown";

import { ReactComponent as Logo } from "../assets/logo.svg";
import { selectCartHidden } from "../selectors/cartSelectors";
import { selectCurrentUser } from "../selectors/userSelectors";

import { signOutStart } from "../actions/userActions";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "../styles/components/_Header";

const Header = ({ currentUser, isCartHidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {!!currentUser ? (
        <OptionLink as="div" to="/" onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {!isCartHidden && <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isCartHidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
