export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";

export const addToFavouriteAction = (jobData) => {
  return { type: ADD_TO_FAVOURITE, payload: jobData };
};
export const removeFromFavouriteAction = (favourites) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: favourites,
});
