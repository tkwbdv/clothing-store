export const types = {
  UPDATE_COLLECTIONS: "UPDATE_COLLECTIONS"
};

export const updateCollections = collectionsMap => ({
  type: types.UPDATE_COLLECTIONS,
  payload: collectionsMap
});
