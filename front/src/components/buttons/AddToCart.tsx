"use client";

import { useContext, useState } from "react";
import { CartContext } from "@/context/cartContext";
import { UserContext } from "@/context/user";
import { NotificationCart } from "../Notifications/NotifCart";

function AddToCart({ id }: { id: number }) {
  const { addToCart } = useContext(CartContext);
  const { isLogged } = useContext(UserContext);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!isLogged) {
      setNotificationMessage(
        "Debes ingresar a tu cuenta para agregar productos al carrito"
      );
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);

      return;
    }
    addToCart(id);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleClick}
        className="w-3/4 mx-auto bg-customBg text-customText py-2 px-4 shadow-md rounded 
          hover:cursor-pointer hover:bg-customHoverButton hover:text-customText 
          border border-customHoverButton"
      >
        Agregar al carrito
      </button>

      {showNotification && (
        <div className="absolute top-12 left-0 right-0 mx-auto w-max">
          <NotificationCart
            message={notificationMessage}
          />
        </div>
      )}
    </div>
  );
}

export default AddToCart;
