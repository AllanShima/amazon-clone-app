// The data layer
export const initialState = {
    basket: [],
    user: null,
};

// Selector
const getProductAmount = (item) => {
    // returns the total amount of the item
    return item?.amount;
}

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => (item.price * getProductAmount(item)) + amount, 0);

// Every time an action is called it goes through here
const reducer = (state, action) => {
    console.log(action); // debug
    switch(action.type) {
        case 'ADD_TO_BASKET':
            // THIS IS WRONG: Mutating the existing state directly
            // state.basket.push(action.item); // Don't do this!
            // return state;

            // THIS IS ALSO WRONG: Always adding a new item, never updating existing ones
            // return {
            //   ...state,
            //   basket: [...state.basket, action.item], // This will add duplicates
            // };       

            // Check if the item already exists in the basket
            const existingItemIndex = state.basket.findIndex(
                (item) => item.id === action.item.id
            ); 
            if (existingItemIndex > -1) {
                // Item exists, update its quantity
                const newBasket = [...state.basket]; // Create a shallow copy of the basket
                newBasket[existingItemIndex] = { 
                    ...newBasket[existingItemIndex],
                    amount: newBasket[existingItemIndex].amount + 1 // Increment the existing amount by 1
                };

                return {
                    ...state,     // Whatever the state originally was
                    basket: newBasket,
                };
            } else {
                // Item does not exist, add it to the basket
                return {
                    ...state, 
                    basket: [...state.basket, { ...action.item, amount: 1 }], // Add the new item with a starting amount of 1
                };
            }
        
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }

        case 'DECREMENT_ITEM_QUANTITY':
            const existingDecrementIndex = state.basket.findIndex(item => item.id === action.id);

            if (existingDecrementIndex > -1) {
                const newBasket = [...state.basket]; // Create a copy of the basket
                const itemToDecrement = { ...newBasket[existingDecrementIndex] }; // Create a copy of the item

                if (itemToDecrement.amount > 1) {
                    itemToDecrement.amount -= 1; // Decrement quantity
                    newBasket[existingDecrementIndex] = itemToDecrement; // Update the item in the new basket
                    return { ...state, basket: newBasket };
                } else {
                    // If amount is 1, it should be removed (fall through to REMOVE_FROM_BASKET logic, or filter here)
                    // For simplicity, we can let REMOVE_FROM_BASKET handle the removal if amount is 1
                    // or directly filter it out here:
                    return {
                        ...state,
                        basket: newBasket.filter(item => item.id !== action.id)
                    };
                }
            }
            return state; // Item not found, return current state

        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            // temp
            let newBasket = [...state.basket];

            if (index >= 0){
                newBasket.splice(index, 1);
            } else {
                console.warn(`Can't remove product (id: ${action.id}) as it isn't in the basket!`);
            }

            return {
                ...state,
                basket: newBasket
            }

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }
};

export default reducer;