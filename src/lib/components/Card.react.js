import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card1 from '@material-ui/core/Card'

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class Card extends Component {
    render() {
        const {children, classes, raised} = this.props;
        return (
            <Card1   
            classes={classes}
            raised={raised}
            >
                {children}
            </Card1>
        );
    }
}

Card.defaultProps = {
    raised: false,
};

Card.propTypes = {
    /**
     *  The content of the component.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component. See CSS API below for more details.
     */
    classes: PropTypes.object,
    /**
     * If true, the card will use raised styling.
     */
    raised: PropTypes.bool,
};
