import { createContext } from "react";

const AppContextDefaultValues = {
  changeTheme: () => {},
  theme: "light",
};

export const AppContext = createContext(AppContextDefaultValues);
