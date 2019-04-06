import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Hidden1 from '@material-ui/core/Hidden';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class Hidden extends Component {
    render() {
        const { children, className, id, implementation, initialWidth, lgDown, lgUp, mdDown, mdUp, only, smDown, smUp, style, xlDown, xlUp, xsDown, xsUp } = this.props;
        return (
            <Hidden1
                className={className}
                id={id}
                implementation={implementation}
                initialWidth={initialWidth}
                lgDown={lgDown}
                lgUp={lgUp}
                mdDown={mdDown}
                mdUp={mdUp}
                only={only}
                smDown={smDown}
                smUp={smUp}
                style={style}
                xlDown={xlDown}
                xlUp={xlUp}
                xsDown={xsDown}
                xsUp={xsUp}
            >
                {children}
            </Hidden1>
        )
    }
}

Hidden.defaultProps = {
    implementation: 'js',
    lgDown: false,
    lgUp: false,
    mdDown: false,
    mdUp: false,
    smDown: false,
    smUp: false,
    xlDown: false,
    xlUp: false,
    xsDown: false,
    xsUp: false,
};

Hidden.propTypes = {
    /**
     * The content of the component.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component. See CSS API below for more details.
     */
    className: PropTypes.string,
    /**
     * The components id
     */
    id: PropTypes.string,
    /**
     * Specify which implementation to use. 'js' is the default, 'css' works better for server-side rendering.
     */
    implementation: PropTypes.oneOf(['css', 'js']),
    /**
     * You can use this property when choosing the js implementation with server-side rendering.
     * As window.innerWidth is unavailable on the server, we default to rendering an empty component during the first mount. You might want to use an heuristic to approximate the screen width of the client browser screen width.
     * For instance, you could be using the user-agent or the client-hints. https://caniuse.com/#search=client%20hint
     */
    initialWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    /**
     * If true, screens this size and down will be hidden.
     */
    lgDown: PropTypes.bool,
    /**
     * If true, screens this size and down will be hidden.
     */
    lgUp: PropTypes.bool,
    /**
     * If true, screens this size and down will be hidden.
     */
    mdDown: PropTypes.bool,
    /**
     * If true, screens this size and down will be hidden.
     */
    mdUp: PropTypes.bool,
    /**
     * Hide the given breakpoint(s).
     */
    only: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', PropTypes.arrayOf(PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']))]),
    /**
     * If true, screens this size and down will be hidden.
     */
    smDown: PropTypes.bool,
    /**
     * If true, screens this size and down will be hidden.
     */
    smUp: PropTypes.bool,
    /**
     * Add style object
     */
    style: PropTypes.object,
   /**
     * If true, screens this size and down will be hidden.
     */
    xlDown: PropTypes.bool,
    /**
     * If true, screens this size and down will be hidden.
     */
    xlUp: PropTypes.bool,
    /**
     * If true, screens this size and down will be hidden.
     */
    xsDown: PropTypes.bool,
    /**
     * If true, screens this size and down will be hidden.
     */
    xsUp: PropTypes.bool,
};
