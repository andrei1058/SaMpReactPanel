import { Redirect } from 'react-router';
import UserAccount from '../../containers/Account';

export const Logout = (props: any) => {
    UserAccount.logOut();
    return <Redirect to="/" />;
}