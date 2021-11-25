export const initialState = {
  cart: [],
  user: null,
};

//Iterates through the cart and sums up the amount in the cart
export const getCartTotal = (cart) => {
  //every item price will add to the initial amount which is 0
  return cart.reduce((amount, item) => item.price + amount, 0);
};

//Listens to the dispatch/action
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case 'REMOVE_FROM_CART':
      //find the index of the item to be removed
      //finds the FIRST match and returns it
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      //copy of what the state.cart currently have
      let newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Unable to remove product (id: ${action.id}). Not found in cart.`
        );
      }
      return {
        ...state,
        cart: newCart,
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'EMPTY_CART':
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default reducer;
