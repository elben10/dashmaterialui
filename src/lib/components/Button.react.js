import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button1 from '@material-ui/core/Button';
import createStyled from './utils/Styled';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class Button extends Component {
    render() {
        const { children, classes, color, component, disabled, disableFocusRipple, disableRipple, fullWidth, href, mini, size, style, variant } = this.props;
        const Styled = createStyled({ root: classes })
        return (
            <Styled>
                {
                    ({ classes }) => (
                        <Button1
                            className={classes.root}
                            color={color}
                            component={component}
                            disabled={disabled}
                            disableFocusRipple={disableFocusRipple}
                            disableRipple={disableRipple}
                            fullWidth={fullWidth}
                            href={href}
                            mini={mini}
                            size={size}
                            style={style}
                            variant={variant}
                        >
                            {children}
                        </Button1>
                    )
                }
            </Styled>
        );
    }
}

Button.defaultProps = {
    classes: {},
    color: 'default',
    component: 'button',
    disabled: false,
    disableFocusRipple: false,
    fullWidth: false,
    mini: false,
    size: 'medium',
    variant: 'text',
};

Button.propTypes = {
    /**
     * The content of the button.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component. See CSS API below for more details.
     */
    classes: PropTypes.object,
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
    /**
     * The component used for the root node. Either a string to use a DOM element or a component.
     */
    component: PropTypes.Component,
    /**
     * If true, the button will be disabled.
     */
    disabled: PropTypes.bool,
    /**
     * If true, the keyboard focus ripple will be disabled. disableRipple must also be true.
     */
    disableFocusRipple: PropTypes.bool,
    /**
     * If true, the ripple effect will be disabled.
     */
    disableRipple: PropTypes.bool,
    /**
     * If true, the button will take up the full width of its container.
     */
    fullWidth: PropTypes.bool,
    /**
     * The URL to link to when the button is clicked. If defined, an a element will be used as the root node.
     */
    href: PropTypes.string,
    /**
     * If true, and variant is 'fab', will use mini floating action button styling.
     */
    mini: PropTypes.bool,
    /**
     * The size of the button. small is equivalent to the dense button styling.
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Add style object
     */
    style: PropTypes.object,
    /**
     * The variant to use. WARNING: flat and raised are deprecated. Instead use text and contained respectively. fab and extendedFab are deprecated. Instead use <Fab> and <Fab variant="extended">
     */
    variant: PropTypes.oneOf(['text', 'outlined', 'contained', 'fab', 'extendedFab', 'flat', 'raised']),
};
