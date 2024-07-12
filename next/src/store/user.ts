import { create } from 'zustand'

interface UserState {
  isErrorInvalidUser: boolean
  setIsErrorInvalidUser: (value: boolean) => void
}

export const userStore = create<UserState>((set) => ({
  isErrorInvalidUser: false,
  setIsErrorInvalidUser: (value: boolean) => set({ isErrorInvalidUser: value }),
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
}))