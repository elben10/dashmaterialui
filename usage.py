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
    ], container=True),
    dashmaterialui.Avatar(src='https://images.unsplash.com/photo-1552958459-fcfd899af723?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&dl=moises-alex-1447758-unsplash.jpg'),
    dashmaterialui.Paper(html.Div("HEJSA", style={'height': '10cm'})),
    dashmaterialui.Typography("h1. Heading", component="h2", variant="h1"),
])


if __name__ == '__main__':
    app.run_server(debug=True)
