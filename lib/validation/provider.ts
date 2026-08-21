import { z } from "zod";

export const providerSchema = z.object({
  businessName: z.string().trim().min(2).max(120),
  businessType: z.enum(["KITCHEN", "RESTAURANT", "HOTEL", "FOOD_VENDOR"]),
  description: z.string().trim().max(1000).optional(),
  phone: z.string().trim().max(30).optional(),
  whatsappNumber: z.string().trim().max(30).optional(),
  address: z.string().trim().min(3).max(250),
  city: z.string().trim().min(2).max(80),
  state: z.string().trim().max(80).optional(),
  country: z.string().trim().min(2).max(80),
  latitude: z.number().min(-90).max(90).nullable().optional(),
  longitude: z.number().min(-180).max(180).nullable().optional(),
  openingTime: z.string().trim().max(10).optional(),
  closingTime: z.string().trim().max(10).optional(),
});

export type ProviderInput = z.infer<typeof providerSchema>;
