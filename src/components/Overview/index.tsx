import React from 'react';
import CountItemComponent from './CountItemComponent';
import { useTranslation } from 'react-i18next';
import { ShowNewsArticle } from './NewsArticleComponent';

const usersIcon = () => {
    return (
        <svg className="float-right w-14 h-14 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
    );
};

const adminIcon = () => {
    return (
        <svg className="float-right w-14 h-14 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
    );
};

const leaderIcon = () => {
    return (
        <svg className="float-right w-14 h-14 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
    );
};

const carsIcon = () => {
    return (
        <svg className="float-right w-14 h-14 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path fill="#fff" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
    );
};

const housesIcon = () => {
    return (
        <svg className="float-right w-14 h-14 text-pink-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
    );
};


export default function Overview() {
    const { t } = useTranslation();
    return (
        <div className="mt-5 pb-5 pt-5">
            <div className="text-gray-500 grid grid-cols-5 gap-4">
                <CountItemComponent uri={'/users/count?type=online'} icon={usersIcon} msg={t('overview.online-count')} />
                <CountItemComponent uri={'/users/count?type=admin_online'} icon={adminIcon} msg={t('overview.online-admins')} />
                <CountItemComponent uri={'/users/count?type=leader_online'} icon={leaderIcon} msg={t('overview.online-leaders')} />
                <CountItemComponent uri={'/cars/count?type=owned'} icon={carsIcon} msg={t('overview.owned-cars')} />
                <CountItemComponent uri={'/houses/count?type=owned'} icon={housesIcon} msg={t('overview.owned-houses')} />
            </div>
            <div className="mt-7">
                <div className="grid grid-cols-2 gap-7">
                    <div className="w-2/2 h-auto inline-block">
                        <p className="text-lg font-bold text-gray-700">News</p>
                        <div className="mt-1 gap-2 space-y-7 ml-10">
                            {ShowNewsArticle("Update")}
                            {ShowNewsArticle("New faction added!")}
                            {ShowNewsArticle("New faction added!")}
                            {ShowNewsArticle("New faction added!")}
                            {ShowNewsArticle("New faction added!")}
                        </div>
                    </div>
                    <div className="w-2/2 h-auto inline-block">
                        <p className="text-lg font-bold text-gray-800">Factions History</p>
                        <div className="container">
                            <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2">
                                <div className="flex flex-row-reverse md:contents">
                                    <div className="col-start-1 col-end-5 p-3 rounded-xl my-1 ml-auto bg-white border-green-500 border shadow-md">
                                        <h3 className="font-semibold text-md mb-1">Lorem ipsum</h3>
                                        <p className="leading-tight text-sm">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                    <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                                        <div className="h-full w-6 flex items-center justify-center">
                                            <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                                        </div>
                                        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-300 shadow"></div>
                                    </div>
                                </div>

                                <div className="flex md:contents">
                                    <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                                        <div className="h-full w-6 flex items-center justify-center">
                                            <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                                        </div>
                                        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow"></div>
                                    </div>
                                    <div className="col-start-6 col-end-10 p-3 rounded-xl my-1 mr-auto bg-white border border-red-500 shadow-md">
                                        <h3 className="font-semibold text-md mb-1">Lorem ipsum</h3>
                                        <p className="leading-tight text-sm">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex md:contents">
                                    <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                                        <div className="h-full w-6 flex items-center justify-center">
                                            <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                                        </div>
                                        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow"></div>
                                    </div>
                                    <div className="col-start-6 col-end-10 p-3 rounded-xl my-1 mr-auto bg-white border border-red-500 shadow-md">
                                        <h3 className="font-semibold text-md mb-1">Lorem ipsum</h3>
                                        <p className="leading-tight text-sm">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-row-reverse md:contents">
                                    <div className="col-start-1 col-end-5 p-3 rounded-xl my-1 ml-auto bg-white border-green-500 border shadow-md">
                                        <h3 className="font-semibold text-md mb-1">Lorem ipsum</h3>
                                        <p className="leading-tight text-sm">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                    <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                                        <div className="h-full w-6 flex items-center justify-center">
                                            <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                                        </div>
                                        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow"></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}