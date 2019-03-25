import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton1 from '@material-ui/core/IconButton';
import createStyled from './utils/Styled';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class IconButton extends Component {
    render() {
        const { children, classes, color, disabled, disableRipple, style } = this.props;
        const Styled = createStyled({ root: classes })
        return (
            <Styled>
                {
                    ({ classes }) => (
                        <IconButton1
                            className={classes.root}
                            color={color}
                            disabled={disabled}
                            disableRipple={disableRipple}
                            style={style}
                        >
                            {children}
                        </IconButton1>
                    )
                }
            </Styled>
        );
    }
}

IconButton.defaultProps = {
    classes: {},
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
    classes: PropTypes.object,
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
     * Add style object
     */
    style: PropTypes.object,
};
