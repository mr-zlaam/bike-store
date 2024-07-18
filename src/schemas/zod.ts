import { UserRegisterType } from "@/types";
import z from "zod";

export const userRegisterSchema: z.ZodType<UserRegisterType> = z
  .object({
    name: z
      .string({ message: "This field is required!!" })
      .min(3, { message: "Name must contain at least 3 characters " }),
    email: z
      .string({ message: "This field is required!!" })
      .min(3, { message: "Email must contain at least 3 characters" })
      .email({ message: "Invalid email address" }),
    password: z
      .string({ message: "This field is required!!" })
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z
      .string({ message: "This field is required!!" })
      .min(6, { message: "Confirm password must be at least 6 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
