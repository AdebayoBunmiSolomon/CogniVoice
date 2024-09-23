import { create } from "zustand";

interface IMessageStore {
  likeMessage: string[];
  setLikeMessage: (value: string[]) => void;
}

export const useLikedMessageStore = create<IMessageStore>((set) => ({
  likeMessage: [],
  setLikeMessage: (likeMessage) => set({ likeMessage: likeMessage }),
}));
