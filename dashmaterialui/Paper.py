# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Paper(Component):
    """A Paper component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): The content of the component.
- className (string; optional): Override or extend the styles applied to the component. See CSS API below for more details.
- component (optional): The component used for the root node. Either a string to use a DOM element or a component.
- elevation (number; optional): Shadow depth, corresponds to dp in the spec. It's accepting values between 0 and 24 inclusive.
- id (string; optional): The components id
- square (boolean; optional): If true, rounded corners are disabled.
- style (dict; optional): Add style object"""
    @_explicitize_args
    def __init__(self, children=None, className=Component.UNDEFINED, component=Component.UNDEFINED, elevation=Component.UNDEFINED, id=Component.UNDEFINED, square=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'className', 'component', 'elevation', 'id', 'square', 'style']
        self._type = 'Paper'
        self._namespace = 'dashmaterialui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'className', 'component', 'elevation', 'id', 'square', 'style']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Paper, self).__init__(children=children, **args)
