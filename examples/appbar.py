import dashmaterialui as dmui
import dash
from dash.dependencies import Input, Output, State
import dash_core_components as dcc
import dash_html_components as html


external_stylesheets = ["https://fonts.googleapis.com/icon?family=Material+Icons"]

app = dash.Dash(__name__, external_stylesheets=[])

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div(
    [
        dmui.AppBar(
            dmui.Toolbar(
                [
                    dmui.Typography(
                        "News", variant="h6", color="inherit", classes={"flexGrow": 1}
                    ),
                    dmui.Button("Login", color="inherit"),
                ]
            ),
            position="static",
        )
    ],
    style={"flexGrow": 1, "margin": "-8px"},
)


if __name__ == "__main__":
    app.run_server(debug=True, port=8051)
