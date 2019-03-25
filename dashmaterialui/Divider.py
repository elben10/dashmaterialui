# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Divider(Component):
    """A Divider component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- absolute (boolean; optional): Absolutely position the element.
- classes (dict; optional): Override or extend the styles applied to the component. See CSS API below for more details.
- component (optional): The component used for the root node. Either a string to use a DOM element or a component.
- id (string; optional): The components id
- inset (boolean; optional): If true, the divider will be indented. WARNING: inset is deprecated. Instead use variant="inset".
- light (boolean; optional): If true, the divider will have a lighter color.
- style (dict; optional): Add style object
- variant (a value equal to: 'fullWidth', 'inset', 'middle'; optional): The variant to use."""
    @_explicitize_args
    def __init__(self, absolute=Component.UNDEFINED, classes=Component.UNDEFINED, component=Component.UNDEFINED, id=Component.UNDEFINED, inset=Component.UNDEFINED, light=Component.UNDEFINED, style=Component.UNDEFINED, variant=Component.UNDEFINED, **kwargs):
        self._prop_names = ['absolute', 'classes', 'component', 'id', 'inset', 'light', 'style', 'variant']
        self._type = 'Divider'
        self._namespace = 'dashmaterialui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['absolute', 'classes', 'component', 'id', 'inset', 'light', 'style', 'variant']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Divider, self).__init__(**args)
