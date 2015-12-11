
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Textarea

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import _ from 'lodash';
import ClassNames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 *  Textarea
 */
class Textarea extends Component {

    static propTypes = {
        id: PropTypes.string,
        label: PropTypes.string,
        helperText: PropTypes.string,
        required: PropTypes.bool,
        value: PropTypes.string
    };

    static defaultProps = {
        id: _.uniqueId('textarea')
    };

    shouldComponentUpdate (nextProps) {
        return this.props !== nextProps;
    }

    _renderLabel () {
        return this.props.label
            ? <label htmlFor={this.props.id}>{this.props.label}</label>
            : null;
    }

    _renderTextarea () {
        return <textarea {..._.omit(this.props, ['label', 'helperText'])}/>;
    }

    _renderHelperText () {
        return this.props.helperText
            ? <div className="helper-text">{this.props.helperText}</div>
            : null;
    }

    render () {
        const classNames = ClassNames(
            'form-group',
            {
                'is-required': this.props.required,
                'is-filled': this.props.value
            }
        );

        return (
            <div className={classNames}>
                {this._renderLabel()}
                {this._renderTextarea()}
                {this._renderHelperText()}
            </div>
        );
    }

}

// Export Textarea
export default Textarea;
