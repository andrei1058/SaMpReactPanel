import React from 'react';
import 'whatwg-fetch';

type CountProps = {
    uri: string | undefined;
    msg: string | undefined;
    icon: any | undefined;
}

const Loading = () => {
    return (
        <img src="%PUBLIC_URL%/loading.gif" />
    );
}

class CountItemComponent extends React.Component<CountProps> {

    uri: string | undefined;
    msg: string | undefined;
    icon: JSX.Element | undefined;

    constructor(props: CountProps) {
        super(props);
    }

    state = {
        amount: 0,
    }

    fetchData() {
        fetch('/api' + this.props.uri)
            .then(response => response.json())
            .then(json => {
                this.setState({ amount: json.amount });
            })
            .catch(() => {
                this.setState({ amount: 0 })
            });

    }

    componentDidMount() {
        this.fetchData();
        setInterval(() => {
            this.fetchData();
        }, 50_000);
    }

    render() {

        return (
            <div className="w-auto h-20 inline-block shadow-md">
                {this.props.icon()}
                <div className="ml-3 mt-1 text-black">
                    <p className="float-none">{this.props.msg}</p>
                    <h1 className="text-3xl w-min pl-1 pr-1 rounded-lg">{this.state.amount}</h1>
                </div>
            </div>
        );
    }

}


export default CountItemComponent;