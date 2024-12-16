import { createContext, ReactNode, useContext, useState } from "react"
import "./Button.css"

interface Props {

    children: ReactNode,
    // parentMethod: () => void
}

interface ChildrenProps {
    children: ReactNode
}


//


// Definimos los tipos para el tema
type Theme = 'light' | 'dark';

// Interfaz para el contexto del tema
interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

// Creamos el contexto
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider del tema
interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>('light');

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`app ${theme}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

// Hook personalizado para el tema
const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme debe ser usado dentro de ThemeProvider');
    }
    return context;
};


//


export const ColorRed = ({ children }: ChildrenProps) => {
    const { theme } = useTheme();
    console.log(theme);
    
    return (
        <div className={`color-red ${theme}`}>
            {children}
        </div>
    );
};

//El parentmethod funciona trabajando por referencia
export const Button = ({ children }: Props) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`card ${theme}`}>
            <button 
                className={`custom-button ${theme}`} 
                onClick={toggleTheme}
            >
                {children}
            </button>
        </div>
    );
};