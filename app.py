import dashmaterialui as dmui
import dash
from dash.dependencies import Input, Output, State
import dash_core_components as dcc
import dash_html_components as html
import dash_renderer
import plotly.graph_objs as go

import base64
import io
import datetime

import pandas as pd

# dash_renderer._set_react_version("16.8.0")

df1 = pd.DataFrame({"id": [1, 1, 2, 2], "val": [1, 2, 3, 4]})

external_stylesheets = ["https://fonts.googleapis.com/icon?family=Material+Icons"]

app = dash.Dash(__name__, external_stylesheets=external_stylesheets)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True


def df_table(df):
    return dmui.Table(
        [
            dmui.TableHead(dmui.TableRow([dmui.TableCell(i) for i in df.columns])),
            dmui.TableBody(
                [
                    dmui.TableRow(
                        [dmui.TableCell(value) for indx1, value in row.iteritems()]
                    )
                    for indx, row in df.iterrows()
                ]
            ),
        ]
    )


app.layout = html.Div([
    dmui.AppBar("HEJSA"),
    dmui.Avatar("HEJSA"),
    dmui.Badge("HEJSA"),
    dmui.Button("HEJSA"),
    dmui.Card("HEJSA"),
    dmui.CardActionArea("HEJSA"),
    dmui.CardActions("HEJSA"),
    dmui.CardContent("HEJSA"),
    dmui.CardMedia(src='test.png', component='img'),
    dmui.CircularProgress(),
    dmui.Divider(),
    dmui.Grid("HEJSA"),
    dmui.GridList("HEJSA"),
    dmui.Icon("add_circle"),
    dmui.IconButton(dmui.Icon('star_border')),
    dmui.Link("HEJSA"),
    dmui.Paper("HEJSA"),
    dmui.Table("HEJSA"),
    dmui.TableBody("HEJSA"),
    dmui.TableCell("HEJSA"),
    dmui.TableFooter("HEJSA"),
    dmui.TableHead("HEJSA"),
    dmui.TableRow("HEJSA"),
    dmui.Toolbar("HEJSA"),
    dmui.Typography("HEJSA", variant='h1')
])


if __name__ == "__main__":
    app.run_server(debug=True, port=8051)
