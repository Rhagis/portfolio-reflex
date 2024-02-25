import reflex as rx
from Styles.styles import style
from components.footer import footer
from views.card import card



def index() -> rx.Component:
    return rx.center(
        rx.vstack(
            rx.hstack(
                rx.avatar(src='logo_horda.jpg',
                          size="9"
                          ),
                rx.text("Picasso Matias",
                        size="5",
                        
                        ),
                ),
            rx.text("Soy Picasso Matias, soy docente, Desarrollador Web Full Stack y un apacionado por la ciencia. Tengo conocimientos principalmente de Python y nociones basicas de PHP y Javascript."),
            rx.hstack(
                rx.link(
                    rx.button(
                        rx.icon("github"),
                        rx.text("Github")
                    ),
                    href='https://github.com/Rhagis',
                    is_external=True
                ),
                rx.link(
                    rx.button(
                        rx.icon("linkedin"),
                        rx.text("Linkedin"),
                    ),
                    href='https://www.linkedin.com/in/picasso-matias-5b9834b6/',
                    is_external=True,
                )
            ),
            rx.vstack(
                rx.section(
                    rx.text("Formación", size="7"),
                    ),
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
