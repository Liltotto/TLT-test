'use client'
import { userStore } from "@/store/user";

export const checkError = () => {

        const setError = userStore((state) => state.setIsErrorInvalidUser);
        setError(true);
        console.log(userStore((state) => state.isErrorInvalidUser));
}