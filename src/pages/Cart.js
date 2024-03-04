import { useCart } from "../context/CartContext"
import { useTitle } from "../hooks/useTitle"


export const Cart = ({ title }) => {
    useTitle(title)
    const { total, removeFromCart, cartlist } = useCart()

    return (
        <div>
            <section className="text-center mt-8 font-bold text-2xl">
                <p>Cart items: {cartlist.length} / total: ${total} </p>

            </section>

            {cartlist.map((product) => (
                <div key={product.id} className="max-h-full ml-32 mr-32 border rounded-sm shadow-lg mt-10">
                    <div className="flex justify-between p-2 items-center font-medium">
                        <img className="h-20" src={product.image} alt={product.name} />

                        <p>{product.name}</p>
                        <p>${product.price}</p>
                        <button onClick={() => removeFromCart(product)} className="bg-red-600 p-2 text-white rounded-lg text-sm">Remove</button>
                    </div>

                </div>
            ))}

        </div>
    )
}
