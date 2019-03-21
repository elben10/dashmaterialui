import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GridList1 from '@material-ui/core/GridList'

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class GridList extends Component {
    render() {
        const {cellHeight, children, classes, cols, component, spacing, style} = this.props;
        return (
            <GridList1   
            cellHeight={cellHeight}
            classes={classes}
            cols={cols}
            component={component}
            spacing={spacing}
            style={style}
            >
                {children}
            </GridList1>
        );
    }
}

GridList.defaultProps = {
    cellHeight: 180,
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
     * Number of px for the spacing between tiles.
     */
    spacing: PropTypes.number,
    /**
     * Add style object
     */
    style: PropTypes.object,
};
