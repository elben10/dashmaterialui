import React, { Component } from 'react';
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
        const { children, className, component, id, style } = this.props;
        return (
            <TableFooter1
                className={className}
                component={component}
                id={id}
                style={style}
            >
                {children}
            </TableFooter1>
        )
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
    className: PropTypes.string,
    /**
     * The component used for the root node. Either a string to use a DOM element or a component.
     */
    component: PropTypes.Component,
    /**
     * The components id
     */
    id: PropTypes.string,
    /**
     * Add style object
     */
    style: PropTypes.object,
};
