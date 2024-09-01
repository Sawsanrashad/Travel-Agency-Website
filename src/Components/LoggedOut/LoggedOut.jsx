import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { $loggedIn } from "../../Store";
import { useEffect } from "react";

export const LoggedOut = ({ children }) => {
    const [user, setUser] = useRecoilState($loggedIn);
    let navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user]);

    return !user ? children : null;
}
