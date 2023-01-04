import React from "react";

const CartContext= React.createContext({
    items:[],
    addItem:(item)=>{}
});

export default CartContext;
