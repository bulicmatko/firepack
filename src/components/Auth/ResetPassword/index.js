
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Reset Password

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import AccountActions from '../../../actions/AccountActions';
import Input from '../../../_lib/components/Form/Input';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Stores from '../../../stores';
import { Link } from 'react-router';

/**
 *  Reset Password
 */
class ResetPassword extends Component {

    constructor (props) {
        super(props);

        this.state = {
            email: '',
            error: Stores.ResetPasswordStore.getError(),
            isLoading: Stores.ResetPasswordStore.getLoadingState()
        };

        this.__handleResetPasswordStoreDataChange = this._handleResetPasswordStoreDataChange.bind(this);
    }

    shouldComponentUpdate (nextProps, nextState) {
        return this.props !== nextProps || this.state !== nextState;
    }

    componentDidMount () {
        this._focusInputField('email');
        Stores.ResetPasswordStore.addDataChangeListener(this.__handleResetPasswordStoreDataChange);
    }

    componentWillUnmount () {
        Stores.ResetPasswordStore.removeDataChangeListener(this.__handleResetPasswordStoreDataChange);
        Stores.ResetPasswordStore.reset();
    }

    _handleResetPasswordStoreDataChange () {
        this.setState({
            error: Stores.ResetPasswordStore.getError(),
            isLoading: Stores.ResetPasswordStore.getLoadingState()
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

        const { email } = this.state;

        AccountActions.resetAccountPassword(email);
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
                id="ResetPasswordForm[Email]"
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

    _renderButtonSubmit () {
        return (
            <button className="btn" id="ResetPasswordForm[Submit]" type="submit" disabled={this.state.isLoading}>
                <span>{this.state.isLoading ? 'Loading...' : 'Reset password'}</span>
            </button>
        );
    }

    render () {
        return (
            <div className="ResetPassword">
                <h1>Reset password</h1>
                <form id="ResetPasswordForm" onSubmit={this._handleSubmit.bind(this)}>
                    <div className="form-row">
                        {this._renderInputEmail()}
                    </div>
                    <br/><br/>
                    <div className="form-row">
                        {this._renderButtonSubmit()}
                        <ul>
                            <li><Link to="/auth/sign-up">Sign up</Link></li>
                            <li>|</li>
                            <li><Link to="/auth/sign-in">Sign in</Link></li>
                        </ul>
                    </div>
                </form>
            </div>
        );
    }
}

// Reset Password
export default ResetPassword;
