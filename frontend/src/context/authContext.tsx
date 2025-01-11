import { createContext, ReactNode, useContext, useState } from "react";

interface AuthProviderProps {
    isLoggedIn: boolean,
    setIsLoggedIn: Function
}

const AuthContext = createContext<AuthProviderProps|null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    return <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () : AuthProviderProps=> {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error('useAuth must be used with AuthProviderProps');
    }
    return context;
};   