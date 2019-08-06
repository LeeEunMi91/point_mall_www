import { observable, action, computed } from 'mobx';

export default class AuthStore {
    BASE_URL = 'http://localhost:8003';
<<<<<<< HEAD

=======
    
>>>>>>> 92ac06ca7a9524e45d1acb388a8625cd07e22d3a
    @observable authToken = null;

    constructor() {
        this.authToken = localStorage.getItem('auth_token');
    }

    @action setToken(token) {
        this.authToken = token.token_type + ' ' + token.access_token;
        localStorage.setItem('auth_token', this.authToken);
    }

    @action deleteToken() {
        localStorage.removeItem('auth_token');
        this.authToken = null;
    }

    @computed get isLoggedIn() {
        return this.authToken != null;
    }
}
