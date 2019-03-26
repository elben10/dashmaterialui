import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableHead1 from '@material-ui/core/TableHead'

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is ediTableHead by the user.
 */
export default class TableHead extends Component {
    render() {
        const { children, className, component, id, style } = this.props;
        return (
            <TableHead1
                className={className}
                component={component}
                id={id}
                style={style}
            >
                {children}
            </TableHead1>
        )
    }
}

TableHead.defaultProps = {
    component: 'thead',
    padding: 'default',
};

TableHead.propTypes = {
    /**
     *  The content of the component, normally TableRow.
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
