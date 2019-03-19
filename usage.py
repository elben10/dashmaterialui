import dashmaterialui
import dash
from dash.dependencies import Input, Output
import dash_html_components as html


app = dash.Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div([
    dashmaterialui.Grid([
        dashmaterialui.Grid('hejsa', item=False, xs=3),
        dashmaterialui.Grid('hejsa', item=True, xs=3),
        dashmaterialui.Grid('hejsa', item=True, xs=6),
        dashmaterialui.Grid('hejsa', item=False, xs=3),
        dashmaterialui.Grid('hejsa', item=True, xs=3),
        dashmaterialui.Grid('hejsa', item=True, xs=6),
    ], container=True)
])


if __name__ == '__main__':
    app.run_server(debug=True)
