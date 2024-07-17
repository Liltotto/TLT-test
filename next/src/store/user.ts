// 'use server'

// import { decrypt } from '@/app/_lib/session'
// import { cookies } from 'next/headers'
import { Manufacturer } from "@/components/listWrapper/listWrapper";
import { create } from "zustand";

interface UserState {
  isErrorInvalidUser: boolean;
  setIsErrorInvalidUser: (value: boolean) => void;
  manufacturers: Manufacturer[];
  setManufacturers: (value: Manufacturer[]) => void;
  // setTokenSession: (value: string) => void
}

export const userStore = create<UserState>((set) => ({
  isErrorInvalidUser: false,
  setIsErrorInvalidUser: (value: boolean) => set({ isErrorInvalidUser: value }),
  manufacturers: [],
  setManufacturers: (value: Manufacturer[]) => set({ manufacturers: value }),
  // setTokenSession: async () =>{
  //   const global_token: any = await decrypt(cookies().get('session')?.value);
  //   const token = global_token?.user.token
  //   set({ tokenSession: token })
  // },
  //   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  //   removeAllBears: () => set({ bears: 0 }),
  //   updateBears: (newBears) => set({ bears: newBears }),
}));
