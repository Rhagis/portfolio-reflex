import reflex as rx

def tecnologias(text: str,) -> rx.Component:
    return rx.hstack(
        rx.icon("search"),
        rx.text(text)
    )