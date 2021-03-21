import { Container, Provider, Subscribe } from "unstated";

type AccountState = {
    loggedIn: boolean,
    skin: number,
    username: string,
    adminLevel: number,
    helperLevel: number
}

export class AccountContainer extends Container<AccountState> {

    constructor() {
        super();
        this.state = {
            loggedIn: false,
            skin: 0,
            username: 'Unknown',
            adminLevel: 0,
            helperLevel: 0
        }
    }

    parseAccountObject(json: any) {
        if (json.token) {
            localStorage.setItem("token", json.token);
        }
        localStorage.setItem("username", json.user.playerName);
        this.setState({
            loggedIn: true,
            skin: json.user.playerSkin,
            username: json.user.playerName,
            adminLevel: json.user.playerAdmin,
            helperLevel: json.user.playerHelper,
        })
    }

    init() {
        let token = localStorage.getItem("token");
        if (token) {
            fetch('/api/auth/get', {
                method: "POST",
                headers: {
                    'x-access-token': token
                }
            }).then(response => response.json())
                .then(response => {
                    if (response.auth) {
                        this.parseAccountObject(response);
                    }
                }).catch(errr => {
                    console.log(errr);
                })
        }
    }

    logIn(username: string, password: string): boolean {
        fetch('/api/auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username: username, password: password }),
        }).then(response => response.json())
            .then(json => {
                if (json.auth) {
                    this.parseAccountObject(json)
                }
            }).catch(err => {
                console.log(err);
            })
        return this.state.loggedIn;
    }

    logOut() {
        this.setState({
            loggedIn: false, skin: 0,
            username: 'n/a',
            adminLevel: 0,
            helperLevel: 0,
        });
        // send destroy token request
        localStorage.clear();
    }

    getAvatarUrl(): string {
        return 'http://sampapi.andrei1058.com/avatar/' + this.state.skin + '/small';
    }

    getAvatarUrlForId(id: number): string {
        return 'http://sampapi.andrei1058.com/avatar/' + id + '/small';
    }

    canManageNews(): boolean {
        return this.state.adminLevel >= 5;
    }
}

const UserAccount: AccountContainer = new AccountContainer();

export const AccountProvider = (props: any) => {
    return <Provider inject={[UserAccount]}>{props.children}</Provider>
}

export const AccountSubscribe = (props: any) => {
    return <Subscribe to={[UserAccount]}>{props.children}</Subscribe>
}

export default UserAccount;