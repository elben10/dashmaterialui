import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItemAvatar1 from '@material-ui/core/ListItemAvatar';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class ListItemAvatar extends Component {
    render() {
        const { children, className, id, style } = this.props;
        return (
            <ListItemAvatar1
                className={className}
                id={id}
                style={style}
            >
                {children}
            </ListItemAvatar1>
        )
    }
}

ListItemAvatar.defaultProps = {};

ListItemAvatar.propTypes = {
    /**
     * The content of the component – normally Avatar.
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
