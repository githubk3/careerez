import {
    createContext,
    useState,
    useEffect,
    Dispatch,
    SetStateAction,
} from "react";
import { useLocation } from "react-router-dom";

import { authService } from "../services/auth.service";

export interface Profile {
    user_id: number;
    email: string;
    username: string;
}

interface ContextValue {
    profile: Profile;
    setProfile: Dispatch<SetStateAction<Profile>>;
}

export const AuthContext = createContext<ContextValue>({
    profile: {
        user_id: 0,
        email: "",
        username: "",
    },
    setProfile: () => {
        console.log();
    },
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [profile, setProfile] = useState<Profile>({
        user_id: 0,
        email: "",
        username: "",
    });

    const location = useLocation();

    const handleGetProfile = async () => {
        const data = await authService.getProfile();

        if (data.statusCode !== 200) {
            setProfile({
                user_id: 0,
                email: "",
                username: "",
            });
            return localStorage.setItem("isAuthenticated", "false");
        }

        localStorage.setItem("isAuthenticated", "true");

        setProfile(data.data);
    };

    useEffect(() => {
        handleGetProfile();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname]);

    return (
        <AuthContext.Provider value={{ profile, setProfile }}>
            {children}
        </AuthContext.Provider>
    );
}
