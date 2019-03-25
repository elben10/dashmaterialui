# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Toolbar(Component):
    """A Toolbar component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is ediToolbar by the user.

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): Toolbar children, usually a mixture of IconButton, Button and Typography.
- classes (dict; optional): Override or extend the styles applied to the component. See CSS API below for more details.
- disableGutters (boolean; optional): If true, disables gutter padding.
- id (string; optional): The components id
- style (dict; optional): Add style object
- variant (a value equal to: 'regular', 'dense'; optional): The variant to use."""
    @_explicitize_args
    def __init__(self, children=None, classes=Component.UNDEFINED, disableGutters=Component.UNDEFINED, id=Component.UNDEFINED, style=Component.UNDEFINED, variant=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'classes', 'disableGutters', 'id', 'style', 'variant']
        self._type = 'Toolbar'
        self._namespace = 'dashmaterialui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'classes', 'disableGutters', 'id', 'style', 'variant']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Toolbar, self).__init__(children=children, **args)
