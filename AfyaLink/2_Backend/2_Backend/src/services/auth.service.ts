import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { generateToken } from "../utils/jwt";
import { sendMail } from "../utils/sendMail";

const prisma = new PrismaClient();

export async function registerUser(data: { name: string; email: string; password: string }) {
  const hashed = await bcrypt.hash(data.password, 10);
  const user = await prisma.user.create({
    data: { name: data.name, email: data.email, password: hashed },
    select: { id: true, name: true, email: true, role: true, createdAt: true },
  });
  return user;
}

export async function loginUser(data: { email: string; password: string }) {
  const user = await prisma.user.findUnique({ where: { email: data.email } });
  if (!user) throw new Error("User not found");
  const match = await bcrypt.compare(data.password, user.password);
  if (!match) throw new Error("Invalid credentials");
  return generateToken(user.id);
}

export async function sendResetEmail(email: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return;
  const token = crypto.randomBytes(32).toString("hex");
  const expiry = new Date(Date.now() + Number(process.env.RESET_TOKEN_EXPIRY || 3600000));
  await prisma.user.update({
    where: { email },
    data: { resetToken: token, resetTokenExpiry: expiry },
  });
  const link = `${process.env.RESET_URL || "http://localhost:5000"}/api/auth/reset-password/${token}`;
  await sendMail(email, "Password reset", `Reset your password using this link: ${link}`, `<p>Reset: <a href="${link}">${link}</a></p>`);
}

export async function resetPassword(token: string, password: string) {
  const user = await prisma.user.findFirst({ where: { resetToken: token } });
  if (!user) throw new Error("Invalid or expired token");
  if (!user.resetTokenExpiry || user.resetTokenExpiry.getTime() < Date.now()) {
    throw new Error("Token expired");
  }
  const hashed = await bcrypt.hash(password, 10);
  await prisma.user.update({
    where: { id: user.id },
    data: { password: hashed, resetToken: null, resetTokenExpiry: null },
  });
}
