import { Request, Response } from "express";
import { sendMail } from "../utils/sendMail";

export const testEmail = async (req: Request, res: Response) => {
  const { to } = req.body;
  await sendMail(to, "Test email", "This is a test email from backend.");
  res.json({ message: "Email sent" });
};
