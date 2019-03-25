import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridList1 from '@material-ui/core/GridList'
import createStyled from './utils/Styled';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class GridList extends Component {
    render() {
        const { cellHeight, children, classes, cols, component, id, spacing, style } = this.props;
        const Styled = createStyled({ root: classes })
        return (
            <Styled>
                {
                    ({ classes }) => (
                        <GridList1
                            cellHeight={cellHeight}
                            className={classes.root}
                            cols={cols}
                            component={component}
                            id={id}
                            spacing={spacing}
                            style={style}
                        >
                            {children}
                        </GridList1>
                    )
                }
            </Styled>
        );
    }
}

GridList.defaultProps = {
    cellHeight: 180,
    classes: {},
    cols: 2,
    component: 'ul',
    spacing: 4,
};

GridList.propTypes = {
    /**
     * Number of px for one cell height. You can set 'auto' if you want to let the children determine the height.
     */
    cellHeight: PropTypes.oneOf([PropTypes.number, 'auto']),
    /**
     *  The content of the component.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component. See CSS API below for more details.
     */
    classes: PropTypes.object,
    /**
     * Number of columns.
     */
    cols: PropTypes.number,
    /**
     * The component used for the root node. Either a string to use a DOM element or a component.
     */
    component: PropTypes.Component,
    /**
     * The components id
     */
    id: PropTypes.string,
    /**
     * Number of px for the spacing between tiles.
     */
    spacing: PropTypes.number,
    /**
     * Add style object
     */
    style: PropTypes.object,
};
