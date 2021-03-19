import { Redirect } from 'react-router';
import { logOut } from '../../Account';

export const Logout = (props: any) => {
    logOut();
    props.onLoginState(false);
    return <Redirect to="/" />;
}