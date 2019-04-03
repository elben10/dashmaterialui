import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItemIcon1 from '@material-ui/core/ListItemIcon';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class ListItemIcon extends Component {
    render() {
        const { children, className, id, style } = this.props;
        return (
            <ListItemIcon1
                className={className}
                id={id}
                style={style}
            >
                {children}
            </ListItemIcon1>
        )
    }
}

ListItemIcon.defaultProps = {};

ListItemIcon.propTypes = {
    /**
     * The content of the component – normally Icon.
     */
    children: PropTypes.element,
    /**
     * Override or extend the styles applied to the component. See CSS API below for more details.
     */
    className: PropTypes.string,
    /**
     * The components id
     */
    id: PropTypes.string,
    /**
     * Add style object
     */
    style: PropTypes.object,
};
