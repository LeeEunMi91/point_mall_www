import { observable, computed } from 'mobx';

let instance;
class DataHelper {
<<<<<<< HEAD
    @observable authToken = '';
=======
    @observable authToken = null;
>>>>>>> 92ac06ca7a9524e45d1acb388a8625cd07e22d3a

    constructor() {
        if (instance) return instance;
        instance = this;
    }

    baseURL() {
        return 'http://localhost:8003';
    }

    setAuthToken(token) {
        this.authToken = token.token_type + ' ' + token.access_token;
        localStorage.setItem('auth_token', this.authToken);
    }

    getAuthToken() {
        if (this.authToken == null) {
            this.authToken = localStorage.getItem('auth_token');
        }
        return this.authToken;
    }

    deleteToken() {
        localStorage.removeItem('auth_token');
        this.authToken = null;
    }

    @computed
    get isLoggedIn() {
<<<<<<< HEAD
        return this.authToken != null || localStorage.removeItem('auth_token') != null;
=======
        return this.authToken != null || localStorage.getItem('auth_token') != null;
>>>>>>> 92ac06ca7a9524e45d1acb388a8625cd07e22d3a
    }

    static baseURL() {
        const dataHelper = new DataHelper();
        return dataHelper.baseURL();
    }

    static setAuthToken(token) {
        const dataHelper = new DataHelper();
        return dataHelper.setAuthToken(token);
    }

    static getAuthToken() {
        const dataHelper = new DataHelper();
        return dataHelper.getAuthToken();
    }

<<<<<<< HEAD
}

=======
>>>>>>> 92ac06ca7a9524e45d1acb388a8625cd07e22d3a
export default DataHelper;