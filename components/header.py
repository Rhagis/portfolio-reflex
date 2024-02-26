import reflex as rx

def header() -> rx.Component:
    return rx.center(
            rx.hstack(
                rx.avatar(src='logo_horda.jpg',
                    size="9"
                    ),
                rx.vstack(
                rx.text("Picasso Matias",
                        size="5",
                        ),
                rx.text("""Soy Picasso Matias, soy docente, Desarrollador Web Full Stack y un apacionado por la ciencia. 
                        Tengo conocimientos principalmente de Python y nociones basicas de PHP y Javascript.""",
                        width="40%"),
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
                ),
            ),
            aling_item="center",            
        )