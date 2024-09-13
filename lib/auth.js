import bcrypt from "bcrypt";

export async function passwordHash(password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
}
