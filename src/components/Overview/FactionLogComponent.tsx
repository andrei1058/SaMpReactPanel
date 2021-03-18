import React from 'react';
import { Link } from 'react-router-dom';

type LogComponents = {
    message: string
    action: number
    player1: any
    player2: any
    extremity: -1 | 0 | 1
}

export class FactionLogComponent extends React.Component<LogComponents> {

    constructor(props: LogComponents) {
        super(props);
    }

    replaceNames() {
        let response;
        let message = this.props.message.split('{username1}');
        if (message.length == 1) {
            response = message;
        } else {
            let second = message[1].split('{username2}');
            response =
                <>
                    <p>{message[0]}
                        <Link to={'/user/' + this.props.player1?.playerName}>
                            <span className="font-semibold">{this.props.player1?.playerName}</span>
                        </Link>
                        {second.length == 1 ? message[1] :
                            <>
                                {second[0]}
                                <Link to={'/user/' + this.props.player2?.playerName}>
                                    <span className="font-semibold">{this.props.player2?.playerName}</span>
                                </Link>
                                {second[1]}
                            </>
                        }
                    </p>
                </>;
        }
        return response;
    }

    render() {
        if (this.props.action && this.props.action == 1) {
            return (
                <div className="flex flex-row-reverse md:contents">
                    <div className="col-start-1 col-end-5 p-3 rounded-xl my-1 ml-auto bg-white border-green-400 border leading-tight text-sm">
                        {this.replaceNames()}
                    </div>
                    <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                        <div className={"h-full w-6 flex items-center justify-center " + (this.props.extremity == -1 ? "pt-6" :  this.props.extremity == 1 ? "pb-6" : "")}>
                            <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                        </div>
                        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-300 shadow"></div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="flex md:contents">
                    <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                        <div className={"h-full w-6 flex items-center justify-center " + (this.props.extremity == -1 ? "pt-6" :  this.props.extremity == 1 ? "pb-6" : "")}>
                            <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                        </div>
                        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-300 shadow"></div>
                    </div>
                    <div className="col-start-6 col-end-10 p-3 rounded-xl my-1 mr-auto bg-white border border-red-400">
                        <p className="leading-tight text-sm">{this.replaceNames()}</p>
                    </div>
                </div>
            );
        }
    }

}