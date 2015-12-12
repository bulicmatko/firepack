
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Notifications Component

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


// Imports
import React, { Component } from 'react';
import ClassNames from 'classnames';
import NotificationTypes from '../../../constants/NotificationTypes';
// import NotificationsStore from '../../../stores/NotificationsStore';
import Stores from '../../../stores';

/**
 *  Notifications Component
 */
class NotificationsComponent extends Component {
    static displayName = 'Notifications';

    constructor (props) {
        super(props);

        this.state = {
            notifications: Stores.NotificationsStore.getNotifications()
        };

        this.__handleNotificationsStoreDataChange = this._handleNotificationsStoreDataChange.bind(this);
    }

    componentDidMount () {
        Stores.NotificationsStore.addDataChangeListener(this.__handleNotificationsStoreDataChange);
    }

    shouldComponentUpdate (nextProps, nextState) {
        return this.props !== nextProps || this.state !== nextState;
    }

    componentWillUnmount () {
        Stores.NotificationsStore.removeDataChangeListener(this.__handleNotificationsStoreDataChange);
    }

    _handleNotificationsStoreDataChange () {
        this.setState({
            notifications: Stores.NotificationsStore.getNotifications()
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
