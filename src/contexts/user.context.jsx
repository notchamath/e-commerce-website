import { createContext, useState } from "react";

//actual value you need to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

// the component
export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}