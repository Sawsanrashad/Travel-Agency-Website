import { $loggedIn } from '../../Store';
import { useRecoilState } from 'recoil';

export const LoggedIn = ({ children }) => {
    const [user, setUser] = useRecoilState($loggedIn)
    if (user == null) return null;
    return (children)

}
