import { ILoginUser, IRegisterUSer } from "@/interfaces/interfaces";


export const fetchRegisterUser = async (user: IRegisterUSer) => {
    const response = await fetch("http://localhost:3000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      return data;
}

export const fetchLoginUser = async (credentials: ILoginUser) => {
    const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      console.log("Response data from login:", data);
      return data;
    }