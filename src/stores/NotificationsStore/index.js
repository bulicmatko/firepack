
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Notifications Store

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import BaseStore from '../../_lib/BaseStore';

/**
 *  Notifications Store
 */
class NotificationsStore extends BaseStore {

    constructor (args) {
        super(args);

        this._notifications = [];

        this._onDispatcherEvent(this._handleDispatcherEvent.bind(this));
    }

    _resetNotifications () {
        this._notifications = [];

        this._emitChange();
    }

    _addNotification (notification) {
        this._notifications.push(notification);

        setTimeout(this._removeNotification.bind(this), 5000);

        this._emitChange();
    }

    _removeNotification () {
        this._notifications.shift();

        this._emitChange();
    }

    getNotifications () {
        return this._notifications;
    }

    _handleDispatcherEvent (payload) {
        if (payload.__notification) {
            this._addNotification(payload.__notification);
        }
    }

}

// Export Notifications Store
export default NotificationsStore;
