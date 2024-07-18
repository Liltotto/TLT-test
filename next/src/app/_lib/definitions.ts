import { z } from "zod";

export const SignupFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    .regex(/[0-9]/, { message: "Contain at least one number." })
    .trim(),
});

export const LoginFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z.string().min(1, { message: "Password field must not be empty." }),
});

export type FormState =
  | {
      errors?: {
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export const CreateOrEditFormSchema = z.object({
  name:z.string().min(1, { message: "This field must not be empty." }),
  quantity:z.number().min(1, { message: "This field must not be empty." }),
  price: z.string().min(1, { message: "This field must not be empty." }),
});

export type SessionPayload = {
  user: any;
};
