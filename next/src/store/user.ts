
import { Manufacturer } from "@/components/listWrapper/listWrapper";
import { create } from "zustand";

interface UserState {
  isErrorInvalidUser: boolean;
  setIsErrorInvalidUser: (value: boolean) => void;
  manufacturers: Manufacturer[];
  setManufacturers: (value: Manufacturer[]) => void;
  isCreatingProduct: boolean;
  setIsCreatingProduct: (value: boolean) => void;
}

export const userStore = create<UserState>((set) => ({
  isErrorInvalidUser: false,
  setIsErrorInvalidUser: (value: boolean) => set({ isErrorInvalidUser: value }),
  manufacturers: [],
  setManufacturers: (value: Manufacturer[]) => set({ manufacturers: value }),
  isCreatingProduct: false,
  setIsCreatingProduct: (value: boolean) => set({ isCreatingProduct: value }),
}));
