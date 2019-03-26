# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class CardMedia(Component):
    """A CardMedia component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- className (string; optional): Override or extend the styles applied to the component. See CSS API below for more details.
- component (optional): The component used for the root node. Either a string to use a DOM element or a component.
- id (string; optional): The components id
- image (string; optional): Image to be displayed as a background image. Either image or src prop must be specified. Note that caller must specify height otherwise the image will not be visible.
- src (string; optional): An alias for image property. Available only with media components. Media components: video, audio, picture, iframe, img.
- style (dict; optional): Add style object"""
    @_explicitize_args
    def __init__(self, className=Component.UNDEFINED, component=Component.UNDEFINED, id=Component.UNDEFINED, image=Component.UNDEFINED, src=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['className', 'component', 'id', 'image', 'src', 'style']
        self._type = 'CardMedia'
        self._namespace = 'dashmaterialui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['className', 'component', 'id', 'image', 'src', 'style']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(CardMedia, self).__init__(**args)
