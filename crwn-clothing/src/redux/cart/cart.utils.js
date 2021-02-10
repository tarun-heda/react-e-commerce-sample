export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);
    if (existingCartItem) {
        return cartItems.map(item => (
            item.id === existingCartItem.id ? 
            { ...item, quantity: item.quantity + 1 } :
            item
        ))
    } else {
       return [...cartItems, { ...cartItemToAdd, quantity: 1 }] 
    }
}

export const clearItemFromCart = (cartItems, cartItemToClear) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToClear.id);
    if (existingCartItem) {
        return cartItems.filter(item => item.id !== existingCartItem.id)
    } else {
       return [...cartItems] 
    }
}

export const removeItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToRemove.id);
    if (existingCartItem && existingCartItem.quantity > 1) {
        return cartItems.map(item => (
            item.id === existingCartItem.id ? 
            { ...item, quantity: item.quantity - 1 } :
            item
        ))
    } else if (existingCartItem) {
        return cartItems.filter(item => item.id !== existingCartItem.id)
    }
}