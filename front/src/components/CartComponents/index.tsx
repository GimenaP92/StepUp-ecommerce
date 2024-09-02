"use client";
import { CartContext } from "@/context/cartContext";
import { useContext } from "react";
import CardCart from "../CardCart";
import { ICartComponentProps } from "@/interfaces/interfaces";
import Button from "../buttons/Button";
import { UserContext } from "@/context/user";
import { checkCustomRoutes } from "next/dist/lib/load-custom-routes";

function CartComponent() {
    const { cartItems, removeFromCart, total, proceedcheckout } = useContext(CartContext);
    const handleCheckout = async () => {
      try {
          await proceedcheckout(); 
      } catch (error) {
          console.error("Error durante el checkout:", error);
          alert("Hubo un error al realizar la compra");
      }
  };
  

  return (
      <div className="flex flex-col text-center justify-between w-full">
          {cartItems.length > 0 ? (
              <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between">
                  {cartItems.map((item) => (
                      <div key={item.id} className="w-full md:w-[80%] lg:w-[80%] xl:w-[80%] mb-4 mx-auto">
                          <CardCart product={item} remove={() => removeFromCart(item.id)} />
                      </div>
                  ))}
              </div>
          ) : (
              <div className="text-2xl font-bold pt-8">No hay productos en el carrito</div>
          )}
          {total > 0 && (
              <div className="m-4">
                  <p className="text-2xl font-bold pt-8 mb-4">Total: ${total}</p>
                  <Button text="Comprar" onClick={handleCheckout} type="submit" />
              </div>
          )}
      </div>
  );
}

export default CartComponent;