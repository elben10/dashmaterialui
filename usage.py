import dashmaterialui
import dash
from dash.dependencies import Input, Output
import dash_core_components as dcc
import dash_html_components as html

external_stylesheets = ["https://fonts.googleapis.com/icon?family=Material+Icons"]

app = dash.Dash(__name__, external_stylesheets=external_stylesheets)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div(
    [
        dashmaterialui.Grid(
            [
                dashmaterialui.Grid("hejsa", item=False, xs=3),
                dashmaterialui.Grid("hejsa", item=True, xs=3),
                dashmaterialui.Grid("hejsa", item=True, xs=6),
                dashmaterialui.Grid("hejsa", item=False, xs=3),
                dashmaterialui.Grid("hejsa", item=True, xs=3),
                dashmaterialui.Grid("hejsa", item=True, xs=6),
            ],
            container=True,
        ),
        dashmaterialui.Avatar(
            src="https://images.unsplash.com/photo-1552958459-fcfd899af723?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&dl=moises-alex-1447758-unsplash.jpg"
        ),
        dashmaterialui.Paper(html.Div("HEJSA", style={"height": "10cm"})),
        dashmaterialui.Grid(
            dashmaterialui.Grid(
                dashmaterialui.Paper(
                    [
                        dashmaterialui.Typography(
                            "THIS IS  A GRAPH", variant="h1", align="center"
                        ),
                        dcc.Graph(
                            id="example-graph",
                            figure={
                                "data": [
                                    {
                                        "x": [1, 2, 3],
                                        "y": [4, 1, 2],
                                        "type": "bar",
                                        "name": "SF",
                                    },
                                    {
                                        "x": [1, 2, 3],
                                        "y": [2, 4, 5],
                                        "type": "bar",
                                        "name": u"Montréal",
                                    },
                                ],
                                # "layout": {"title": "Dash Data Visualization"},
                            },
                        ),
                    ]
                ),
                item=True,
                xs=10,
            ),
            justify="center",
            container=True,
        ),
        dashmaterialui.Typography("h1. Heading", component="h2", variant="h1"),
        dashmaterialui.Link("hejsa", href="/"),
        dashmaterialui.Icon("add_circle", color="action"),
        dashmaterialui.Icon("add_circle", color="primary"),
        dashmaterialui.Button("BUTTON", href="/"),
        dashmaterialui.AppBar(dashmaterialui.Button("BUTTON", href="/")),
        dashmaterialui.Grid(
            [
                dashmaterialui.Grid(
                    dashmaterialui.Card(
                        [
                            dashmaterialui.CardContent(
                                [
                                    dashmaterialui.Typography(
                                        "Word of the Day",
                                        color="textSecondary",
                                        gutterBottom=True,
                                    ),
                                    dashmaterialui.Typography(
                                        "be•nev•o•lent", variant="h5", component="h2"
                                    ),
                                    dashmaterialui.Typography(
                                        "adjective", color="textSecondary"
                                    ),
                                    dashmaterialui.Typography(
                                        [
                                            "well meaning and kindly.",
                                            html.Br(),
                                            '"a benevolent smile"',
                                        ],
                                        component="p",
                                    ),
                                ]
                            ),
                            dashmaterialui.CardActions(
                                [dashmaterialui.Button("Learn More", size="small")]
                            ),
                        ]
                    ),
                    xs=2,
                    item=True,
                ),
                html.H1(**{'data-ged':2}),
                dashmaterialui.Grid(dashmaterialui.Card(dashmaterialui.CardActionArea(dashmaterialui.CardMedia(image='https://images.unsplash.com/photo-1552958459-fcfd899af723?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&dl=moises-alex-1447758-unsplash.jpg', style={'height': '100px'})), style={'height': '100%'}), item=True, xs=2)
            ],
            container=True,
        ),
    ]
)


if __name__ == "__main__":
    app.run_server(debug=True)
