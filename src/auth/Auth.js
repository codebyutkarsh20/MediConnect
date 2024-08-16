
import React, { createContext, useState } from "react";

const AuthContext = createContext();

const Auth = ({ children }) => {
    const [loggedIn, setloggedIn] = useState(false);
    

    const [user, setUser] = useState({
      name: "John Doe",
      email: "johndoe@example.com",
      bio: "Web developer with a passion for creating innovative and efficient web applications.",
      avatar: "https://example.com/path-to-avatar.jpg",
      Password:"password"
    });
    
    return (
        <AuthContext.Provider value={{ user,setUser, loggedIn, setloggedIn }}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default Auth; // Default export for Auth
export { AuthContext };
