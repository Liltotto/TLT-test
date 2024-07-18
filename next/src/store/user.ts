
import { Manufacturer } from "@/components/listWrapper/listWrapper";
import { FieldValues, UseFormHandleSubmit } from "react-hook-form";
import { create } from "zustand";

interface UserState {
  isErrorInvalidUser: boolean;
  setIsErrorInvalidUser: (value: boolean) => void;
  manufacturers: Manufacturer[];
  setManufacturers: (value: Manufacturer[]) => void;
  isCreatingProduct: boolean;
  setIsCreatingProduct: (value: boolean) => void;
}

interface FormState {
  handleSubmit:  UseFormHandleSubmit<FieldValues, undefined> | null;
  setHandleSubmit: (value: UseFormHandleSubmit<FieldValues, undefined> | null) => void;
}

export const userStore = create<UserState>((set) => ({
  isErrorInvalidUser: false,
  setIsErrorInvalidUser: (value: boolean) => set({ isErrorInvalidUser: value }),
  manufacturers: [],
  setManufacturers: (value: Manufacturer[]) => set({ manufacturers: value }),
  isCreatingProduct: false,
  setIsCreatingProduct: (value: boolean) => set({ isCreatingProduct: value }),
}));

export const formStore = create<FormState>((set) => ({
  handleSubmit: null,
  setHandleSubmit: (value: UseFormHandleSubmit<FieldValues, undefined> | null) => set({ handleSubmit: value }),
}));
