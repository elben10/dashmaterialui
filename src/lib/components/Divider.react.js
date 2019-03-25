import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Divider1 from '@material-ui/core/Divider';
import createStyled from './utils/Styled';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class Divider extends Component {
    render() {
        const { absolute, classes, component, inset, light, style, variant } = this.props;
        const Styled = createStyled({ root: classes })
        return (
            <Styled>
                {
                    ({ classes }) => (
                        <Divider1
                            absolute={absolute}
                            className={classes.root}
                            component={component}
                            inset={inset}
                            light={light}
                            style={style}
                            variant={variant}
                        />
                    )
                }
            </Styled>
        );
    }
}

Divider.defaultProps = {
    absolute: false,
    classes: {},
    component: 'hr',
    light: false,
    variant: 'fullWidth',
};

Divider.propTypes = {
    /**
     * Absolutely position the element.
     */
    absolute: PropTypes.bool,
    /**
     * Override or extend the styles applied to the component. See CSS API below for more details.
     */
    classes: PropTypes.object,
    /**
     * The component used for the root node. Either a string to use a DOM element or a component.
     */
    component: PropTypes.component,
    /**
     * If true, the divider will be indented. WARNING: inset is deprecated. Instead use variant="inset".
     */
    inset: PropTypes.bool,
    /**
     * If true, the divider will have a lighter color.
     */
    light: PropTypes.bool,
    /**
     * Add style object
     */
    style: PropTypes.object,
    /**
     * The variant to use.
     */
    variant: PropTypes.oneOf(['fullWidth', 'inset', 'middle'])
};
