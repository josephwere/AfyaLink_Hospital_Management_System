import bcrypt from "bcryptjs";
export const hash = (p: string) => bcrypt.hash(p, 10);
