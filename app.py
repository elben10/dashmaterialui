import dashmaterialui as dmui
import dash
from dash.dependencies import Input, Output, State
import dash_core_components as dcc
import dash_html_components as html

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
    # dmui.AppBar("HEJSA"),
    # dmui.Avatar("HEJSA"),
    # dmui.Badge("HEJSA"),
    # dmui.Button("HEJSA"),
    # dmui.Card("HEJSA"),
    # dmui.CardActionArea("HEJSA"),
    # dmui.CardActions("HEJSA"),
    # dmui.CardContent("HEJSA"),
    # dmui.CardMedia(image='https://upload.wikimedia.org/wikipedia/en/thumb/6/63/IMG_%28business%29.svg/1200px-IMG_%28business%29.svg.png', style={'height': '5cm'}),
    # dmui.CircularProgress(),
    # dmui.Divider(),
    # dmui.Grid("HEJSA", container=True),
    # dmui.GridList("HEJSA"),
    # dmui.Icon("add_circle"),
    # dmui.IconButton(dmui.Icon('star_border')),
    # dmui.Link("HEJSA"),
    # dmui.List([dmui.ListItem("hejsa"), dmui.ListItem("hejsa")]),
    # dmui.List(dmui.ListItem([dmui.ListItemAvatar(dmui.Avatar('R')), dmui.ListItemText("HEjsa")])),
    # dmui.Paper("HEJSA", className='hejsa', style={'color': 'red', 'height': '10cm', 'background': 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'}),
    dmui.Table("HEJSA"),
    dmui.TableBody("HEJSA"),
    dmui.TableCell("HEJSA"),
    dmui.TableFooter("HEJSA"),
    dmui.TableHead("HEJSA"),
    dmui.TableRow("HEJSA"),
    # dmui.Toolbar("HEJSA"),
    # dmui.Typography(id='Typo', variant='h1'),
    # dcc.Input(value='Hejsa', id='input', type='text')
])

# @app.callback(Output('Typo', 'children'), [Input('input', 'value')])
# def typo(v):
#     if v:
#         return v
#     else:
#         return "HELLO ENTER SOMETHING"


if __name__ == "__main__":
    app.run_server(debug=True, port=8000)
