# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Avatar(Component):
    """A Avatar component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): Used to render icon or text elements inside the Avatar. src and alt props will not be used and no img will be rendered by default.
This can be an element, or just a string.
- alt (string; optional): Used in combination with src or srcSet to provide an alt attribute for the rendered img element.
- classes (dict; optional): Override or extend the styles applied to the component. See CSS API below for more details.
- component (optional): The component used for the root node. Either a string to use a DOM element or a component.
- imgProps (dict; optional): Attributes applied to the img element if the component is used to display an image.
- sizes (string; optional): The sizes attribute for the img element.
- src (string; optional): The src attribute for the img element.
- srcSet (string; optional): The srcSet attribute for the img element."""
    @_explicitize_args
    def __init__(self, children=None, alt=Component.UNDEFINED, classes=Component.UNDEFINED, component=Component.UNDEFINED, imgProps=Component.UNDEFINED, sizes=Component.UNDEFINED, src=Component.UNDEFINED, srcSet=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'alt', 'classes', 'component', 'imgProps', 'sizes', 'src', 'srcSet']
        self._type = 'Avatar'
        self._namespace = 'dashmaterialui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'alt', 'classes', 'component', 'imgProps', 'sizes', 'src', 'srcSet']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Avatar, self).__init__(children=children, **args)
