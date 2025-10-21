import { Request, Response } from "express";
import * as UserService from "../services/user.service";

export const getProfile = async (req: Request, res: Response) => {
  // @ts-ignore
  const userId = req.userId;
  const user = await UserService.getById(userId);
  res.json(user);
};

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await UserService.getAll();
  res.json(users);
};

export const updateUserRole = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { role } = req.body;
  const user = await UserService.updateRole(id, role);
  res.json(user);
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  await UserService.remove(id);
  res.json({ message: "User deleted" });
};
