import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableCell1 from '@material-ui/core/TableCell'

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is ediTableCell by the user.
 */
export default class TableCell extends Component {
    render() {
        const { align, children, className, component, id, padding, scope, sortDirection, style, variant } = this.props;
        return (
            <TableCell1
                align={align}
                className={className}
                component={component}
                id={id}
                padding={padding}
                scope={scope}
                sortDirection={sortDirection}
                style={style}
                variant={variant}
            >
                {children}
            </TableCell1>
        )
    }
}

TableCell.defaultProps = {
    align: 'inherit',
};

TableCell.propTypes = {
    /**
     * Set the text-align on the table cell content. Monetary or generally number fields should be right aligned as that allows you to add them up quickly in your head without having to worry about decimals.
     */
    align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
    /**
     *  The table cell contents.
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
     * Sets the padding applied to the cell. By default, the Table parent component set the value.
     */
    padding: PropTypes.oneOf(['default', 'checkbox', 'dense', 'none']),
    /**
     *  Set scope attribute.
     */
    scope: PropTypes.string,
    /**
     * Set aria-sort direction.
     */
    sortDirection: PropTypes.oneOf(['asc', 'desc', false]),
    /**
     * Add style object
     */
    style: PropTypes.object,
    /**
     * Specify the cell type. By default, the TableHead, TableBody or TableFooter parent component set the value.
     */
    varaint: PropTypes.oneOf(['head', 'body', 'footer']),
};
