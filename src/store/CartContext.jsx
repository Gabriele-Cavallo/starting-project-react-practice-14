import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
    clearCart: (id) => {},
});

function cartReducer(state, action) {
    if(action.type === 'ADD_ITEM'){
        const exisintgCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);

        const updatedItems = [...state.items];

        if(exisintgCartItemIndex > -1){
            const existingItem = state.items[exisintgCartItemIndex];
            const updateItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            }
            updatedItems[exisintgCartItemIndex] = updateItem;
        }else {
            updatedItems.push({...action.item, quantity: 1});
        }

        return {...state, items: updatedItems};
    }

    if(action.type === 'REMOVE_ITEM') {
        const exisintgCartItemIndex = state.items.findIndex((item) => item.id === action.id);
        const existingCartItem = state.items[exisintgCartItemIndex];

        const updatedItems = [...state.items];

        if(existingCartItem.quantity === 1){
            updatedItems.splice(exisintgCartItemIndex, 1)
        }else {
            const updatedItem = {...existingCartItem, quantity: existingCartItem.quantity - 1}
            updatedItems[exisintgCartItemIndex] = updatedItem;
        }

        return { ...state, items: updatedItems };
    }

    if(action.type === 'CLEAR_CART'){
        return {...state, items: []};
    }

    return state;
}

export function CartContextProvider({children}) {
    const [ cart, dispatchCartAction ] = useReducer(cartReducer, { items: [] });
    
    function addItem(item) {
        dispatchCartAction({
            type: 'ADD_ITEM',
            item
        })
    }
    
    function removeItem(id) {
        dispatchCartAction({
            type: 'REMOVE_ITEM',
            id: id
        })
    }

    function clearCart(){
        dispatchCartAction({
            type: 'CLEAR_CART',
        })
    }
    
    const cartCtxValue = {
        items: cart.items,
        addItem: addItem,
        removeItem,
        clearCart
    }


    return <CartContext.Provider value={cartCtxValue}>{children}</CartContext.Provider>
}

export default CartContext;