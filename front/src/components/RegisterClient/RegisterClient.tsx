"use client";
import { useState,useContext } from "react";
import { useRouter } from "next/navigation"
import Button from "../buttons/Button";
import { validateRegister } from "../../../utils/validationRegister";
import { UserContext } from "@/context/user";


export default function Register() {
  const router = useRouter();
  const {signUp} = useContext(UserContext)
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
      alert("Registro exitoso");
      setUserRegister({
        name: "",
        email: "",
        password: "",
        address: "",
        phone: "",
      });
      router.push("/home");
    } else {
      setSubmissionError("Hubo un error en el registro. Inténtalo de nuevo.");
    }
  } catch (error) {
    console.error("Error durante el registro:", error);
    setSubmissionError("Hubo un error en el registro. Inténtalo de nuevo.");
  }
};

  return (
    <div className="text-center">
      <h1 className="text-2xl mt-2 mb-4 bg-customBgCard border border-gray-300 p-2 w-2/4 mx-auto">
        Regístrate para poder realizar compras 😊
      </h1>
      <form onSubmit={onSubmit} className="flex flex-col md:w-2/4 mx-auto border border-gray-300 shadow p-8 m-10 rounded mb-8">
        <label htmlFor="name"></label>
        <input
          name="name"
          type="text"
          value={userRegister.name}
          onChange={handleChange}
          placeholder="nombre"
          className="w-3/4 mx-auto border-b-2 bg-purple-100 border-gray-300 focus:outline-none focus:border-gray-500 mb-4"
        />
        {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}

        <label htmlFor="email"></label>
        <input
          name="email"
          type="email"
          value={userRegister.email}
          onChange={handleChange}
          placeholder="email"
          className="w-3/4 mx-auto border-b-2 bg-purple-100 border-gray-300 focus:outline-none focus:border-gray-500 mb-4"
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

        <label htmlFor="password"></label>
        <input
          name="password"
          type="password"
          value={userRegister.password}
          onChange={handleChange}
          placeholder="password"
          className="w-3/4 mx-auto border-b-2 bg-purple-100 border-gray-300 focus:outline-none focus:border-gray-500 mb-4"
        />
        {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}

        <label htmlFor="address"></label>
        <input
          name="address"
          type="text"
          value={userRegister.address}
          onChange={handleChange}
          placeholder="dirección"
          className="w-3/4 mx-auto border-b-2 bg-purple-100 border-gray-300 focus:outline-none focus:border-gray-500 mb-4"
        />
        {errors.address && <span className="text-red-500 text-sm">{errors.address}</span>}

        <label htmlFor="phone"></label>
        <input
          name="phone"
          type="tel"
          value={userRegister.phone}
          onChange={handleChange}
          placeholder="celular"
          className="w-3/4 mx-auto border-b-2 bg-purple-100 border-gray-300 focus:outline-none focus:border-gray-500 mb-4"
        />
        {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
        
        <Button text="Registrarme"  type="submit" disabled={Object.keys(errors).length > 0} />
      </form>
      {submissionError && <p className="text-red-500 text-sm">{submissionError}</p>}
      <Button text="¿Ya posees una cuenta? Haz click para ingresar" onClick={handleLoginRedirect}/>
       </div>
  );
}