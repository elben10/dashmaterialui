import dashmaterialui as dmui
import dash
from dash.dependencies import Input, Output, State
import dash_core_components as dcc
import dash_html_components as html


external_stylesheets = [
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    "https://fonts.googleapis.com/css?family=Roboto:300,400,500",
]

app = dash.Dash(__name__, external_stylesheets=external_stylesheets)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = dmui.Card(
    [
        dmui.CardActionArea(
            [
                dmui.CardMedia(
                    image="https://media3.giphy.com/media/63JBFmYtcBTpZfyoM4/giphy.webp",
                    style={"height": 140},
                ),
                dmui.CardContent(
                    [
                        dmui.Typography(
                            id='header', gutterBottom=True, variant="h5", component="h2"
                        ),
                        dmui.Typography(
                            "Lizards are a widespread group of squamate reptiles, with over 6,000 species, rangingacross all continents except Antarctica",
                            component="p",
                        ),
                    ]
                ),
            ]
        ),
        dmui.CardActions([
            dmui.Button('Share', size='small', color='primary'),
            dmui.Button('Learn More', size='small', color='primary', href='https://github.com'),
        ]),
        dcc.Input(value='Lizard', id='text', type='text', style={'marginLeft': '2cm', 'marginRight': '4cm'}),
    ],
    style={"maxWidth": 345},
)

@app.callback(Output('header', 'children'), [Input('text', 'value')])
def header(v):
    if v:
        return v
    else:
        return "Lizardoz"

if __name__ == "__main__":
    app.run_server(debug=True, port=8051)
