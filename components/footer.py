import reflex as rx

def footer() -> rx.Component:
    return rx.hstack(
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
        ),
    )