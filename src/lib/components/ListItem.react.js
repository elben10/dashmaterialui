import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem1 from '@material-ui/core/ListItem';
import createStyled from './utils/Styled';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class ListItem extends Component {
    render() {
        const { alignItems, button, children, classes, component, ContainerComponent, ContainerProps, dense, disabled, disableGutters, divider, selected, style } = this.props;
        const Styled = createStyled({ root: classes })
        return (
            <Styled>
                {
                    ({ classes }) => (
                        <ListItem1
                            alignItems={alignItems}
                            button={button}
                            className={classes.root}
                            component={component}
                            ContainerComponent={ContainerComponent}
                            ContainerProps={ContainerProps}
                            dense={dense}
                            disabled={disabled}
                            disableGutters={disableGutters}
                            divider={divider}
                            selected={selected}
                            style={style}
                        >
                            {children}
                        </ListItem1>
                    )
                }
            </Styled>
        );
    }
}

ListItem.defaultProps = {
    alignItems: 'center',
    button: false,
    classes: {},
    ContainerComponent: 'li',
    dense: false,
    disabled: false,
    disableGutters: false,
    divider: false,
    selected: false,
};

ListItem.propTypes = {
    /**
     * Defines the align-items style property.
     */
    alignItems: PropTypes.oneOf(['flex-start', 'center']),
    /**
     * If true, the list item will be a button (using ButtonBase).
     */
    button: PropTypes.bool,
    /**
     * The content of the component. If a ListItemSecondaryAction is used it must be the last child.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component. See CSS API below for more details.
     */
    classes: PropTypes.object,
    /**
     * The component used for the root node. Either a string to use a DOM element or a component. By default, it's a li when button is false and a div when button is true.
     */
    component: PropTypes.Component,
    /**
     * The container component used when a ListItemSecondaryAction is the last child.
     */
    ContainerComponent: PropTypes.Component,
    /**
     * Properties applied to the container component if used.
     */
    ContainerProps: PropTypes.object,
    /**
     * If true, compact vertical padding designed for keyboard and mouse input will be used.
     */
    dense: PropTypes.bool,
    /**
     * If true, the list item will be disabled.
     */
    disabled: PropTypes.bool,
    /**
     * If true, the left and right padding is removed.
     */
    disableGutters: PropTypes.bool,
    /**
     * If true, a 1px light border is added to the bottom of the list item.
     */
    divider: PropTypes.bool,
    /**
     * Use to apply selected styling.
     */
    selected: PropTypes.bool,
    /**
     * Add style object
     */
    style: PropTypes.object,
};
