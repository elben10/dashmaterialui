# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class ListItem(Component):
    """A ListItem component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): The content of the component. If a ListItemSecondaryAction is used it must be the last child.
- alignItems (a value equal to: 'flex-start', 'center'; optional): Defines the align-items style property.
- button (boolean; optional): If true, the list item will be a button (using ButtonBase).
- className (string; optional): Override or extend the styles applied to the component. See CSS API below for more details.
- component (optional): The component used for the root node. Either a string to use a DOM element or a component. By default, it's a li when button is false and a div when button is true.
- ContainerComponent (optional): The container component used when a ListItemSecondaryAction is the last child.
- ContainerProps (dict; optional): Properties applied to the container component if used.
- dense (boolean; optional): If true, compact vertical padding designed for keyboard and mouse input will be used.
- disabled (boolean; optional): If true, the list item will be disabled.
- disableGutters (boolean; optional): If true, the left and right padding is removed.
- divider (boolean; optional): If true, a 1px light border is added to the bottom of the list item.
- href (string; optional): The url
- id (string; optional): The components id
- selected (boolean; optional): Use to apply selected styling.
- style (dict; optional): Add style object"""
    @_explicitize_args
    def __init__(self, children=None, alignItems=Component.UNDEFINED, button=Component.UNDEFINED, className=Component.UNDEFINED, component=Component.UNDEFINED, ContainerComponent=Component.UNDEFINED, ContainerProps=Component.UNDEFINED, dense=Component.UNDEFINED, disabled=Component.UNDEFINED, disableGutters=Component.UNDEFINED, divider=Component.UNDEFINED, href=Component.UNDEFINED, id=Component.UNDEFINED, selected=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'alignItems', 'button', 'className', 'component', 'ContainerComponent', 'ContainerProps', 'dense', 'disabled', 'disableGutters', 'divider', 'href', 'id', 'selected', 'style']
        self._type = 'ListItem'
        self._namespace = 'dashmaterialui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'alignItems', 'button', 'className', 'component', 'ContainerComponent', 'ContainerProps', 'dense', 'disabled', 'disableGutters', 'divider', 'href', 'id', 'selected', 'style']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(ListItem, self).__init__(children=children, **args)
