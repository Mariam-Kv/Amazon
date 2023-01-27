export let initialState = {
  basket: [],
};
export let reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      console.log(action.item);
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    default:
      return 334;
  }
};