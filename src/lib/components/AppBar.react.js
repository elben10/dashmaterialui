import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar1 from '@material-ui/core/AppBar';
import createStyled from './utils/Styled';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class AppBar extends Component {
    render() {
        const { children, classes, color, id, position, style } = this.props;
        const Styled = createStyled({ root: classes })
        return (
            <Styled>
                {
                    ({ classes }) => (
                        <AppBar1
                            className={classes.root}
                            color={color}
                            id={id}
                            position={position}
                            style={style}
                        >
                            {children}
                        </AppBar1>
                    )
                }
            </Styled>
        );
    }
}

AppBar.defaultProps = {
    classes: {},
    color: 'primary',
    position: 'fixed',
};

AppBar.propTypes = {
    /**
     *  The content of the component.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component. See CSS API below for more details.
     */
    classes: PropTypes.object,
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'default']),
    /**
     * The components id
     */
    id: PropTypes.string,
    /**
     * The positioning type. The behavior of the different options is described in the MDN web docs. Note: sticky is not universally supported and will fall back to static when unavailable.
     */
    position: PropTypes.oneOf(['fixed', 'absolute', 'sticky', 'static', 'relative']),
    /**
     * Add style object
     */
    style: PropTypes.object,
};
