<<<<<<< HEAD
import { decorate, observable, autorun } from 'mobx';
=======
import { decorate, observable } from 'mobx';
>>>>>>> e70e8e0d6807ed512c2e9370a01efb54964c6a49

let instance;
class DataHelper {
    authToken = '';

    constructor() {
<<<<<<< HEAD
        if(instance) return instance;
=======
        if (instance) return instance;
>>>>>>> e70e8e0d6807ed512c2e9370a01efb54964c6a49
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

    static baseURL() {
        const dataHelper = new DataHelper();
        return dataHelper.baseURL();
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

    static baseURL() {
        const dataHelper = new DataHelper();
        return dataHelper.baseURL();
    }

    static setAuthToken(token) {
        const dataHelper = new DataHelper();
<<<<<<< HEAD
        return dataHelper.setAuthToken(token);
=======
        dataHelper.setAuthToken(token);
>>>>>>> e70e8e0d6807ed512c2e9370a01efb54964c6a49
    }

    static getAuthToken() {
        const dataHelper = new DataHelper();
        return dataHelper.getAuthToken();
    }

}

decorate(DataHelper, {
    authToken: observable
});

<<<<<<< HEAD
const helper = new DataHelper();

autorun(() => {
    console.log(helper.authToken);
});

=======
>>>>>>> e70e8e0d6807ed512c2e9370a01efb54964c6a49
export default DataHelper;