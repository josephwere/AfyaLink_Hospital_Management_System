import { Request, Response } from "express";
import * as AuthService from "../services/auth.service";

export const register = async (req: Request, res: Response) => {
  const user = await AuthService.registerUser(req.body);
  res.status(201).json(user);
};

export const login = async (req: Request, res: Response) => {
  const token = await AuthService.loginUser(req.body);
  res.json({ token });
};

export const forgotPassword = async (req: Request, res: Response) => {
  const { email } = req.body;
  await AuthService.sendResetEmail(email);
  res.json({ message: "If that email exists you will receive a reset link." });
};

export const resetPassword = async (req: Request, res: Response) => {
  const { token } = req.params;
  const { password } = req.body;
  await AuthService.resetPassword(token, password);
  res.json({ message: "Password reset successful" });
};
