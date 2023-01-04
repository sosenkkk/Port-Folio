import React, { useReducer} from "react";
import CartContext from "./CartContext";


const defaultCartState = {
    items: []
};

const cartReducer = (state, action) => {
    let updatedItems;
    if (action.type === 'ADD_ITEM') {
         updatedItems= state.items.concat(action.item);
    }
    return {
        items: updatedItems
    };
}


const CartProvider=(props)=>{

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemHandler=(item)=>{
        dispatchCartAction({
            type:"ADD_ITEM",
            item:item
        });
    };




    const cartContext={
        items:cartState.items,
        addItem:addItemHandler,
    }
    return <CartContext.Provider value={cartContext} >
        {props.children}
    </CartContext.Provider>

}

export default CartProvider;