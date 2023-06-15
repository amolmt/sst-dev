import { useContext, createContext } from "react";

export const AppContext = createContext<any>(null);

export function useAppContext() {
  return useContext(AppContext);
}
