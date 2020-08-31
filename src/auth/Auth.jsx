import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';

import { login, signup } from './authActions';
import Row from '../common/layout/Row';
import Grid from '../common/layout/Grid';
import If from '../common/operator/If';
import Messages from '../common/msg/Messages';
import Input from '../common/form/InputAuth';

import './auth.css';

class Auth extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { loginMode: true }
    }

    changeMode() {
        this.setState({ loginMode: !this.state.loginMode });
    }

    onSubmit(values) {
        this.state.loginMode ? this.props.login(values) : this.props.signup(values);
    }

    render() {
        const { loginMode } = this.state;
        const { handleSubmit } = this.props;
        return (
            <div className="login-box">
                <div className="login-logo"><b> My</b> Money</div>
                <div className="login-box-body">
                    <p className="login-box-msg">Welcome!</p>
                    <form onSubmit={handleSubmit(v => this.onSubmit(v))}>
                        <Field component={Input} type="input" name="name" placeholder="Name" icon="user"
                            hide={loginMode} />
                        <Field component={Input} type="email" name="email" placeholder="E-mail" 
                            icon="envelope" />
                        <Field component={Input} type="password" name="password" placeholder="Password" 
                            icon="lock" />
                        <Field component={Input} type="password" name="confirm_password" 
                            placeholder="Confirm Password" icon="lock" hide={loginMode} />
                        <Row>
                            <Grid cols="4">
                                <button type="submit" className="btn btn-primary btn-block btn-flat">
                                    {loginMode ? 'Sign In' : 'Sign Up'}
                                </button>
                            </Grid>
                        </Row>
                    </form>
                    <br/>
                    <a onClick={() => this.changeMode()}>
                        {loginMode ? 'New User? Sigup here' : 'Is already Registered? Signin here'}
                    </a>
                </div>
                <Messages />
            </div>
        );
    }
}

// { form: '[Form ID]' }
Auth = reduxForm({ form: 'authForm' })(Auth);

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ login, signup }, dispatch);
}

const auth = connect(null, mapDispatchToProps)(Auth);

export default auth;