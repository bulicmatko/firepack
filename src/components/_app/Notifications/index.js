
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Notifications Component

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


// Imports
import React, { Component } from 'react';
import ClassNames from 'classnames';
import NotificationTypes from '../../../constants/NotificationTypes';
import NotificationsStore from '../../../stores/NotificationsStore.js';

/**
 *  Notifications Component
 */
class NotificationsComponent extends Component {

    constructor (props) {
        super(props);

        this.state = {
            notifications: NotificationsStore.getNotifications()
        };

        this.__handleNotificationsStoreDataChange = this._handleNotificationsStoreDataChange.bind(this);
    }

    shouldComponentUpdate (nextProps, nextState) {
        return this.props !== nextProps || this.state !== nextState;
    }

    componentDidMount () {
        NotificationsStore.addDataChangeListener(this.__handleNotificationsStoreDataChange);
    }

    componentWillUnmount () {
        NotificationsStore.removeDataChangeListener(this.__handleNotificationsStoreDataChange);
    }

    _handleNotificationsStoreDataChange () {
        this.setState({
            notifications: NotificationsStore.getNotifications()
        });
    }

    _renderNotifications () {
        return (
            <div className="Notifications">
                {this.state.notifications.map((notification, index) => {
                    const className = ClassNames('notification', {
                        error: notification.type === NotificationTypes.ERROR,
                        warning: notification.type === NotificationTypes.WARNING,
                        success: notification.type === NotificationTypes.SUCCESS,
                        info: notification.type === NotificationTypes.INFO
                    });

                    return (
                        <div className={className} key={index}>
                            <h3>{notification.title}</h3>
                            <p>{notification.message}</p>
                        </div>
                    );
                })}
            </div>
        );
    }

    render () {
        return this.state.notifications.length
            ? this._renderNotifications()
            : null;
    }

}

// Export Notifications Component
export default NotificationsComponent;
