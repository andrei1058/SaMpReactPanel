import React from 'react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

const RenderCategoryDivider = ({name}) => {
    return (
        <p className="text-sm mt-4 ml-4 pb-1 font-sans font-thin">{name}</p>
    );
}

export default function SidebarContent() {

    const {t} = useTranslation();

    return(
        <div className="py-4 text-gray-500 pl-4">
            <a className="ml-6 text-lg font-bold text-gray-800 pr-9" href="#">
                Samp Panel
            </a>
            <ul className="mt-8">
                <li className="relative px-4 py-1">
                    <Link to={''} className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span className="pl-4">{t('sidebar.index')}</span> 
                    </Link>
                </li>
                
                <RenderCategoryDivider name={t('sidebar.category.groups')}/>
                <li className="relative px-4 py-1">
                    <Link to={''} className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                    <span className="pl-4">{t('sidebar.factions')}</span>
                    </Link>
                </li>
                <li className="relative px-4 py-1">
                    <Link to={''} className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="pl-4">{t('sidebar.clans')}</span>
                    </Link>
                </li>
                <li className="relative px-4 py-1">
                    <Link to={''} className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="pl-4">{t('sidebar.staff')}</span>
                    </Link>
                </li>

                <RenderCategoryDivider name={t('sidebar.category.stats')} />
                <li className="relative px-4 py-1">
                    <Link to={''} className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                    </svg>
                    <span className="pl-4">{t('sidebar.bans')}</span>
                    </Link>
                </li>
                <li className="relative px-4 py-1">
                    <Link to={''} className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                    <span className="pl-4">{t('sidebar.wars')}</span>
                    </Link>
                </li>
                <li className="relative px-4 py-1">
                    <Link to={''} className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <span className="pl-4">{t('sidebar.top-player')}</span>
                    </Link>
                </li>
                <li className="relative px-4 py-1">
                    <Link to={''} className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path fill="#fff" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                    </svg>
                    <span className="pl-4">{t('sidebar.dealership')}</span>
                    </Link>
                </li>

                <RenderCategoryDivider name={t('sidebar.category.support')} />
                <li className="relative px-4 py-1">
                    <Link to={''} className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                    </svg>
                    <span className="pl-4">{t('sidebar.support')}</span>
                    </Link>
                </li>

                <li className="ml-1 bottom-7 absolute">
                    <Link to={''} className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                    <span className="pl-4">{t('sidebar.search')}</span>
                    </Link>
                </li>
            </ul>


            

            <div className="ml-3 bottom-1 absolute text-xs">
                <p>v0.0.1 (<Link to={''} className="hover:underline hover:text-blue-400">Credits</Link>)</p>
            </div>
        </div>
    );
}