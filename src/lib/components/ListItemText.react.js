import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItemText1 from '@material-ui/core/ListItemText';
import createStyled from './utils/Styled';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class ListItemText extends Component {
    render() {
        const { children, classes, disableTypography, id, inset, primary, primaryTypographyProps, secondary, secondaryTypographyProps, style} = this.props;
        const Styled = createStyled({ root: classes })
        return (
            <Styled>
                {
                    ({ classes }) => (
                        <ListItemText1
                            className={classes.root}
                            disableTypography={disableTypography}
                            id={id}
                            inset={inset}
                            primary={primary}
                            primaryTypographyProps={primaryTypographyProps}
                            secondary={secondary}
                            secondaryTypographyProps={secondaryTypographyProps}
                            style={style}
                        >
                            {children}
                        </ListItemText1>
                    )
                }
            </Styled>
        );
    }
}

ListItemText.defaultProps = {
    classes: {},
    disableTypography: false,
    inset: false,
};

ListItemText.propTypes = {
    /**
     * Alias for the primary property.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component. See CSS API below for more details.
     */
    classes: PropTypes.object,
    /**
     * If true, the children won't be wrapped by a Typography component. This can be useful to render an alternative Typography variant by wrapping the children (or primary) text, and optional secondary text with the Typography component.
     */
    disableTypography: PropTypes.bool,
    /**
     * The components id
     */
    id: PropTypes.string,
    /**
     * If true, the children will be indented. This should be used if there is no left avatar or left icon.
     */
    inset: PropTypes.bool,
    /**
     * The main content element.
     */
    primary: PropTypes.bool,
    /**
     * These props will be forwarded to the primary typography component (as long as disableTypography is not true).
     */
    primaryTypographyProps: PropTypes.object,
    /**
     * The secondary content element.
     */
    secondary: PropTypes.node,
    /**
     * These props will be forwarded to the secondary typography component (as long as disableTypography is not true).
     */
    secondaryTypographyProps: PropTypes.object,
    /**
     * Add style object
     */
    style: PropTypes.object,
};
