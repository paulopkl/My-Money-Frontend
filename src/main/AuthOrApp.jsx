import React from 'react';
import '../common/template/dependencies';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from './App';
import Auth from '../auth/Auth';
import { validateToken } from '../auth/authActions';

class AuthOrApp extends React.Component {

    componentWillMount() {
        const { user } = this.props.auth;
        if (user) {
            this.props.validateToken(user.token);
        }
    }

    render() {
        const { user, validToken } = this.props.auth;
        if (user && validToken) {
            axios.defaults.headers.common['authorization'] = user.token;
            return (
                <App>
                    {this.props.children}
                </App>
            );
        } else if (!user && !validToken) {
            return <Auth />
        } else {
            return false;
        }
    }
}

const mapStateToProps = state => {
    return { auth: state.auth }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ validateToken }, dispatch);
}

const authorapp = connect(mapStateToProps, mapDispatchToProps)(AuthOrApp);

export default authorapp;