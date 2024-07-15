import { ADD_TO_CART } from "../constants";

const addToCart = (data) => {
    return {
        data: data,
        type: ADD_TO_CART
    }
};
const removeToCart = (data) => {
    return {
        data: data,
        type: "REMOVE_TO_CART"
    }
};
export {
    addToCart,
    removeToCart
}