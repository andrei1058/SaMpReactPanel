import { useTranslation } from "react-i18next";
import React from 'react';
import Sidenav from '../Sidenav';
import Main from '../../containers/Main';
import Header from '../../components/Header';

function App() {

  const {t} = useTranslation();

  return (
    <div className="App flex h-screen bg-gray-100">
      <Sidenav />
      <div className="flex flex-col flex-1 w-full">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
