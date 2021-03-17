import React from 'react';

var lastColor: number = 0;
const colorList = ['bg-blue-500', 'bg-green-500'];

function renderSeparator() {
    lastColor++;
    if (lastColor >= colorList.length) {
        lastColor = 0;
    }
    return (
        <div className={'w-full h-px ' + colorList[lastColor]}></div>
    );
}

export const ShowNewsArticle = (title: string) => {
    return (
        <div className="bg-white shadow-lg rounded-lg mr-10">
            <div className="row-auto bg-gradient-to-tr from-gray-200 to-indigo-100 -ml-6 -mr-2 shadow-md rounded-xl">
                <img className="h-8 w-8 rounded-full inline-block ml-2 -mt-6 border border-white" src={window.location.origin + '/testAvatar.png'} alt="Avatar" />
                <div className="px-2 text-gray-600 inline-block">
                    <p className="text-xl block font-semibold">{title}</p>
                    <div className="-mt-2">
                        <p className="text-xs inline-block">by andrei1058</p>
                    </div>
                </div>
                <p className="text-xs block float-right pt-2 pr-5">04/03/2021</p>
            </div>
            <p className="px-3 pb-2 text-sm leading-tight my-4 text-gray-600 text-justify">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. </p>
        </div>
    );
}