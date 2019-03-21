# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Typography(Component):
    """A Typography component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): The content of the component.
- align (a value equal to: 'inherit', 'left', 'center', 'right', 'justify'; optional): Set the text-align on the component.
- classes (dict; optional): Override or extend the styles applied to the component. See CSS API below for more details.
- color (a value equal to: 'default', 'error', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary'; optional): The color of the component. It supports those theme colors that make sense for this component.
- component (optional): The component used for the root node. Either a string to use a DOM element or a component. By default, it maps the variant to a good default headline component.
- gutterBottom (boolean; optional): If true, the text will have a bottom margin.
- headlineMapping (dict; optional): We are empirically mapping the variant property to a range of different DOM element types. For instance, subtitle1 to <h6>. If you wish to change that mapping, you can provide your own. Alternatively, you can use the component property. The default mapping is the following:
- inline (boolean; optional): Controls whether the Typography is inline or not.
- internalDeprecatedVariant (boolean; optional): A deprecated variant is used from an internal component. Users don't need a deprecation warning here if they switched to the v2 theme. They already get the mapping that will be applied in the next major release.
- noWrap (boolean; optional): If true, the text will not wrap, but instead will truncate with an ellipsis.
- paragraph (boolean; optional): If true, the text will have a bottom margin.
- variant (a value equal to: 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline', 'srOnly', 'inherit', "display4", 'display3', 'display2', 'display1', 'headline', 'title', 'subheading'; optional): Applies the theme typography styles. Use body1 as the default value with the legacy implementation and body2 with the new one."""
    @_explicitize_args
    def __init__(self, children=None, align=Component.UNDEFINED, classes=Component.UNDEFINED, color=Component.UNDEFINED, component=Component.UNDEFINED, gutterBottom=Component.UNDEFINED, headlineMapping=Component.UNDEFINED, inline=Component.UNDEFINED, internalDeprecatedVariant=Component.UNDEFINED, noWrap=Component.UNDEFINED, paragraph=Component.UNDEFINED, variant=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'align', 'classes', 'color', 'component', 'gutterBottom', 'headlineMapping', 'inline', 'internalDeprecatedVariant', 'noWrap', 'paragraph', 'variant']
        self._type = 'Typography'
        self._namespace = 'dashmaterialui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'align', 'classes', 'color', 'component', 'gutterBottom', 'headlineMapping', 'inline', 'internalDeprecatedVariant', 'noWrap', 'paragraph', 'variant']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Typography, self).__init__(children=children, **args)
