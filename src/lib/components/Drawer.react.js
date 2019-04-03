import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Drawer1 from '@material-ui/core/Drawer'

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class Drawer extends Component {
    render() {
        const { anchor, children, className, elevation, id, ModalProps, onClose, open, PaperProps, SlideProps, style, transitionDuration, variant } = this.props;
        return (
            <Drawer1
            anchor={anchor}
            className={className}
            elevation={elevation}
            id={id}
            ModalProps={ModalProps}
            onClose={onClose}
            open={open}
            PaperProps={PaperProps}
            SlideProps={SlideProps}
            style={style}
            transitionDuration={transitionDuration}
            variant={variant}
            >
                {children}
            </Drawer1>
        )
    }
}

Drawer.defaultProps = {
    anchor: 'left',
    elevation: 16,
    open: false,
    variant: 'temporary'
};

Drawer.propTypes = {
    anchor: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
    children: PropTypes.node,
    className: PropTypes.string,
    elevation: PropTypes.number,
    id: PropTypes.string,
    ModalProps: PropTypes.object,
    onClose: PropTypes.func,
    open: PropTypes.bool,
    PaperProps: PropTypes.object,
    SlideProps: PropTypes.object,
    style: PropTypes.object,
    transitionDuration: PropTypes.number,
    variant: PropTypes.oneOf(['permanent', 'persistent', 'temporary'])
};
