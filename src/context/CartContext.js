import { cartReducer } from "../reducer/cartReducer"

const { createContext, useContext, useReducer } = require("react")

const initialstate = {
    cartlist: [],
    total: 0
}

const CartContext = createContext(initialstate)

export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, initialstate)

    const addToCart = (products) => {
        const updatedCartList = state.cartlist.concat(products)
        updatedTotal(updatedCartList)


        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedCartList
            }
        })
    }

    const removeFromCart = (products) => {
        const updatedCartList = state.cartlist.filter((current) => current.id !== products.id)
        updatedTotal(updatedCartList)

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedCartList
            }
        })


    }
    const updatedTotal = (products) => {
        let total = 0

        products.forEach(product => total = total + product.price)

        dispatch({
            type: "TOTAL_AMOUNT",
            payload: {
                total: total
            }
        })

    }

    const value = {
        total: state.total,
        cartlist: state.cartlist,
        addToCart,
        removeFromCart,
        updatedTotal

    }

    return (
        <CartContext.Provider value={value} >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)
    return context
}