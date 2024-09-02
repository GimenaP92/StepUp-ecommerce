"use client"
import { useContext } from "react"
import { CartContext } from "@/context/cartContext"
import { UserContext } from "@/context/user";

function AddToCart ({id}: {id:number}) {
    const {addToCart} = useContext(CartContext);
    const {isLogged} = useContext(UserContext)

    function handleClick (event: React.MouseEvent<HTMLButtonElement>) {
        if(!isLogged) {
            alert("Debes ingresar a tu cuenta para agregar productos al carrito");
            return;
        }
        addToCart(id);
    }

    return (
        <button type={"button"} 
        onClick={handleClick}
         className="w-3/4 mx-auto bg-customBg text-customText py-2 px-4 shadow-md rounded hover:cursor-pointer hover:bg-customHoverButton hover:text-customText border border-customHoverButton">
         Agregar al carrito</button>
    )
}

export default AddToCart;