# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Badge(Component):
    """A Badge component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): The badge will be added relative to this node.
- badgeContent (a list of or a singular dash component, string or number; optional): The content rendered within the badge.
- classes (dict; optional): Override or extend the styles applied to the component. See CSS API below for more details.
- color (a value equal to: 'default', 'primary', 'secondary', 'error'; optional): The color of the component. It supports those theme colors that make sense for this component.
- component (optional): The component used for the root node. Either a string to use a DOM element or a component.
- id (string; optional): The components id
- invisible (boolean; optional): If true, the badge will be invisible.
- max (number; optional): Max count to show.
- showZero (boolean; optional): Controls whether the badge is hidden when badgeContent is zero.
- style (dict; optional): Add style object
- variant (a value equal to: 'standard', 'dot'; optional): The variant to use."""
    @_explicitize_args
    def __init__(self, children=None, badgeContent=Component.UNDEFINED, classes=Component.UNDEFINED, color=Component.UNDEFINED, component=Component.UNDEFINED, id=Component.UNDEFINED, invisible=Component.UNDEFINED, max=Component.UNDEFINED, showZero=Component.UNDEFINED, style=Component.UNDEFINED, variant=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'badgeContent', 'classes', 'color', 'component', 'id', 'invisible', 'max', 'showZero', 'style', 'variant']
        self._type = 'Badge'
        self._namespace = 'dashmaterialui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'badgeContent', 'classes', 'color', 'component', 'id', 'invisible', 'max', 'showZero', 'style', 'variant']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Badge, self).__init__(children=children, **args)
