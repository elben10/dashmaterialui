import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardMedia1 from '@material-ui/core/CardMedia'

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class CardMedia extends Component {
    render() {
        const { classes, component, image, src, style } = this.props;
        return (
            <CardMedia1
                classes={classes}
                component={component}
                image={image}
                src={src}
                style={style}
            />
        );
    }
}

CardMedia.defaultProps = {
    component: 'div',
};

CardMedia.propTypes = {
    /**
     * Override or extend the styles applied to the component. See CSS API below for more details.
     */
    classes: PropTypes.object,
    /**
     * The component used for the root node. Either a string to use a DOM element or a component.
     */
    component: PropTypes.Component,
    /**
     * Image to be displayed as a background image. Either image or src prop must be specified. Note that caller must specify height otherwise the image will not be visible.
     */
    image: PropTypes.string,
    /**
     * An alias for image property. Available only with media components. Media components: video, audio, picture, iframe, img.
     */
    src: PropTypes.string,
    /**
     * Add style object
     */
    style: PropTypes.object,
};
