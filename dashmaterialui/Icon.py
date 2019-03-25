# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Icon(Component):
    """A Icon component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): The name of the icon font ligature.
- classes (dict; optional): Override or extend the styles applied to the component. See CSS API below for more details.
- color (a value equal to: 'inherit', 'primary', 'secondary', 'action', 'error', 'disabled'; optional): The color of the component. It supports those theme colors that make sense for this component.
- component (optional): The component used for the root node. Either a string to use a DOM element or a component.
- fontSize (a value equal to: 'inherit', 'default', 'small', 'large'; optional): The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
- id (string; optional): The components id
- style (dict; optional): Add style object"""
    @_explicitize_args
    def __init__(self, children=None, classes=Component.UNDEFINED, color=Component.UNDEFINED, component=Component.UNDEFINED, fontSize=Component.UNDEFINED, id=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'classes', 'color', 'component', 'fontSize', 'id', 'style']
        self._type = 'Icon'
        self._namespace = 'dashmaterialui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'classes', 'color', 'component', 'fontSize', 'id', 'style']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Icon, self).__init__(children=children, **args)
