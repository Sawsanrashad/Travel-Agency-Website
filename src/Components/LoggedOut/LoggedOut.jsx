import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { $loggedIn } from "../../Store";
import { useEffect } from "react";

export const LoggedOut = ({ children }) => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get('redirect');
    let navigate = useNavigate();
    const [user, setUser] = useRecoilState($loggedIn);

    useEffect(() => {
        if (user) {
            redirect ? navigate(`/tour/${redirect}`) : navigate("/");
        }
    }, [user]);

    return !user ? children : null;
}
