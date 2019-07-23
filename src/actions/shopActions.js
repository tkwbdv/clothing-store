import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../firebase/firebase";

export const types = {
  FETCH_COLLECTIONS_START: "FETCH_COLLECTIONS_START",
  FETCH_COLLECTIONS_SUCCESS: "FETCH_COLLECTIONS_SUCCESS",
  FETCH_COLLECTIONS_FAILURE: "FETCH_COLLECTIONS_FAILURE"
};

export const fetchCollectionsStart = () => ({
  type: types.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: types.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: types.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};
