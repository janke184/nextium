import React, { useContext, useState } from "react";

export const AuthenticatedContext = React.createContext({});

export const useAuthenticatedContext = () => useContext(AuthenticatedContext);

export function AuthenticatedContextProvider({children}){

    const [user, setUser] = useState(null); 

    return (
        <AuthenticatedContext.Provider value={{user, setUser}}>
            {children}
        </AuthenticatedContext.Provider>
    );
}