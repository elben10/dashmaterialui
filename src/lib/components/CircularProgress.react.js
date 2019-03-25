import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress1 from '@material-ui/core/CircularProgress';
import createStyled from './utils/Styled';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class CircularProgress extends Component {
    render() {
        const { classes, color, disableShrink, id, size, style, thickness, value, variant } = this.props;
        const Styled = createStyled({ root: classes })
        return (
            <Styled>
                {
                    ({ classes }) => (
                        <CircularProgress1
                            className={classes.root}
                            color={color}
                            disableShrink={disableShrink}
                            id={id}
                            size={size}
                            style={style}
                            thickness={thickness}
                            value={value}
                            variant={variant}
                        />
                    )
                }
            </Styled>
        );
    }
}

CircularProgress.defaultProps = {
    classes: {},
    color: 'primary',
    disableShrink: false,
    size: 40,
    thickness: 3.6,
    value: 0,
    variant: 'indeterminate',
};

CircularProgress.propTypes = {
    /**
     * Override or extend the styles applied to the component. See CSS API below for more details.
     */
    classes: PropTypes.object,
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf(['primary', 'secondary', 'inherit']),
    /**
     * If true, the shrink animation is disabled. This only works if variant is indeterminate.
     */
    disableShrink: PropTypes.bool,
    /**
     * The components id
     */
    id: PropTypes.string,
    /**
     * The size of the circle.
     */
    size: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
    /**
     * Add style object
     */
    style: PropTypes.object,
    /**
     * The thickness of the circle.
     */
    size: PropTypes.number,
    /**
     * The value of the progress indicator for the determinate and static variants. Value between 0 and 100.
     */
    value: PropTypes.number,
    /**
     * The variant to use. Use indeterminate when there is no progress value.
     */
    variant: PropTypes.oneOf(['determinate', 'indeterminate', 'static'])
};
