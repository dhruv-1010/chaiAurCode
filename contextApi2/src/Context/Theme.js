import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});
export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
// here we are building a custom context in which we are trying to build a shared context ThemeContext
// In summary, this code sets up a React context (ThemeContext) for managing
// the theme mode in a React application. The ThemeProvider should wrap the components
//  that need access to the theme, and the useTheme hook provides a way to consume the theme context within functional components.
