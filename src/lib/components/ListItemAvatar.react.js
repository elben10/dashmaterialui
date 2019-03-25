import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItemAvatar1 from '@material-ui/core/ListItemAvatar';
import createStyled from './utils/Styled';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class ListItemAvatar extends Component {
    render() {
        const { children, classes, style } = this.props;
        const Styled = createStyled({ root: classes })
        return (
            <Styled>
                {
                    ({ classes }) => (
                        <ListItemAvatar1
                            className={classes.root}
                            style={style}
                        >
                            {children}
                        </ListItemAvatar1>
                    )
                }
            </Styled>
        );
    }
}

ListItemAvatar.defaultProps = {
    classes: {},
};

ListItemAvatar.propTypes = {
    /**
     * The content of the component – normally Avatar.
     */
    children: PropTypes.element,
    /**
     * Override or extend the styles applied to the component. See CSS API below for more details.
     */
    classes: PropTypes.object,
    /**
     * Add style object
     */
    style: PropTypes.object,
};
