import { Switch, Route } from 'react-router-dom';
import { logOut } from '../../Account';
import Login from '../../components/Login';
import { Logout } from '../../components/Logout';
import Overview from '../../components/Overview';

const Main = (propss: any)  =>{

    return (
        <main className="overflow-y-auto overscroll-none">
            <div className="container px-6 mx-auto">
                <Switch>
                    <Route exact path="/" component={Overview} />
                    <Route exact path="/login" render={(props) => (<Login onLoginState={propss.onLoginState} />)} />
                    <Route exact path="/logout" render={(props) => (<Logout onLoginState={propss.onLoginState} />)} />
                </Switch>
            </div>
        </main>
    );
}
export default Main;