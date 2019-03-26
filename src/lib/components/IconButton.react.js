import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton1 from '@material-ui/core/IconButton';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class IconButton extends Component {
    render() {
        const { children, className, color, disabled, disableRipple, id, style } = this.props;
        return (
            <IconButton1
                className={className}
                color={color}
                disabled={disabled}
                disableRipple={disableRipple}
                id={id}
                style={style}
            >
                {children}
            </IconButton1>
        )
    }
}

IconButton.defaultProps = {
    color: 'default',
    disabled: false,
};

IconButton.propTypes = {
    /**
     * The icon element.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component. See CSS API below for more details.
     */
    className: PropTypes.string,
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
    /**
     * If true, the button will be disabled.
     */
    disabled: PropTypes.bool,
    /**
     * If true, the ripple will be disabled.
     */
    disableRipple: PropTypes.bool,
    /**
     * The components id
     */
    id: PropTypes.string,
    /**
     * Add style object
     */
    style: PropTypes.object,
};
