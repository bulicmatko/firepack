
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Input

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


// Imports
import _ from 'lodash';
import ClassNames from 'classnames';
import React, { Component, PropTypes } from 'react';

// VelocityTransitionGroup
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { VelocityTransitionGroup } from 'velocity-react';

/**
 *  Input
 */
class Input extends Component {

    static propTypes = {
        id: PropTypes.string
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

    _renderInput () {
        return <input {..._.omit(this.props, ['label', 'helperText', 'invalid'])}/>;
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
                'is-disabled': this.props.disabled,
                'is-filled': this.props.value,
                'is-invalid': this.props.invalid
            }
        );

        const onEnterAnimation = {
            animation: 'slideDown',
            duration: 150
        };

        const onLeaveAnimation = {
            animation: 'slideUp',
            duration: 150
        };

        return (
            <div className={classNames}>
                {this._renderLabel()}
                {this._renderInput()}
                <VelocityTransitionGroup enter={onEnterAnimation} leave={onLeaveAnimation}>
                    {this._renderHelperText()}
                </VelocityTransitionGroup>
            </div>
        );
    }

}

// Export Input
export default Input;
