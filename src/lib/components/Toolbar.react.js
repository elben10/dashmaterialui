import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Toolbar1 from '@material-ui/core/Toolbar'

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is ediToolbar by the user.
 */
export default class Toolbar extends Component {
    render() {
        const {children, classes, disableGutters, style, variant} = this.props;
        return (
            <Toolbar1   
            classes={classes}
            disableGutters={disableGutters}
            style={style}
            variant={variant}
            >
                {children}
            </Toolbar1>
        );
    }
}

Toolbar.defaultProps = {
    disableGutters: false,
    variant: 'regular',
};

Toolbar.propTypes = {
    /**
     * Toolbar children, usually a mixture of IconButton, Button and Typography.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component. See CSS API below for more details.
     */
    classes: PropTypes.object,
    /**
     * If true, disables gutter padding.
     */
    disableGutters: PropTypes.bool,
    /**
     * Add style object
     */
    style: PropTypes.object,
    /**
     * The variant to use.
     */
    variant: PropTypes.oneOf(['regular', 'dense'])
};
