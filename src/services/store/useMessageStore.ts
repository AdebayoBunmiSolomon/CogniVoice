import { create } from "zustand";

interface IMessageStore {
  message: string[];
  setMessage: (value: string[]) => void;
}

export const useMessageStore = create<IMessageStore>((set) => ({
  message: [],
  setMessage: (message) => set({ message: message }),
}));
