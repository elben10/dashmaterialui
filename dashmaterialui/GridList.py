# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class GridList(Component):
    """A GridList component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): The content of the component.
- cellHeight (a value equal to: PropTypes.number, 'auto'; optional): Number of px for one cell height. You can set 'auto' if you want to let the children determine the height.
- classes (dict; optional): Override or extend the styles applied to the component. See CSS API below for more details.
- cols (number; optional): Number of columns.
- component (optional): The component used for the root node. Either a string to use a DOM element or a component.
- id (string; optional): The components id
- spacing (number; optional): Number of px for the spacing between tiles.
- style (dict; optional): Add style object"""
    @_explicitize_args
    def __init__(self, children=None, cellHeight=Component.UNDEFINED, classes=Component.UNDEFINED, cols=Component.UNDEFINED, component=Component.UNDEFINED, id=Component.UNDEFINED, spacing=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'cellHeight', 'classes', 'cols', 'component', 'id', 'spacing', 'style']
        self._type = 'GridList'
        self._namespace = 'dashmaterialui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'cellHeight', 'classes', 'cols', 'component', 'id', 'spacing', 'style']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(GridList, self).__init__(children=children, **args)
