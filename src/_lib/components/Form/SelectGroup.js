
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Select Group Component

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';

/**
 *  Select Group Component
 */
class SelectGroupComponent extends Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
        label: PropTypes.string,
        helperText: PropTypes.string,
        options: PropTypes.array,
        required: PropTypes.bool,
        value: PropTypes.string
    };

    static defaultProps = {
        id: _.uniqueId('input')
    };

    shouldComponentUpdate (nextProps) {
        return this.props !== nextProps;
    }

    _renderLabel () {
        return this.props.label
            ? <label htmlFor={this.props.id}>{this.props.label}</label>
            : null;
    }

    _renderField () {
        return (
            <select {..._.omit(this.props, ['label'])}>
                {this.props.options.map(this._renderFieldOption.bind(this))}
            </select>
        );
    }

    _renderFieldOption () {
        return null;
    }

    _renderHelperText () {
        return this.props.helperText
            ? <div className="helper-text">{this.props.helperText}</div>
            : null;
    }

    render () {
        const classNames = ClassNames(
            'input-group',
            {
                'is-required': this.props.required,
                'is-filled': this.props.value
            }
        );

        return (
            <div className={classNames}>
                {this._renderLabel()}
                {this._renderField()}
                {this._renderHelperText()}
            </div>
        );
    }

}

// Export Select Group Component
export default SelectGroupComponent;
