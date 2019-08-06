import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
<<<<<<< HEAD
import DataHelper from '../DataHelper';
import { inject, observer } from 'mobx-react';
=======
import { observer } from 'mobx-react';
import DataHelper from '../DataHelper';
import { inject } from 'mobx-react';
>>>>>>> 92ac06ca7a9524e45d1acb388a8625cd07e22d3a

@inject('authStore')
@observer
class Header extends React.Component {

    helper = new DataHelper();
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        };
    }
    
    componentDidMount() {
        this.indexCategories();
    }

    indexCategories() {
        axios.get(DataHelper.baseURL() + '/categories/')
            .then((response) => {
                const categories = response.data;
                this.setState({
                    categories: categories
                });
            });
    }

    logout = () => {
        const { authStore } = this.props;
        authStore.deleteToken();
    }

    render() {
        const { authStore } = this.props;
        const categories = this.state.categories.map((category) => {
            return (
                <Link key={category.id} to={'/categories/' + category.id}>{category.title}</Link>
            )
        });
        return (
            <header>
                <Link to="/">PointMall</Link>
                {categories}
                <div className="header-right">
                    <Link to="/cart/items">Cart</Link>
                    {
                        authStore.isLoggedIn && <Link to="/me/items">My Items</Link>
                    }
                    {
                        authStore.isLoggedIn ?
                            <button onClick={this.logout}>Logout</button> :
<<<<<<< HEAD
                            <Link to="/login">Login</Link> 
=======
                            <Link to="/login">Login</Link>
>>>>>>> 92ac06ca7a9524e45d1acb388a8625cd07e22d3a
                    }
                </div>
            </header>
        );
    }
}


export default Header;
