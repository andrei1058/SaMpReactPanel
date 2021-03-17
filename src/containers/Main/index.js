import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Overview from '../../components/Overview';

function Main() {
    return (
        <main className="overflow-y-auto overscroll-none">
            <div className="container px-6 mx-auto">
                <Switch>
                    <Route exact path="/" component={Overview} />
                </Switch>
            </div>
        </main>
    );
}
export default Main;