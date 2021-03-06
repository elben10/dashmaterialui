import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper1 from '@material-ui/core/Paper'

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class Paper extends Component {
    render() {
        const { children, className, component, elevation, id, square, style } = this.props;
        return (
            <Paper1
                className={className}
                component={component}
                elevation={elevation}
                id={id}
                square={square}
                style={style}
            >
                {children}
            </Paper1>
        )
    }
}

Paper.defaultProps = {
    component: 'div',
    elevation: 2,
    square: false
};

Paper.propTypes = {
    /**
     *  The content of the component.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component. See CSS API below for more details.
     */
    className: PropTypes.string,
    /**
     * The component used for the root node. Either a string to use a DOM element or a component.
     */
    component: PropTypes.Component,
    /**
     *  Shadow depth, corresponds to dp in the spec. It's accepting values between 0 and 24 inclusive.
     */
    elevation: PropTypes.number,
    /**
     * The components id
     */
    id: PropTypes.string,
    /**
     * If true, rounded corners are disabled.
     */
    square: PropTypes.bool,
    /**
     * Add style object
     */
    style: PropTypes.object,
};
