import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link1 from '@material-ui/core/Link'

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class Link extends Component {
    render() {
        const { block, children, classes, color, component, href, style, TypographyClasses, underline, variant } = this.props;
        return (
            <Link1
                block={block}
                color={color}
                classes={classes}
                component={component}
                href={href}
                style={style}
                TypographyClasses={TypographyClasses}
                underline={underline}
                variant={variant}
            >
                {children}
            </Link1>
        );
    }
}

Link.defaultProps = {
    block: false,
    color: 'primary',
    component: 'a',
    underline: 'hover',
    variant: 'inherit',
};

Link.propTypes = {
    /**
     * Controls whether the link is inline or not. When block is true the link is not inline when block is false it is.
     */
    block: PropTypes.bool,
    /**
     * The content of the link.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component. See CSS API below for more details.
     */
    classes: PropTypes.object,
    /**
     * The color of the link.
     */
    color: PropTypes.oneOf(['error', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary']),
    /**
     * The component used for the root node. Either a string to use a DOM element or a component.
     */
    component: PropTypes.component,
    /**
     * The url to refer to
     */
    href: PropTypes.string,
    /**
     * Add style object
     */
    style: PropTypes.object,
    /**
     * classes property applied to the Typography element.
     */
    TypographyClasses: PropTypes.object,
    /**
     * Controls when the link should have an underline.
     */
    underline: PropTypes.oneOf(['none', 'hover', 'always']),
    /**
     * Applies the theme typography styles.
     */
    variant: PropTypes.string,
};
