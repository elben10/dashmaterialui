import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardContent1 from '@material-ui/core/CardContent'

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class CardContent extends Component {
    render() {
        const { children, className, component, id, style } = this.props;
        return (
            <CardContent1
                className={className}
                component={component}
                id={id}
                style={style}
            >
                {children}
            </CardContent1>
        )
    }
}

CardContent.defaultProps = {
    component: 'div',
};

CardContent.propTypes = {
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
     * The components id
     */
    id: PropTypes.string,
    /**
     * Add style object
     */
    style: PropTypes.object,
};
