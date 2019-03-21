import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography1 from '@material-ui/core/Typography'

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class Typography extends Component {
    render() {
        const { align, children, classes, color, component, gutterBottom, headlineMapping, inline, internalDeprecatedVariant, noWrap, paragraph, style, variant } = this.props;
        return (
            <Typography1
                align={align}
                classes={classes}
                color={color}
                component={component}
                gutterBottom={gutterBottom}
                headlineMapping={headlineMapping}
                inline={inline}
                internalDeprecatedVariant={internalDeprecatedVariant}
                noWrap={noWrap}
                paragraph={paragraph}
                style={style}
                variant={variant}
            >
                {children}
            </Typography1>
        );
    }
}

Typography.defaultProps = {
    align: 'inherit',
    color: 'default',
    gutterBottom: false,
    headlineMapping: { h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5', h6: 'h6', subtitle1: 'h6', subtitle2: 'h6', body1: 'p', body2: 'p' },
    inline: false,
    noWrap: false,
    paragraph: false,
};

Typography.propTypes = {
    /**
     * Set the text-align on the component.
     */
    align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
    /**
     * The content of the component.
     */
    children: PropTypes.node,
    /**
     *  Override or extend the styles applied to the component. See CSS API below for more details.
     */
    classes: PropTypes.object,
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf(['default', 'error', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary']),
    /**
     * The component used for the root node. Either a string to use a DOM element or a component. By default, it maps the variant to a good default headline component.
     */
    component: PropTypes.Component,
    /**
     * If true, the text will have a bottom margin.
     */
    gutterBottom: PropTypes.bool,
    /**
     * We are empirically mapping the variant property to a range of different DOM element types. For instance, subtitle1 to <h6>. If you wish to change that mapping, you can provide your own. Alternatively, you can use the component property. The default mapping is the following:
     */
    headlineMapping: PropTypes.object,
    /**
     * Controls whether the Typography is inline or not.
     */
    inline: PropTypes.bool,
    /**
     *  A deprecated variant is used from an internal component. Users don't need a deprecation warning here if they switched to the v2 theme. They already get the mapping that will be applied in the next major release.
     */
    internalDeprecatedVariant: PropTypes.bool,
    /**
     * If true, the text will not wrap, but instead will truncate with an ellipsis.
     */
    noWrap: PropTypes.bool,
    /**
     * If true, the text will have a bottom margin.
     */
    paragraph: PropTypes.bool,
    /**
     * Add style object
     */
    style: PropTypes.object,
    /**
     *  Applies the theme typography styles. Use body1 as the default value with the legacy implementation and body2 with the new one.
     */
    variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline', 'srOnly', 'inherit', "display4", 'display3', 'display2', 'display1', 'headline', 'title', 'subheading']),
};
