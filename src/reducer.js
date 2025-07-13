// The data layer
export const initialState = {
    basket: [],
};

// Every time an action is called it goes through here
const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state, // Whatever the state originally was
                basket: [...state.basket, action.item]
            };

        default:
            return state;
    }
};

export default reducer;