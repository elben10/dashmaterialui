# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class CircularProgress(Component):
    """A CircularProgress component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- className (string; optional): Override or extend the styles applied to the component. See CSS API below for more details.
- color (a value equal to: 'primary', 'secondary', 'inherit'; optional): The color of the component. It supports those theme colors that make sense for this component.
- disableShrink (boolean; optional): If true, the shrink animation is disabled. This only works if variant is indeterminate.
- id (string; optional): The components id
- size (number; optional): The size of the circle.
- style (dict; optional): Add style object
- value (number; optional): The value of the progress indicator for the determinate and static variants. Value between 0 and 100.
- variant (a value equal to: 'determinate', 'indeterminate', 'static'; optional): The variant to use. Use indeterminate when there is no progress value."""
    @_explicitize_args
    def __init__(self, className=Component.UNDEFINED, color=Component.UNDEFINED, disableShrink=Component.UNDEFINED, id=Component.UNDEFINED, size=Component.UNDEFINED, style=Component.UNDEFINED, value=Component.UNDEFINED, variant=Component.UNDEFINED, thickness=Component.UNDEFINED, **kwargs):
        self._prop_names = ['className', 'color', 'disableShrink', 'id', 'size', 'style', 'value', 'variant']
        self._type = 'CircularProgress'
        self._namespace = 'dashmaterialui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['className', 'color', 'disableShrink', 'id', 'size', 'style', 'value', 'variant']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(CircularProgress, self).__init__(**args)
