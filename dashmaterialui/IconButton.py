# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class IconButton(Component):
    """A IconButton component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): The icon element.
- classes (dict; optional): Override or extend the styles applied to the component. See CSS API below for more details.
- color (a value equal to: 'default', 'inherit', 'primary', 'secondary'; optional): The color of the component. It supports those theme colors that make sense for this component.
- disabled (boolean; optional): If true, the button will be disabled.
- disableRipple (boolean; optional): If true, the ripple will be disabled.
- style (dict; optional): Add style object"""
    @_explicitize_args
    def __init__(self, children=None, classes=Component.UNDEFINED, color=Component.UNDEFINED, disabled=Component.UNDEFINED, disableRipple=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'classes', 'color', 'disabled', 'disableRipple', 'style']
        self._type = 'IconButton'
        self._namespace = 'dashmaterialui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'classes', 'color', 'disabled', 'disableRipple', 'style']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(IconButton, self).__init__(children=children, **args)
