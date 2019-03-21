import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CardActions1 from '@material-ui/core/CardActions'

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class CardActions extends Component {
    render() {
        const {children, classes, disableActionSpacing, style} = this.props;
        return (
            <CardActions1   
            classes={classes}
            disableActionSpacing={disableActionSpacing}
            style={style}
            >
                {children}
            </CardActions1>
        );
    }
}

CardActions.defaultProps = {
    disableActionSpacing: false,
};

CardActions.propTypes = {
    /**
     *  The content of the component.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component. See CSS API below for more details.
     */
    classes: PropTypes.object,
    /**
     * If true, the card actions do not have additional margin.
     */
    disableActionSpacing: PropTypes.bool,
    /**
     * Add style object
     */
    style: PropTypes.object,
};
