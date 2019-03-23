import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table1 from '@material-ui/core/Table'

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class Table extends Component {
    render() {
        const {children, classes, component, padding, style} = this.props;
        return (
            <Table1   
            classes={classes}
            component={component}
            padding={padding}
            style={style}
            >
                {children}
            </Table1>
        );
    }
}

Table.defaultProps = {
    component: 'table',
    padding: 'default',
};

Table.propTypes = {
    /**
     *  The content of the table, normally TableHead and TableBody.
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
     * Allows TableCells to inherit padding of the Table.
     */
    padding: PropTypes.oneOf(['default', 'checkbox', 'dense', 'none']),
    /**
     * Add style object
     */
    style: PropTypes.object,
};