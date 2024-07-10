import { createContext, ReactNode, useContext, useEffect } from "react";
import { useLocalStorageState } from '../hook/useLocalStorageState';



type DarkModeCtxType = {
    isDarkMode: boolean;
    toggleDarkMode: () => void
  }

const DarkModeContext = createContext<DarkModeCtxType>({isDarkMode: false,
 toggleDarkMode: () => {}
}
)

function DarkModeProvider({children}:{children: ReactNode}){
    const [isDarkMode, setIsDarkMode] = useLocalStorageState(false,"isDarkMode")

    useEffect(function(){
        if(isDarkMode){
            document.documentElement.classList.add("dark");
        }
        if(!isDarkMode){
            document.documentElement.classList.remove("dark");
        }
    },[isDarkMode]);

    function toggleDarkMode(){
        setIsDarkMode((isDark: boolean) => !isDark)
    }

    return(
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}

function useDarkMode(){
    const context = useContext(DarkModeContext)
    if (context === undefined) throw new Error('DarkModeContext was outside of DarkModeProvider')
    return context;
}

export {DarkModeProvider, useDarkMode}

