import { create } from "zustand";

interface IIsAuthenticated {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

type isAuthenticatedUserDataType = {
  id: string | number;
  name: string | null;
  avatarUrl: string | null;
};

interface IIsAuthenticatedUserData {
  authenticatedUserData: isAuthenticatedUserDataType;
  setIsAuthenticatedUserData: (value: isAuthenticatedUserDataType) => void;
}

//for capturing authentication is true or false
export const useIsAuthenticatedStore = create<IIsAuthenticated>((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated) =>
    set({ isAuthenticated: isAuthenticated }),
}));

//for storing authenticated user data to store
export const useIsAuthenticatedUserDataStore = create<IIsAuthenticatedUserData>(
  (set) => ({
    authenticatedUserData: {
      id: "" || 0,
      name: "" || null,
      avatarUrl: "" || null,
    },
    setIsAuthenticatedUserData: (authenticatedUserData) =>
      set({ authenticatedUserData: authenticatedUserData }),
  })
);
