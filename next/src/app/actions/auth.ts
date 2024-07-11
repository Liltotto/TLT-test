'use server'

import { SignupFormSchema, FormState } from '@/app/_lib/definitions'

import { createSession } from '../_lib/session';
import { redirect } from 'next/navigation';

// import { login, generateToken } from '../../../../server/controllers/UserController';

export async function signup(state: FormState, formData: FormData) {
  //1 Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    console.log(validatedFields);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // 2. Prepare data for insertion into database
  const { email, password } = validatedFields.data
  // e.g. Hash the user's password before storing it
  //const hashedPassword = await bcrypt.hash(password, 10)

  // 3. Insert the user into the database or call an Auth Library's API

  const _apiBase = 'http://localhost:3002'

  console.log(email, password);
  const response = await fetch(`${_apiBase}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if(!response.ok) {
    throw new Error(response.statusText)
  }

  const res = await response.json();
  
    // Current steps:
  // 4. Create user session
  await createSession(res.id)
  // 5. Redirect user
  redirect('/goods')

}