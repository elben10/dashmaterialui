import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List1 from '@material-ui/core/List';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class List extends Component {
    render() {
        const { children, className, component, dense, disablePadding, id, style, subheader } = this.props;
        return (
            <List1
                className={className}
                component={component}
                dense={dense}
                disablePadding={disablePadding}
                id={id}
                style={style}
                subheader={subheader}
            >
                {children}
            </List1>
        )
    }
}

List.defaultProps = {
    component: 'ul',
    dense: false,
    disablePadding: false,
};

List.propTypes = {
    /**
     * The content of the component.
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
     * If true, compact vertical padding designed for keyboard and mouse input will be used for the list and list items. The property is available to descendant components as the dense context.
     */
    dense: PropTypes.bool,
    /**
     * If true, vertical padding will be removed from the list.
     */
    disablePadding: PropTypes.bool,
    /**
     * The components id
     */
    id: PropTypes.string,
    /**
     * Add style object
     */
    style: PropTypes.object,
    /**
     * The content of the subheader, normally ListSubheader.
     */
    subheader: PropTypes.node,
};
