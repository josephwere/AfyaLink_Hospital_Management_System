import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const adminPassword = process.env.ADMIN_PASSWORD || "YOUR_ADMIN_PASSWORD";

  const hashedPassword = await bcrypt.hash(adminPassword, 10);
  
  await prisma.user.upsert({
    where: { email: "josephogwe8@gmail.com" },
    update: {},
    create: {
      fullName: "Joseph Ogwe",
      email: "josephogwe8@gmail.com",
      password: hashedPassword,
      role: "ADMIN",
      phone: "+254700000000"
    },
  });

  console.log("✅ Database seeded with admin: josephogwe8@gmail.com");
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
