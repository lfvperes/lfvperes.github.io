import { createContext, useEffect, useState, useContext } from 'react';
import type { ReactNode } from 'react';

// Define the shape of the data the context will provide
// ... rest of the file is correct ...

// Define the shape of the data the context will provide
type Theme = 'light' | 'dark';
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Create the context. The `undefined` default is fine because we'll always use it within a Provider.
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create the Provider component
type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // State to hold the current theme. Default to 'light' and let the effect correct it.
  const [theme, setTheme] = useState<Theme>('light');

  // This effect runs once on load to set the initial theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      setTheme(savedTheme); // Use saved theme if it exists
    } else {
      setTheme(prefersDark ? 'dark' : 'light'); // Otherwise, use system preference
    }
  }, []);

  // This effect runs whenever the theme changes
  useEffect(() => {
    // This is the key part for Tailwind: add or remove the 'dark' class on the <html> element
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save the user's preference for next time
    localStorage.setItem('theme', theme);
  }, [theme]);

  // The function to flip the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create a custom hook for easily consuming the context
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // This error is helpful for developers, ensuring the hook is used correctly.
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
