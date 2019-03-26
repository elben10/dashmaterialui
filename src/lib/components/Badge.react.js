import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Badge1 from '@material-ui/core/Badge';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class Badge extends Component {
    render() {
        const { badgeContent, children, className, color, component, id, invisible, max, showZero, style, variant } = this.props;
        return (
            <Badge1
                badgeContent={badgeContent}
                color={color}
                className={className}
                component={component}
                id={id}
                invisible={invisible}
                max={max}
                showZero={showZero}
                style={style}
                variant={variant}
            >
                {children}
            </Badge1>
        )
    }
}

Badge.defaultProps = {
    color: 'default',
    component: 'span',
    max: 99,
    showZero: false,
    variant: 'standard',
};

Badge.propTypes = {
    /**
     * The content rendered within the badge.
     */
    badgeContent: PropTypes.node,
    /**
     * The badge will be added relative to this node.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component. See CSS API below for more details.
     */
    className: PropTypes.string,
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf(['default', 'primary', 'secondary', 'error']),
    /**
     * The component used for the root node. Either a string to use a DOM element or a component.
     */
    component: PropTypes.Component,
    /**
     * The components id
     */
    id: PropTypes.string,
    /**
     * If true, the badge will be invisible.
     */
    invisible: PropTypes.bool,
    /**
     * Max count to show.
     */
    max: PropTypes.number,
    /**
     * Controls whether the badge is hidden when badgeContent is zero.
     */
    showZero: PropTypes.bool,
    /**
     * Add style object
     */
    style: PropTypes.object,
    /**
     * The variant to use.
     */
    variant: PropTypes.oneOf(['standard', 'dot']),
};
