const Reducer = (state,action) => {

    switch(action.type){

        // Add Item , and if exist add  to quantity
        case "ADD_TO_CART":
      
          case 'ADD_TO_CART':
          const nextCart = [...state.cartItems];
          const existingIndex = nextCart.findIndex((item) => item._id === action.payload._id);

          if (existingIndex >= 0) {
            const newQuantity = parseInt(nextCart[existingIndex].quantity + action.payload.quantity);

            nextCart[existingIndex] = {
              ...action.payload,
              quantity: newQuantity,
            };
          } else {
            nextCart.push(action.payload);
          }

          return {
            ...state,
            cartItems: nextCart,
          };

    // REmove Item from Array
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: [
          ...state.cartItems.filter((item) => item._id !== action.payload._id),
        ],
      };

    // In CART , increase 
    case "INCREASE":
        let increase = state.cartItems.find((item) => item._id === action.payload._id)
        increase.quantity ++
        increase.totalPrice += action.payload.price
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
        ],
      };

    // In Cart , decrease
    case "DECREASE":
        let decrease = state.cartItems.find((item) => item._id === action.payload._id)
        if(decrease.quantity > 1){
            decrease.quantity --
            decrease.totalPrice -= action.payload.price
        } 

      return {
        ...state,
        cartItems: [
          ...state.cartItems,
        ],
      };

        default: 
            return state;
    }
}

export default Reducer