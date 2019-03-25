import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon1 from '@material-ui/core/Icon'
import createStyled from './utils/Styled';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class Icon extends Component {
    render() {
        const { children, classes, color, component, fontSize, id, style } = this.props;
        const Styled = createStyled({ root: classes })
        return (
            <Styled>
                {
                    ({ classes }) => (
                        <Icon1
                            color={color}
                            className={classes.root}
                            component={component}
                            fontSize={fontSize}
                            id={id}
                            style={style}
                        >
                            {children}
                        </Icon1>
                    )
                }
            </Styled>
        );
    }
}

Icon.defaultProps = {
    classes: {},
    color: 'inherit',
    component: 'span',
    fontSize: 'default',
};

Icon.propTypes = {
    /**
     * The name of the icon font ligature.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component. See CSS API below for more details.
     */
    classes: PropTypes.object,
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'action', 'error', 'disabled']),
    /**
     * The component used for the root node. Either a string to use a DOM element or a component.
     */
    component: PropTypes.component,
    /**
     * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
     */
    fontSize: PropTypes.oneOf(['inherit', 'default', 'small', 'large']),
    /**
     * The components id
     */
    id: PropTypes.string,
    /**
     * Add style object
     */
    style: PropTypes.object,
};
