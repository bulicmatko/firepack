
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Textarea

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


// Lodash
import _ from 'lodash';

// Class Names
import ClassNames from 'classnames';

// React, Component, PropTypes
import React, { Component, PropTypes } from 'react';

/**
 *  Textarea
 */
class Textarea extends Component {

    static propTypes () {
        return {
            id: PropTypes.string
        };
    }

    static defaultProps () {
        return {
            id: _.uniqueId('textarea')
        };
    }

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
