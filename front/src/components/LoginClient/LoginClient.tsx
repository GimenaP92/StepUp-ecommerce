"use client";
import { useContext, useState } from "react";
import { validateLogin } from "../../../utils/validationLogin";
import Button from "../buttons/Button";
import { ILoginClientProps } from "@/interfaces/interfaces";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/user";
import Link from "next/link";
import { NotificationCart } from "../Notifications/NotifCart";

export default function LoginClient({ setToken }: ILoginClientProps) {
    const router = useRouter();
    const { signIn } = useContext(UserContext);
    const [userData, setUserData] = useState({
      email: "",
      password: ""
    });
    const [errors, setErrors] = useState({} as { [key: string]: string });
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setUserData({ ...userData, [name]: value });
      const { formIsValid, errors } = validateLogin({ ...userData, [name]: value });
      setErrors(errors);
    };
    
    
    const handleRegisterRedirect = () => {
        router.push("/userDashboard/register");
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
       
      const { formIsValid, errors } = validateLogin(userData);

      if (formIsValid) {
        const credentials = {
          email: userData.email,
          password: userData.password
        };
        
        try {
          const success = await signIn(credentials); 
                   
          if (success) {
            const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
            if (token) {
              setNotificationMessage(
                "Has ingresado correctamente"
              );
              setShowNotification(true);
              setTimeout(() => {
                setShowNotification(false);
              }, 3000);
              setToken(token); 
              router.push("/home");
            }
          } else {
             setNotificationMessage(
        "Usuario Inválido"
      );
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
          }
        } catch(error) {
          setErrors(errors);
        }
      } else {
        setErrors(errors); 
      }
    };

  
    return (
      <div className="mt-20 bg-customBgPage text-center flex items-center justify-center">
        <div className="w-full md:w-2/4 px-6">
          <h1 
            className="text-xl md:text-2xl mt-4 mb-8 text-[#333] 
                       border-l-4 border-customHoverButton p-4 bg-customBgPage
                       shadow-md rounded-md">
            Ingresa a tu cuenta para comprar nuestros productos
          </h1>
    
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-6 bg-gradient-to-br bg-customBgPage
                       md:w-full mx-auto border border-gray-300 shadow-lg p-8 rounded-lg"
          >
            <input
              name="email"
              type="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="Correo electrónico"
              className="w-full border-b-2 border-gray-300 bg-[#F5F5F5] 
                         focus:border-[#353534] focus:outline-none py-3 px-4 rounded-sm transition"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
    
            <input
              name="password"
              type="password"
              value={userData.password}
              onChange={handleChange}
              placeholder="Contraseña"
              className="w-full border-b-2 border-gray-300 bg-[#F5F5F5] 
                         focus:border-[#353534] focus:outline-none py-3 px-4 rounded-sm transition"
            />
            {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
    
            <Button text="Ingresar" disabled={Object.keys(errors).length > 0} type="submit" />
          </form>
    
          <Link
            href="/userDashboard/register"
            className="mt-6 inline-block text-[#333] hover:text-white hover:bg-customHoverButton 
                       px-4 py-2 rounded transition-colors duration-300"
          >
            ¿No posees una cuenta? Haz click aquí para registrarse
          </Link>
        </div>
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