import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const auth = req.headers.authorization;
    if (!auth) return res.status(401).json({ message: "No token provided" });
    const parts = auth.split(" ");
    if (parts.length !== 2) return res.status(401).json({ message: "Invalid token" });
    const decoded: any = verifyToken(parts[1]);
    // attach user id
    // @ts-ignore
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // @ts-ignore
    const userId = req.userId;
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user || user.role !== "admin") return res.status(403).json({ message: "Forbidden" });
    next();
  } catch (err) {
    next(err);
  }
};
