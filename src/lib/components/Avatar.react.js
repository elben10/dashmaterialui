import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar1 from '@material-ui/core/Avatar';
import createStyled from './utils/Styled';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class Avatar extends Component {
    render() {
        const { alt, children, classes, component, imgProps, sizes, src, srcSet, style } = this.props;
        const Styled = createStyled({ root: classes })
        return (
            <Styled>
                {
                    ({ classes }) => (
                        <Avatar1
                            alt={alt}
                            className={classes.root}
                            component={component}
                            imgProps={imgProps}
                            sizes={sizes}
                            src={src}
                            srcSet={srcSet}
                            style={style}
                        >
                            {children}
                        </Avatar1>
                    )
                }
            </Styled>
        );
    }
}

Avatar.defaultProps = {
    classes: {},
    component: 'div',
};

Avatar.propTypes = {
    /**
     *  Used in combination with src or srcSet to provide an alt attribute for the rendered img element.
     */
    alt: PropTypes.string,
    /**
     * Used to render icon or text elements inside the Avatar. src and alt props will not be used and no img will be rendered by default.
     * This can be an element, or just a string.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component. See CSS API below for more details.
     */
    classes: PropTypes.object,
    /**
     * The component used for the root node. Either a string to use a DOM element or a component.
     */
    component: PropTypes.Component,
    /**
     *  Attributes applied to the img element if the component is used to display an image.
     */
    imgProps: PropTypes.object,
    /**
     *  The sizes attribute for the img element.
     */
    sizes: PropTypes.string,
    /**
     *  The src attribute for the img element.
     */
    src: PropTypes.string,
    /**
     *  The srcSet attribute for the img element.
     */
    srcSet: PropTypes.string,
    /**
     * Add style object
     */
    style: PropTypes.object,
};
