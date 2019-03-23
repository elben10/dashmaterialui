import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TableFooter1 from '@material-ui/core/TableFooter'

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is ediTableFooter by the user.
 */
export default class TableFooter extends Component {
    render() {
        const {children, classes, component, style} = this.props;
        return (
            <TableFooter1   
            classes={classes}
            component={component}
            style={style}
            >
                {children}
            </TableFooter1>
        );
    }
}

TableFooter.defaultProps = {
    component: 'tfoot',
};

TableFooter.propTypes = {
    /**
     * The content of the component, normally TableRow.
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
     * Add style object
     */
    style: PropTypes.object,
};
