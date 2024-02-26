import reflex as rx
from Styles.styles import style
from components.footer import footer
from components.header import header
from views.card import card
from components.tecnologia import tecnologias



def index() -> rx.Component:
    return rx.center(
            rx.vstack(
                rx.hstack(
                header(),
                rx.vstack(
                    rx.text("Tecnologias"),
                    tecnologias("Python")),
                aling_item="left"
                ),
                rx.vstack(
                    rx.section(
                        rx.vstack(    
                            rx.text("proyectos"),
                            rx.hstack( 
                                card("invasion espacial", 'https://github.com/Rhagis/Proyectos-Python/tree/main/Proyecto%20juego', 'invasion_espacial.png'),
                                card("invasion espacial", 'https://github.com/Rhagis/Proyectos-Python/tree/main/Proyecto%20juego', 'invasion_espacial.png'),
                                card("invasion espacial", 'https://github.com/Rhagis/Proyectos-Python/tree/main/Proyecto%20juego', 'invasion_espacial.png'),
                                card("invasion espacial", 'https://github.com/Rhagis/Proyectos-Python/tree/main/Proyecto%20juego', 'invasion_espacial.png'),
                            ),
                        ),
                    ),
                ),
                footer()
        ),
    )

app = rx.App(style=style)
app.add_page(index)
