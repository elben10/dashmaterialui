import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableHead1 from '@material-ui/core/TableHead'
import createStyled from './utils/Styled';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is ediTableHead by the user.
 */
export default class TableHead extends Component {
    render() {
        const { children, classes, component, style } = this.props;
        const Styled = createStyled({ root: classes })
        return (
            <Styled>
                {
                    ({ classes }) => (
                        <TableHead1
                            className={classes.root}
                            component={component}
                            style={style}
                        >
                            {children}
                        </TableHead1>
                    )
                }
            </Styled>
        );
    }
}

TableHead.defaultProps = {
    classes: {},
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
