# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Hidden(Component):
    """A Hidden component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): The content of the component.
- className (string; optional): Override or extend the styles applied to the component. See CSS API below for more details.
- id (string; optional): The components id
- implementation (a value equal to: 'css', 'js'; optional): Specify which implementation to use. 'js' is the default, 'css' works better for server-side rendering.
- initialWidth (a value equal to: 'xs', 'sm', 'md', 'lg', 'xl'; optional): You can use this property when choosing the js implementation with server-side rendering.
As window.innerWidth is unavailable on the server, we default to rendering an empty component during the first mount. You might want to use an heuristic to approximate the screen width of the client browser screen width.
For instance, you could be using the user-agent or the client-hints. https://caniuse.com/#search=client%20hint
- lgDown (boolean; optional): If true, screens this size and down will be hidden.
- lgUp (boolean; optional): If true, screens this size and down will be hidden.
- mdDown (boolean; optional): If true, screens this size and down will be hidden.
- mdUp (boolean; optional): If true, screens this size and down will be hidden.
- only (a value equal to: 'xs', 'sm', 'md', 'lg', 'xl', PropTypes.arrayOf(PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])); optional): Hide the given breakpoint(s).
- smDown (boolean; optional): If true, screens this size and down will be hidden.
- smUp (boolean; optional): If true, screens this size and down will be hidden.
- style (dict; optional): Add style object
- xlDown (boolean; optional): If true, screens this size and down will be hidden.
- xlUp (boolean; optional): If true, screens this size and down will be hidden.
- xsDown (boolean; optional): If true, screens this size and down will be hidden.
- xsUp (boolean; optional): If true, screens this size and down will be hidden."""
    @_explicitize_args
    def __init__(self, children=None, className=Component.UNDEFINED, id=Component.UNDEFINED, implementation=Component.UNDEFINED, initialWidth=Component.UNDEFINED, lgDown=Component.UNDEFINED, lgUp=Component.UNDEFINED, mdDown=Component.UNDEFINED, mdUp=Component.UNDEFINED, only=Component.UNDEFINED, smDown=Component.UNDEFINED, smUp=Component.UNDEFINED, style=Component.UNDEFINED, xlDown=Component.UNDEFINED, xlUp=Component.UNDEFINED, xsDown=Component.UNDEFINED, xsUp=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'className', 'id', 'implementation', 'initialWidth', 'lgDown', 'lgUp', 'mdDown', 'mdUp', 'only', 'smDown', 'smUp', 'style', 'xlDown', 'xlUp', 'xsDown', 'xsUp']
        self._type = 'Hidden'
        self._namespace = 'dashmaterialui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'className', 'id', 'implementation', 'initialWidth', 'lgDown', 'lgUp', 'mdDown', 'mdUp', 'only', 'smDown', 'smUp', 'style', 'xlDown', 'xlUp', 'xsDown', 'xsUp']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Hidden, self).__init__(children=children, **args)
