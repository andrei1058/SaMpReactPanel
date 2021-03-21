import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Redirect } from 'react-router-dom';
import UserAccount, { AccountContainer, AccountSubscribe } from '../../containers/Account';

export const Login = (props: any) => {
    var [badCredentials, setBadCredentials] = useState(false);
    const { t } = useTranslation();

    var user: string;
    var pass: string;

    const onUserChange = (e: any) => {
        user = e.target.value;
    }

    const onPassChange = (e: any) => {
        pass = e.target.value;
    }

    const loginRequest = (e: any) => {
        e.preventDefault();
        UserAccount.logIn(user, pass);
    }

    return (

        <AccountSubscribe>
            {(account : AccountContainer) => (<>
                {account.state.loggedIn && <Redirect to={"/"} />}

                <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full">
                        <div className="mt-20">
                            <img className="mx-auto h-20 w-auto" src="/assets/login-logo.png" alt="Server Logo" />
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                                {t("login.under-logo")}
                            </h2>
                        </div>
                        <form method="POST" className="mt-8 space-y-6" onSubmit={loginRequest}>
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="username" className="sr-only">{t("login.label-username")}</label>
                                    <input onChange={onUserChange} id="username" name="username" type="text" autoComplete="username" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder={t("login.label-username")} />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">{t("login.label-password")}</label>
                                    <input onChange={onPassChange} id="password" name="password" type="password" autoComplete="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder={t("login.label-password")} />
                                </div>
                            </div>

                            {badCredentials && <p>{t("login.bad-credentials")}</p>}


                            <div className="pb-5">
                                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    {t("login.login-button")}
                                </button>
                            </div>
                        </form>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                {t("login.recover-button")}
                            </a>
                        </div>
                    </div>
                </div>
            </>
            )}
        </AccountSubscribe>


    );
}
export default Login;