import { useTranslation } from "react-i18next";
import Sidenav from '../Sidenav';
import Main from '../../containers/Main';
import Header from '../../components/Header';
import { AccountContext } from "../../contexts/AccountContext";
import React from "react";
import { isLoggedIn } from "../../Account";

class App extends React.Component {

  constructor(props: any){
    super(props);
    this.onLoginStateChange = this.onLoginStateChange.bind(this);
  }

  state = {
    loggedIn: isLoggedIn()
  }

  onLoginStateChange(toggle: boolean) {
    this.setState({ loggedIn: toggle })
  }

  render() {
    return (
      <AccountContext.Provider value={this.state.loggedIn}>
        <div className="App flex h-screen bg-gray-100">
          <Sidenav />
          <div className="flex flex-col flex-1 w-full">
            <Header />
            <Main onLoginState={this.onLoginStateChange} />
          </div>
        </div>
      </AccountContext.Provider>
    );

  }
}

export default App;
