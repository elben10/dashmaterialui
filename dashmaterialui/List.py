# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class List(Component):
    """A List component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): The content of the component.
- classes (dict; optional): Override or extend the styles applied to the component. See CSS API below for more details.
- component (optional): The component used for the root node. Either a string to use a DOM element or a component.
- dense (boolean; optional): If true, compact vertical padding designed for keyboard and mouse input will be used for the list and list items. The property is available to descendant components as the dense context.
- disablePadding (boolean; optional): If true, vertical padding will be removed from the list.
- style (dict; optional): Add style object
- subheader (a list of or a singular dash component, string or number; optional): The content of the subheader, normally ListSubheader."""
    @_explicitize_args
    def __init__(self, children=None, classes=Component.UNDEFINED, component=Component.UNDEFINED, dense=Component.UNDEFINED, disablePadding=Component.UNDEFINED, style=Component.UNDEFINED, subheader=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'classes', 'component', 'dense', 'disablePadding', 'style', 'subheader']
        self._type = 'List'
        self._namespace = 'dashmaterialui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'classes', 'component', 'dense', 'disablePadding', 'style', 'subheader']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(List, self).__init__(children=children, **args)
