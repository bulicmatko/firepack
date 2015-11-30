
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Sign In

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import Input from '../../../_lib/components/Form/Input';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
// import SignInStore from '../../../stores/SignInStore';
import UserActions from '../../../actions/UserActions';
import { Link } from 'react-router';
import Stores from '../../../stores';

/**
 *  Sign In
 */
class SignIn extends Component {

    constructor (props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: Stores.SignInStore.getError(),
            isLoading: Stores.SignInStore.getLoadingState()
        };

        this.__handleSignInStoreDataChange = this._handleSignInStoreDataChange.bind(this);
    }

    shouldComponentUpdate (nextProps, nextState) {
        return this.props !== nextProps || this.state !== nextState;
    }

    componentDidMount () {
        this._focusInputField('email');
        Stores.SignInStore.addDataChangeListener(this.__handleSignInStoreDataChange);
    }

    componentWillUnmount () {
        Stores.SignInStore.removeDataChangeListener(this.__handleSignInStoreDataChange);
        Stores.SignInStore.reset();
    }

    _handleSignInStoreDataChange () {
        this.setState({
            error: Stores.SignInStore.getError(),
            isLoading: Stores.SignInStore.getLoadingState()
        }, () => this._focusInputField(this.state.error.field));
    }

    _focusInputField (field) {
        this.refs[field] && ReactDOM.findDOMNode(this.refs[field]).querySelector('input').focus();
    }

    _handleInputChange (name, value) {
        this.setState({[name]: value});
    }

    _handleSubmit (event) {
        event.preventDefault();

        const { email, password } = this.state;

        UserActions.authenticateUser(email, password);
    }

    _renderInputError (field) {
        return this.state.error.field === field
            ? this.state.error.message
            : null;
    }

    _renderInputEmail () {
        return (
            <Input
                ref="email"
                id="SignInForm[Email]"
                label="Email"
                type="email"
                name="email"
                placeholder="john.doe@email.com"
                value={this.state.email}
                disabled={this.state.isLoading}
                onChange={(e) => this._handleInputChange('email', e.target.value)}
                invalid={this.state.error.field === 'email'}
                helperText={this._renderInputError('email')}
            />
        );
    }

    _renderInputPassword () {
        return (
            <Input
                ref="password"
                id="SignInForm[Password]"
                label="Password"
                type="password"
                name="password"
                placeholder="Pa5sW0rd"
                value={this.state.password}
                disabled={this.state.isLoading}
                onChange={(e) => this._handleInputChange('password', e.target.value)}
                invalid={this.state.error.field === 'password'}
                helperText={this._renderInputError('password')}
            />
        );
    }

    _renderButtonSubmit () {
        return (
            <button className="btn" id="SignInForm[Submit]" type="submit" disabled={this.state.isLoading}>
                <span>{this.state.isLoading ? 'Loading...' : 'Sign in'}</span>
            </button>
        );
    }

    render () {
        return (
            <div className="SignIn">
                <h1>Sign in</h1>
                <form id="SignInForm" onSubmit={this._handleSubmit.bind(this)}>
                    <div className="form-row">
                        {this._renderInputEmail()}
                    </div>
                    <div className="form-row">
                        {this._renderInputPassword()}
                    </div>
                    <br/><br/>
                    <div className="form-row">
                        {this._renderButtonSubmit()}
                        <ul>
                            <li><Link to="/auth/sign-up">Sign up</Link></li>
                            <li>|</li>
                            <li><Link to="/auth/reset-password">Reset password</Link></li>
                        </ul>
                    </div>
                </form>
            </div>
        );
    }

}

// Export Sign In
export default SignIn;
