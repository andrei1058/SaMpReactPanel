import { Switch, Route } from 'react-router-dom';
import Login from '../../components/Login';
import { Logout } from '../../components/Logout';
import Overview from '../../components/Overview';
import { ArticleEditor } from '../News/AddArticleContainer';

const Main = (propss: any) => {

    return (
        <main className="overflow-y-auto overscroll-none">
            <div className="px-6 mx-auto">
                <Switch>
                    <Route exact path="/" component={Overview} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/logout" component={Logout} />
                    <Route exact path="/news/add" component={ArticleEditor} />
                </Switch>
            </div>
        </main>
    );
}
export default Main;