import React from 'react';
import ReactDOM from 'react-dom';
import "tailwindcss/tailwind.css"
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import {BrowserRouter} from 'react-router-dom';

import lang_en from './translations/en.json';
import UserAccount from './containers/Account';

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'en',
    resources: {
      en: {
        translation: lang_en
      }
    }
});

UserAccount.init();

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
