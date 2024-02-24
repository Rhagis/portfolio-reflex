import reflex as rx

class State(rx.State):
    """The app state."""


def index() -> rx.Component:
    return rx.vstack(
        rx.text("hola"),
        rx.text("esto es una prueba"),
        rx.text("Saludos, python")
    )


app = rx.App()
app.add_page(index)
