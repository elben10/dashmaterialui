# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class TableHead(Component):
    """A TableHead component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is ediTableHead by the user.

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): The content of the component, normally TableRow.
- classes (dict; optional): Override or extend the styles applied to the component. See CSS API below for more details.
- component (optional): The component used for the root node. Either a string to use a DOM element or a component.
- style (dict; optional): Add style object"""
    @_explicitize_args
    def __init__(self, children=None, classes=Component.UNDEFINED, component=Component.UNDEFINED, style=Component.UNDEFINED, padding=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'classes', 'component', 'style']
        self._type = 'TableHead'
        self._namespace = 'dashmaterialui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'classes', 'component', 'style']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(TableHead, self).__init__(children=children, **args)
