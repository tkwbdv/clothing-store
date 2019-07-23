import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionsLoaded } from "../selectors/shopSelectors";

import WithSpinner from "../components/WithSpinner";
import CollectionsPage from "../pages/CollectionPage";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionsPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsPage);

export default CollectionsPageContainer;
