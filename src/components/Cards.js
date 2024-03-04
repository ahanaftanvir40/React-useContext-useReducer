

import { useCart } from "../context/CartContext"
import { useFetch } from "../hooks/useFetch"


export const Cards = () => {
    const { addToCart, removeFromCart, cartlist } = useCart()
    const { products } = useFetch()


    const ItemInCart = (product) => {
        return cartlist.find(cartItem => cartItem.id === product.id)
    }








    return (
        <>
            {products.map((product) => (

                <div key={product.id} className="ml-10 mr-10 mt-7 max-w-lg border shadow-md p-2 font-medium rounded-sm">
                    <div>
                        <img className="max-w-sm" src={product.image} alt='Product photos' />

                    </div>
                    <div>
                        <h3 className="mt-2">{product.name}</h3>

                    </div>
                    <div className="flex justify-between">
                        <p className="mt-1">${product.price}</p>

                        {ItemInCart(product) ? (
                            <button onClick={() => removeFromCart(product)} className="bg-red-600 rounded-lg p-2 text-white text-sm">Remove</button>
                        ) : (
                            <button onClick={() => addToCart(product)} className="bg-blue-500 rounded-lg p-2 text-white text-sm">Add to Cart</button>
                        )}

                    </div>
                </div>

            ))}

        </>
    )
}
