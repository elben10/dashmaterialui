# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Link(Component):
    """A Link component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): The content of the link.
- block (boolean; optional): Controls whether the link is inline or not. When block is true the link is not inline when block is false it is.
- classes (dict; optional): Override or extend the styles applied to the component. See CSS API below for more details.
- color (a value equal to: 'error', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary'; optional): The color of the link.
- component (optional): The component used for the root node. Either a string to use a DOM element or a component.
- href (string; optional): The url to refer to
- style (dict; optional): Add style object
- TypographyClasses (dict; optional): classes property applied to the Typography element.
- underline (a value equal to: 'none', 'hover', 'always'; optional): Controls when the link should have an underline.
- variant (string; optional): Applies the theme typography styles."""
    @_explicitize_args
    def __init__(self, children=None, block=Component.UNDEFINED, classes=Component.UNDEFINED, color=Component.UNDEFINED, component=Component.UNDEFINED, href=Component.UNDEFINED, style=Component.UNDEFINED, TypographyClasses=Component.UNDEFINED, underline=Component.UNDEFINED, variant=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'block', 'classes', 'color', 'component', 'href', 'style', 'TypographyClasses', 'underline', 'variant']
        self._type = 'Link'
        self._namespace = 'dashmaterialui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'block', 'classes', 'color', 'component', 'href', 'style', 'TypographyClasses', 'underline', 'variant']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Link, self).__init__(children=children, **args)
