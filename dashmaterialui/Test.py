# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Test(Component):
    """A Test component.


Keyword arguments:
- children (a list of or a singular dash component, string or number; optional)
- classes (dict; optional)"""
    @_explicitize_args
    def __init__(self, children=None, classes=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'classes']
        self._type = 'Test'
        self._namespace = 'dashmaterialui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'classes']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Test, self).__init__(children=children, **args)
