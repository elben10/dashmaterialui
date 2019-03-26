# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class ListItemText(Component):
    """A ListItemText component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): Alias for the primary property.
- className (string; optional): Override or extend the styles applied to the component. See CSS API below for more details.
- disableTypography (boolean; optional): If true, the children won't be wrapped by a Typography component. This can be useful to render an alternative Typography variant by wrapping the children (or primary) text, and optional secondary text with the Typography component.
- id (string; optional): The components id
- inset (boolean; optional): If true, the children will be indented. This should be used if there is no left avatar or left icon.
- primary (boolean; optional): The main content element.
- primaryTypographyProps (dict; optional): These props will be forwarded to the primary typography component (as long as disableTypography is not true).
- secondary (a list of or a singular dash component, string or number; optional): The secondary content element.
- secondaryTypographyProps (dict; optional): These props will be forwarded to the secondary typography component (as long as disableTypography is not true).
- style (dict; optional): Add style object"""
    @_explicitize_args
    def __init__(self, children=None, className=Component.UNDEFINED, disableTypography=Component.UNDEFINED, id=Component.UNDEFINED, inset=Component.UNDEFINED, primary=Component.UNDEFINED, primaryTypographyProps=Component.UNDEFINED, secondary=Component.UNDEFINED, secondaryTypographyProps=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'className', 'disableTypography', 'id', 'inset', 'primary', 'primaryTypographyProps', 'secondary', 'secondaryTypographyProps', 'style']
        self._type = 'ListItemText'
        self._namespace = 'dashmaterialui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'className', 'disableTypography', 'id', 'inset', 'primary', 'primaryTypographyProps', 'secondary', 'secondaryTypographyProps', 'style']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(ListItemText, self).__init__(children=children, **args)
