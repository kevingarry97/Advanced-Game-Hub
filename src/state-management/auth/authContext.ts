import { createContext, Dispatch } from "react";
import { AuthAction } from "./AuthProvider";

interface AuthContextType {
    user: string,
    authDispatch: Dispatch<AuthAction>
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;