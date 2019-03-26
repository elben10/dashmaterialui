import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableBody1 from '@material-ui/core/TableBody'

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class TableBody extends Component {
    render() {
        const { children, className, component, id, padding, style } = this.props;
        return (
            <TableBody1
                className={className}
                component={component}
                id={id}
                padding={padding}
                style={style}
            >
                {children}
            </TableBody1>
        )
    }
}

TableBody.defaultProps = {
    component: 'tbody',
    padding: 'default',
};

TableBody.propTypes = {
    /**
     *  The content of the table, normally TableHead and TableBody.
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
     * Allows TableCells to inherit padding of the Table.
     */
    padding: PropTypes.oneOf(['default', 'checkbox', 'dense', 'none']),
    /**
     * Add style object
     */
    style: PropTypes.object,
};
