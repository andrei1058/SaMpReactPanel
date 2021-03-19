import React from 'react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { getUsername } from '../../Account';
import { AccountContext } from '../../contexts/AccountContext';

const DropdownItem = ({ toTranslate, path, goTo }: any) => {
    const { t } = useTranslation();
    return (
        <Link to={goTo}>
            <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">{toTranslate ? t(path) : path}</p>
        </Link>
    );
};

const ToggleBlur = () => {
    setTimeout(() => {
        if (document.activeElement != null) {
            document.getElementById("user-bell")?.blur();
            document.getElementById("user-menu")?.blur();
        }
    }, 250);
}

class Header extends React.Component {

    state = {
        isAvatarDropDownHidden: true,
        isAvatarFocused: false,
    }

    toggleDropDown() {
        this.setState(
            {
                isAvatarDropDownHidden: !this.state.isAvatarDropDownHidden,
                isAvatarFocused: !this.state.isAvatarFocused,
            });
    }

    render() {
        return (
            <div className="h-13 bg-black shadow-md">
                <div className="float-right mr-2 mt-2">
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6 pb-2">
                            {
                                this.context &&
                                <>
                                    <button id="user-bell" onFocus={() => ToggleBlur()} className="p-1 rounded-full text-white-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                        {/* Heroicon name: outline/bell */}
                                        <svg className="h-6 w-6 text-white hover:text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                        </svg>
                                    </button>

                                    {/* Profile dropdown */}
                                    <div className="ml-3 relativ" onClick={() => this.toggleDropDown()}>
                                        <div>
                                            <button onFocus={() => ToggleBlur()} className="max-w-xs bg-indigo-100 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
                                                <img className="h-8 w-8 rounded-full" src={window.location.origin + '/testAvatar.png'} alt="Avatar" />
                                            </button>
                                        </div>
                                        <div onMouseLeave={() => this.toggleDropDown()} hidden={this.state.isAvatarDropDownHidden} className="origin-top-right absolute right-0 mt-3 w-30 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 mr-1" role="menu" aria-orientation="vertical" aria-labelledby="user-menu" id="profile-dropdown">
                                            <DropdownItem path={getUsername()} goTo={getUsername()} />
                                            <DropdownItem toTranslate={true} path='header.log-out' goTo='logout' />
                                        </div>
                                    </div>
                                </>
                            }
                            {
                                !this.context &&
                                <Link to='/login'>
                                    <button id="login-btn" className="text-white mr-5 hover:text-yellow-400" onClick={() => document.getElementById("login-btn")?.blur()}>
                                        <svg className="inline-block h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        <p className="inline mr-2">Log In</p>
                                    </button>
                                </Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};
Header.contextType = AccountContext;
export default Header;