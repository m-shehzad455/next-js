import {createContext, useContext, useState } from "react";

interface IGlobalStata {
    showSidebar:boolean;
    setShowSidebar: (value: boolean) => void
}

const AppContext = createContext({} as IGlobalStata);

export const AppWrapper = ({children}: any) => {
  const [showSidebar, setShowSidebar] = useState(false);

    return (
        <AppContext.Provider value={{
            showSidebar,
            setShowSidebar,
            
        }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}