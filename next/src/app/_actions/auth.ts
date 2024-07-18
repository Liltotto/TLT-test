
"use client";

import { SignupFormSchema, FormState } from "@/app/_lib/definitions";

import { createSession } from "../_lib/session";
import { redirect } from "next/navigation";


interface ISignUp {
  state: FormState;
  formData: FormData;
  setIsErrorInvalidUser: (value: boolean) => void;
}

export async function signup({formData, setIsErrorInvalidUser} : ISignUp) {

  const validatedFields = SignupFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  const _apiBase = "http://localhost:3002";

  console.log(email, password);
  const response = await fetch(`${_apiBase}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!response.ok) {
    setIsErrorInvalidUser(true);
    setTimeout(() => {
      setIsErrorInvalidUser(false);
    }, 3000);
  } else {
    const res = await response.json();
    await createSession(res);
    redirect("/goods");
  }
}
