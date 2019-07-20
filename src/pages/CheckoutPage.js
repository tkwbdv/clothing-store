import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../selectors/cartSelectors";
import { selectCartTotal } from "../selectors/cartSelectors";

import CheckoutItem from "../components/CheckoutItem";
import StripeCheckoutButton from "../components/StripeCheckoutButton";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from "../styles/pages/_CheckoutPage";

const CheckoutPage = ({ cartItems, cartTotal }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map(item => (
      <CheckoutItem key={item.id} item={item} />
    ))}

    <TotalContainer>
      <span>TOTAL: ${cartTotal}</span>
    </TotalContainer>
    <WarningContainer>
      *Please use the following test credit card for payments*
      <br />
      Number: 4242 4242 4242 4242 - Exp: 10 / 20 - CVC: 123
    </WarningContainer>
    <StripeCheckoutButton price={cartTotal} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
