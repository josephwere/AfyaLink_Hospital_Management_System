import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getById(id: string) {
  return prisma.user.findUnique({ where: { id }, select: { id: true, name: true, email: true, role: true, createdAt: true } });
}

export async function getAll() {
  return prisma.user.findMany({ select: { id: true, name: true, email: true, role: true, createdAt: true } });
}

export async function updateRole(id: string, role: string) {
  return prisma.user.update({ where: { id }, data: { role }, select: { id: true, name: true, email: true, role: true } });
}

export async function remove(id: string) {
  return prisma.user.delete({ where: { id } });
}
