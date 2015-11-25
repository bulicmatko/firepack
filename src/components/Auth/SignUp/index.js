
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Sign Up

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

import Input from '../../../_lib/components/Form/Input';
import AccountActions from '../../../actions/AccountActions.js';
import SignUpStore from '../../../stores/SignUpStore.js';

const Style = require('./style.scss');

/**
 *  Sign Up
 */
class SignUp extends Component {

    constructor (props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            error: SignUpStore.getError(),
            isLoading: SignUpStore.getLoadingState()
        };

        this.__handleSignUpStoreDataChange = this._handleSignUpStoreDataChange.bind(this);
    }

    shouldComponentUpdate (nextProps, nextState) {
        return this.props !== nextProps || this.state !== nextState;
    }

    componentDidMount () {
        this._focusInputField('email');

        SignUpStore.addDataChangeListener(this.__handleSignUpStoreDataChange);
    }

    componentWillUnmount () {
        SignUpStore.removeDataChangeListener(this.__handleSignUpStoreDataChange);
        SignUpStore.reset();
    }

    _handleSignUpStoreDataChange () {
        this.setState({
            error: SignUpStore.getError(),
            isLoading: SignUpStore.getLoadingState()
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

        AccountActions.createAccount(email, password);
    }

    _renderInputError (field) {
        return this.state.error.field === field
            ? this.state.error.message
            : null;
    }

    _renderInputFirstName () {
        return (
            <Input
                ref="firstName"
                id="SignUpForm[FirstName]"
                label="First name"
                type="text"
                name="firstName"
                placeholder="John"
                value={this.state.firstName}
                disabled={this.state.isLoading}
                onChange={(e) => this._handleInputChange('firstName', e.target.value)}
                invalid={this.state.error.field === 'firstName'}
                helperText={this._renderInputError('firstName')}
            />
        );
    }

    _renderInputLastName () {
        return (
            <Input
                ref="lastName"
                id="SignUpForm[LastName]"
                label="Last name"
                type="text"
                name="lastName"
                placeholder="Doe"
                value={this.state.lastName}
                disabled={this.state.isLoading}
                onChange={(e) => this._handleInputChange('lastName', e.target.value)}
                invalid={this.state.error.field === 'lastName'}
                helperText={this._renderInputError('lastName')}
            />
        );
    }

    _renderInputEmail () {
        return (
            <Input
                ref="email"
                id="SignUpForm[Email]"
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
                id="SignUpForm[Password]"
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
            <button className="btn" id="SignUpForm[Submit]" type="submit" disabled={this.state.isLoading}>
                <span>{this.state.isLoading ? 'Loading...' : 'Sign up'}</span>
            </button>
        );
    }

    render () {
        return (
            <div className="SignUp">
                <h1>Sign up</h1>
                <form id="SignUpForm" onSubmit={this._handleSubmit.bind(this)}>
                    <div className="form-row">
                        <div className="form-col">
                            {this._renderInputFirstName()}
                        </div>
                        <div className="form-col">
                            {this._renderInputLastName()}
                        </div>
                    </div>
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
                            <li><Link to="/auth/sign-in">Sign in</Link></li>
                        </ul>
                    </div>
                </form>
            </div>
        );
    }

}

// Export Sign Up
export default SignUp;
