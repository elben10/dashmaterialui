import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardActionArea1 from '@material-ui/core/CardActionArea';
import createStyled from './utils/Styled';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class CardActionArea extends Component {
    render() {
        const { children, classes, id, style } = this.props;
        const Styled = createStyled({ root: classes });
        return (
            <Styled>
                {
                    ({ classes }) => (
                        <CardActionArea1
                            className={classes.root}
                            id={id}
                            style={style}
                        >
                            {children}
                        </CardActionArea1>
                    )
                }
            </Styled>
        );
    }
}

CardActionArea.defaultProps = {
    classes: {},
};

CardActionArea.propTypes = {
    /**
     *  The content of the component.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component. See CSS API below for more details.
     */
    classes: PropTypes.object,
    /**
     * The components id
     */
    id: PropTypes.string,
    /**
     * Add style object
     */
    style: PropTypes.object,
};
