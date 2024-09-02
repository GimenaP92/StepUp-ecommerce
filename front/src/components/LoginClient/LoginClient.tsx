"use client";
import { useContext, useState } from "react";
import { validateLogin } from "../../../utils/validationLogin";
import Button from "../buttons/Button";
import { ILoginClientProps } from "@/interfaces/interfaces";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/user";

export default function LoginClient({ setToken }: ILoginClientProps) {
    const router = useRouter();
    const { signIn } = useContext(UserContext);
    const [userData, setUserData] = useState({
      email: "",
      password: ""
    });
    const [errors, setErrors] = useState({} as { [key: string]: string });
    
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
              setToken(token); 
              router.push("/home");
            }
          } else {
            alert("Usuario inválido");
          }
        } catch(error) {
          setErrors(errors);
        }
      } else {
        setErrors(errors); 
      }
    };

    return (
      <div className="text-center">
        <h1 className="text-2xl mt-2 mb-4 bg-customBgCard border border-gray-300 p-2 w-2/4 mx-auto">
          Ingresa a tu cuenta para comprar nuestros productos
        </h1>
        <form onSubmit={onSubmit} className="flex flex-col md:w-2/4 mx-auto border border-gray-300 shadow p-8 m-10 rounded mb-8">
          <label htmlFor="email"></label>
          <input
            name="email"
            type="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="email"
            className="w-3/4 mx-auto border-b-2 bg-purple-100 border-gray-300 focus:outline-none focus:border-gray-500 mb-4"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          <label htmlFor="password"></label>
          <input
            name="password"
            type="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="contraseña"
            className="w-3/4 mx-auto border-b-2 bg-purple-100 border-gray-300 focus:outline-none focus:border-gray-500 mb-4"
          />
          {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
          <Button text="Ingresar" disabled={Object.keys(errors).length > 0} type="submit"/>
        </form>
        <Button text="¿No posees una cuenta? Haz click aqui para registrarse" onClick={handleRegisterRedirect} />
      </div>
    );
}
