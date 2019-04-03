# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Drawer(Component):
    """A Drawer component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional)
- anchor (a value equal to: 'left', 'top', 'right', 'bottom'; optional)
- className (string; optional)
- elevation (number; optional)
- id (string; optional)
- ModalProps (dict; optional)
- open (boolean; optional)
- PaperProps (dict; optional)
- SlideProps (dict; optional)
- style (dict; optional)
- transitionDuration (number; optional)
- variant (a value equal to: 'permanent', 'persistent', 'temporary'; optional)"""
    @_explicitize_args
    def __init__(self, children=None, anchor=Component.UNDEFINED, className=Component.UNDEFINED, elevation=Component.UNDEFINED, id=Component.UNDEFINED, ModalProps=Component.UNDEFINED, onClose=Component.UNDEFINED, open=Component.UNDEFINED, PaperProps=Component.UNDEFINED, SlideProps=Component.UNDEFINED, style=Component.UNDEFINED, transitionDuration=Component.UNDEFINED, variant=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'anchor', 'className', 'elevation', 'id', 'ModalProps', 'open', 'PaperProps', 'SlideProps', 'style', 'transitionDuration', 'variant']
        self._type = 'Drawer'
        self._namespace = 'dashmaterialui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'anchor', 'className', 'elevation', 'id', 'ModalProps', 'open', 'PaperProps', 'SlideProps', 'style', 'transitionDuration', 'variant']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Drawer, self).__init__(children=children, **args)
