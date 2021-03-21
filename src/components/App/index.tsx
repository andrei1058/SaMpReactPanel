import Sidenav from '../Sidenav';
import Main from '../../containers/Main';
import Header from '../../components/Header';
import React from "react";
import { AccountProvider } from "../../containers/Account";

class App extends React.Component {

  render() {
    return (
      <AccountProvider>
        <div className="App flex h-screen bg-gray-100">
          <Sidenav />
          <div className="flex flex-col flex-1 w-full">
            <Header />
            <Main />
          </div>
        </div>
      </AccountProvider>
    );

  }
}

export default App;
