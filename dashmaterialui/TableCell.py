# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class TableCell(Component):
    """A TableCell component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is ediTableCell by the user.

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): The table cell contents.
- align (a value equal to: 'inherit', 'left', 'center', 'right', 'justify'; optional): Set the text-align on the table cell content. Monetary or generally number fields should be right aligned as that allows you to add them up quickly in your head without having to worry about decimals.
- classes (dict; optional): Override or extend the styles applied to the component. See CSS API below for more details.
- component (optional): The component used for the root node. Either a string to use a DOM element or a component.
- padding (a value equal to: 'default', 'checkbox', 'dense', 'none'; optional): Sets the padding applied to the cell. By default, the Table parent component set the value.
- scope (string; optional): Set scope attribute.
- sortDirection (a value equal to: 'asc', 'desc', false; optional): Set aria-sort direction.
- style (dict; optional): Add style object
- varaint (a value equal to: 'head', 'body', 'footer'; optional): Specify the cell type. By default, the TableHead, TableBody or TableFooter parent component set the value."""
    @_explicitize_args
    def __init__(self, children=None, align=Component.UNDEFINED, classes=Component.UNDEFINED, component=Component.UNDEFINED, padding=Component.UNDEFINED, scope=Component.UNDEFINED, sortDirection=Component.UNDEFINED, style=Component.UNDEFINED, varaint=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'align', 'classes', 'component', 'padding', 'scope', 'sortDirection', 'style', 'varaint']
        self._type = 'TableCell'
        self._namespace = 'dashmaterialui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'align', 'classes', 'component', 'padding', 'scope', 'sortDirection', 'style', 'varaint']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(TableCell, self).__init__(children=children, **args)
