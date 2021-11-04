import {createContext, useState} from "react";
import {useHistory} from "react-router-dom";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const history = useHistory();
    const [isAuth, toggleIsAuth] = useState(false);

    function signIn() {
        console.log("Gebruiker is ingelogd")
        toggleIsAuth(true);
        history.push("/profile");
    }

    function signOut() {
        toggleIsAuth(false)
        history.push("/")
        console.log("Gebruiker is uitgelogd")
    }

    const data = {
        isAuthenticated: isAuth,
        singInTrue: signIn,
        signInFalse: signOut,
    }

    return(
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;