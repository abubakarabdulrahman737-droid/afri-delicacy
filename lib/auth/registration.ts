import argon2 from "argon2";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

export const registrationSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().email(),
  password: z.string().min(8).max(128),
  phone: z.string().trim().max(30).optional(),
  whatsappNumber: z.string().trim().max(30).optional(),
});

export async function registerCustomer(input: unknown) {
  const data = registrationSchema.parse(input);
  const email = data.email.toLowerCase();

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    throw new Error("An account with this email already exists.");
  }

  const passwordHash = await argon2.hash(data.password);

  return prisma.user.create({
    data: {
      name: data.name,
      email,
      passwordHash,
      phone: data.phone,
      whatsappNumber: data.whatsappNumber,
      role: "CUSTOMER",
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
    },
  });
}
