import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      { name: "Admin User", email: "admin@example.com", password: "password", role: "admin" },
    ],
    skipDuplicates: true,
  });
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
