"use client";
import { useState,useContext } from "react";
import { useRouter } from "next/navigation"
import Button from "../buttons/Button";
import { validateRegister } from "../../../utils/validationRegister";
import { UserContext } from "@/context/user";
import { NotificationCart } from "../Notifications/NotifCart";


export default function Register() {
  const router = useRouter();
  const {signUp} = useContext(UserContext);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [userRegister, setUserRegister] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserRegister((prev) => ({
      ...prev,
      [name]: value,
    }));
  
    const newErrors = validateRegister({ ...userRegister, [name]: value }).errors;
       setErrors(newErrors);
  };

  const handleLoginRedirect = () => {
    router.push("/userDashboard/login");
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

      const user = { 
        name: userRegister.name,
        email: userRegister.email,
        password: userRegister.password,
        address: userRegister.address,
        phone: userRegister.phone
      }
 
  try {
    const success = await signUp(user);
    if (success) {
      setNotificationMessage("Registro exitoso");
      setShowNotification(true);
      setTimeout(() => {
        router.push("/home"); 
      }, 3000); 
      setUserRegister({
        name: "",
        email: "",
        password: "",
        address: "",
        phone: "",
      });
    } else {
      setSubmissionError("Hubo un error en el registro. Inténtalo de nuevo.");
    }
  } catch (error) {
    console.error("Error durante el registro:", error);
    setSubmissionError("Hubo un error en el registro. Inténtalo de nuevo.");
  }
};
return (
  <div className="mt-20 bg-customBgPage text-center flex items-center justify-center">
    <div className="w-full md:w-2/4 px-6">
      <h1 className="text-xl md:text-2xl mt-4 mb-8 text-[#333] 
                    border-l-4 border-customHoverButton p-4 bg-customBgPage
                    shadow-md rounded-md">
        Regístrate para poder realizar compras 😊
      </h1>

      <form 
        onSubmit={onSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gradient-to-br bg-customBgPage 
                   mx-auto border border-gray-300 shadow-lg p-8 rounded-lg"
      >
        <div className="flex flex-col">
          <input
            name="name"
            type="text"
            value={userRegister.name}
            onChange={handleChange}
            placeholder="Nombre"
            className="w-full border-b-2 border-gray-300 bg-[#F5F5F5] 
                       focus:border-[#353534] focus:outline-none py-3 px-4 rounded-sm transition"
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </div>

        <div className="flex flex-col">
          <input
            name="email"
            type="email"
            value={userRegister.email}
            onChange={handleChange}
            placeholder="Correo electrónico"
            className="w-full border-b-2 border-gray-300 bg-[#F5F5F5] 
                       focus:border-[#353534] focus:outline-none py-3 px-4 rounded-sm transition"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>

        <div className="flex flex-col">
          <input
            name="password"
            type="password"
            value={userRegister.password}
            onChange={handleChange}
            placeholder="Contraseña"
            className="w-full border-b-2 border-gray-300 bg-[#F5F5F5] 
                       focus:border-[#353534] focus:outline-none py-3 px-4 rounded-sm transition"
          />
          {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
        </div>

        <div className="flex flex-col">
          <input
            name="address"
            type="text"
            value={userRegister.address}
            onChange={handleChange}
            placeholder="Dirección"
            className="w-full border-b-2 border-gray-300 bg-[#F5F5F5] 
                       focus:border-[#353534] focus:outline-none py-3 px-4 rounded-sm transition"
          />
          {errors.address && <span className="text-red-500 text-sm">{errors.address}</span>}
        </div>

        <div className="flex flex-col">
          <input
            name="phone"
            type="tel"
            value={userRegister.phone}
            onChange={handleChange}
            placeholder="Celular"
            className="w-full border-b-2 border-gray-300 bg-[#F5F5F5] 
                       focus:border-[#353534] focus:outline-none py-3 px-4 rounded-sm transition"
          />
          {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
        </div>

        <div className="md:col-span-2">
          <Button text="Registrarme" type="submit" disabled={Object.keys(errors).length > 0} />
        </div>
      </form>

      {submissionError && <p className="text-red-500 text-sm">{submissionError}</p>}

      <Button text="¿Ya posees una cuenta? Haz click para ingresar" onClick={handleLoginRedirect} />
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