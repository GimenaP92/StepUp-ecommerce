import { Request, Response } from "express";
import { catchedController } from "../utils/catchedController";
import {
  loginUserService,
  registerUserService,
  getUsersService
} from "../services/user.service";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await getUsersService();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error en el controlador al obtener usuarios:", error);
    res.status(500).json({ message: "No se pudieron obtener los usuarios." });
  }
};

export const registerUser = catchedController(
  async (req: Request, res: Response) => {
    const { email, password, name, address, phone } = req.body;
    const newUser = await registerUserService({
      email,
      password,
      name,
      address,
      phone,
    });
    res.status(201).send(newUser);
  }
);

export const login = catchedController(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await loginUserService({ email, password });
  res.status(200).send({
    login: true,
    user: user.user,
    token: user.token,
  });
});
