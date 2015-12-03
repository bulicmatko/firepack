
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Account

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component } from 'react';

import Input from '../../../../_lib/components/Form/Input';

/**
 *  Account
 */
class Account extends Component {

    render () {
        return (
            <div>
                <div className="App--Topbar">
                    <h1 className="title">
                        <i className="fa fa-fw fa-key"></i>
                        <span>Account</span>
                    </h1>
                </div>
                <div className="App--Content">
                    <h3>Change email</h3>
                    <p className="muted">Change your account email.</p>
                    <div>
                        <Input value={'bulicmatko@gmail.com'}/>
                        <br/>
                        <button className="btn">Change email</button>
                    </div>
                    <br/><br/>
                    <h3>Change password</h3>
                    <p className="muted">Change your account password.</p>
                    <div>
                        <Input label="Old Password" type="password" placeholder="Old Password"/>
                        <br/>
                        <Input label="New Password" type="password" placeholder="New Password"/>
                        <br/>
                        <Input label="Confirm New Password" type="password" placeholder="Confirm New Password"/>
                        <br/>
                        <button className="btn">Change password</button>
                    </div>
                    <br/><br/>
                    <h3>Reset password</h3>
                    <p className="muted">Reset your account password.</p>
                    <div>
                        <button className="btn">Reset password</button>
                    </div>
                </div>
            </div>
        );
    }

}

// Export Account
export default Account;
