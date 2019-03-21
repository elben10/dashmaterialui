# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Button(Component):
    """A Button component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): The content of the button.
- classes (dict; optional): Override or extend the styles applied to the component. See CSS API below for more details.
- color (a value equal to: 'default', 'inherit', 'primary', 'secondary'; optional): The color of the component. It supports those theme colors that make sense for this component.
- component (optional): The component used for the root node. Either a string to use a DOM element or a component.
- disabled (boolean; optional): If true, the button will be disabled.
- disableFocusRipple (boolean; optional): If true, the keyboard focus ripple will be disabled. disableRipple must also be true.
- disableRipple (boolean; optional): If true, the ripple effect will be disabled.
- fullWidth (boolean; optional): If true, the button will take up the full width of its container.
- href (string; optional): The URL to link to when the button is clicked. If defined, an a element will be used as the root node.
- mini (boolean; optional): If true, and variant is 'fab', will use mini floating action button styling.
- size (a value equal to: 'small', 'medium', 'large'; optional): The size of the button. small is equivalent to the dense button styling.
- style (dict; optional): Add style object
- variant (a value equal to: 'text', 'outlined', 'contained', 'fab', 'extendedFab', 'flat', 'raised'; optional): The variant to use. WARNING: flat and raised are deprecated. Instead use text and contained respectively. fab and extendedFab are deprecated. Instead use <Fab> and <Fab variant="extended">"""
    @_explicitize_args
    def __init__(self, children=None, classes=Component.UNDEFINED, color=Component.UNDEFINED, component=Component.UNDEFINED, disabled=Component.UNDEFINED, disableFocusRipple=Component.UNDEFINED, disableRipple=Component.UNDEFINED, fullWidth=Component.UNDEFINED, href=Component.UNDEFINED, mini=Component.UNDEFINED, size=Component.UNDEFINED, style=Component.UNDEFINED, variant=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'classes', 'color', 'component', 'disabled', 'disableFocusRipple', 'disableRipple', 'fullWidth', 'href', 'mini', 'size', 'style', 'variant']
        self._type = 'Button'
        self._namespace = 'dashmaterialui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'classes', 'color', 'component', 'disabled', 'disableFocusRipple', 'disableRipple', 'fullWidth', 'href', 'mini', 'size', 'style', 'variant']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Button, self).__init__(children=children, **args)
