export const cartReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case "ADD_TO_CART":
            return { ...state, cartlist: payload.products }

        case "REMOVE_FROM_CART":
            return { ...state, cartlist: payload.products }

        case "TOTAL_AMOUNT":
            return { ...state, total: payload.total }

        default:
            throw new Error("No case found in cartReducer")

    }
} 