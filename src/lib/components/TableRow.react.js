import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TableRow1 from '@material-ui/core/TableRow'

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is ediTableRow by the user.
 */
export default class TableRow extends Component {
    render() {
        const {children, classes, component, hover, selected, style} = this.props;
        return (
            <TableRow1   
            classes={classes}
            component={component}
            hover={hover}
            selected={selected}
            style={style}
            >
                {children}
            </TableRow1>
        );
    }
}

TableRow.defaultProps = {
    component: 'tr',
    hover: false,
    selected: false,
};

TableRow.propTypes = {
    /**
     *  Should be valid <tr> children such as TableCell.
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
     * If true, the table row will shade on hover.
     */
    hover: PropTypes.bool,
    /**
     * If true, the table row will have the selected shading.
     */
    selected: PropTypes.bool,
    /**
     * Add style object
     */
    style: PropTypes.object,
};
