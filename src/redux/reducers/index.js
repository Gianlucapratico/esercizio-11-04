import { ADD_TO_FAVOURITE } from "../actions";
import { REMOVE_FROM_FAVOURITE } from "../actions";

const initialState = {
  favourite: {
    list: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      console.log(action.payload);
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: [...state.favourite.list, action.payload],
        },
      };
    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: state.favourite.list.filter(
            (fav) => fav._id !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
