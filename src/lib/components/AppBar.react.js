import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar1 from '@material-ui/core/AppBar';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class AppBar extends Component {
    render() {
        const { children, className, color, id, position, style } = this.props;
        return (
            <AppBar1
                className={className}
                color={color}
                id={id}
                position={position}
                style={style}
            >
                {children}
            </AppBar1>
        )
    }
}

AppBar.defaultProps = {
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
    className: PropTypes.string,
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
