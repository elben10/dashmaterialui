import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid1 from '@material-ui/core/Grid'
import createStyled from './utils/Styled';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class Grid extends Component {
    render() {
        const { alignContent, alignItems, children, classes, component, container, direction, id, item, justify, lg, md, sm, spacing, style, wrap, xl, xs, zeroMinWidth } = this.props;
        const Styled = createStyled({ root: classes })
        return (
            <Styled>
                {
                    ({ classes }) => (
                        <Grid1
                            alignContent={alignContent}
                            alignItems={alignItems}
                            className={classes.root}
                            component={component}
                            container={container}
                            direction={direction}
                            id={id}
                            item={item}
                            justify={justify}
                            lg={lg}
                            md={md}
                            sm={sm}
                            spacing={spacing}
                            style={style}
                            wrap={wrap}
                            xl={xl}
                            xs={xs}
                            zeroMinWidth={zeroMinWidth}
                        >
                            {children}
                        </Grid1>
                    )
                }
            </Styled>
        );
    }
}

Grid.defaultProps = {
    alignContent: 'stretch',
    alignItems: 'stretch',
    classes: {},
    component: 'div',
    container: false,
    direction: 'row',
    item: false,
    justify: 'flex-start',
    lg: false,
    md: false,
    sm: false,
    spacing: 0,
    wrap: 'wrap',
    xl: false,
    xs: false,
    zeroMinWidth: false
};

Grid.propTypes = {
    /**
     * Defines the align-content style property. It's applied for all screen sizes.
     */
    alignContent: PropTypes.oneOf(['stretch', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around']),
    /**
     * Defines the align-items style property. It's applied for all screen sizes.
     */
    alignItems: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'stretch', 'baseline']),
    /**
     *  The content of the component.
     */
    children: PropTypes.node,
    /**
     *  Override or extend the styles applied to the component. See CSS API below for more details.
     */
    classes: PropTypes.object,
    /**
     * The component used for the root node. Either a string to use a DOM element or a component.
     */
    component: PropTypes.Component,
    /**
     * If true, the component will have the flex container behavior. You should be wrapping items with a container.
     */
    container: PropTypes.bool,
    /**
     *  Defines the flex-direction style property. It is applied for all screen sizes.
     */
    direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
    id: PropTypes.string,
    /**
     * If true, the component will have the flex item behavior. You should be wrapping items with a container.
     */
    item: PropTypes.bool,
    /**
     * Defines the justify-content style property. It is applied for all screen sizes.
     */
    justify: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly']),
    /**
     * Defines the number of grids the component is going to use. It's applied for the lg breakpoint and wider screens if not overridden.
     */
    lg: PropTypes.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * Defines the number of grids the component is going to use. It's applied for the md breakpoint and wider screens if not overridden.
     */
    md: PropTypes.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * Defines the number of grids the component is going to use. It's applied for the sm breakpoint and wider screens if not overridden.
     */
    sm: PropTypes.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * Defines the space between the type item component. It can only be used on a type container component.
     */
    spacing: PropTypes.oneOf([0, 8, 16, 24, 32, 40]),
    /**
     * Add style object
     */
    style: PropTypes.object,
    /**
     *  Defines the flex-wrap style property. It's applied for all screen sizes.
     */
    wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
    /**
     * Defines the number of grids the component is going to use. It's applied for the xl breakpoint and wider screens.
     */
    xl: PropTypes.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * Defines the number of grids the component is going to use. It's applied for all the screen sizes with the lowest priority.
     */
    xs: PropTypes.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * If true, it sets min-width: 0 on the item. Refer to the limitations section of the documentation to better understand the use case.
     */
    zeroMinWidth: PropTypes.bool,
};
