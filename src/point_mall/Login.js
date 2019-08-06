import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import DataHelper from '../DataHelper';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    onInputChanged = (event) => {
        const target = event.target;
        if (target.name === 'username') {
            this.setState({
                username: target.value
            });
        } else if (target.name === 'password') {
            this.setState({
                password: target.value
            });
        }
    }

    login = () => {
        axios.post(
            DataHelper.baseURL() + '/o/token/',
            {
                grant_type: 'password',
                client_id: 'OkSfHlf5D77pZxYk1hOTBnmbbDmm1NaSaT3FxQFf',
                username: this.state.username,
                password: this.state.password
            }
            ).then((response) => {
                const token = response.data;
                DataHelper.setAuthToken(token);
                this.props.history.push('/');
            });
    }

    render() {
        return (
            <div>
                <div id="container">
                    <p>
                        <label>아이디</label>
                        <input type="text"
                            value={this.state.username}
                            onChange={this.onInputChanged}
                            name="username"/>
                    </p>
                    <p>
                        <label>비밀번호</label>
                        <input type="password"
                            value={this.state.password}
                            onChange={this.onInputChanged}
                            name="password"/>
                    </p>
                    <button onClick={this.login}>로그인</button>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);