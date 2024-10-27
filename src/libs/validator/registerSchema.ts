import { z } from "zod";

export const registerSchema = z.object({
  name: z.string(),
  email: z.string().email("INI BUKAN EMAIL AH ELAH :)"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  address: z.string().optional(),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
