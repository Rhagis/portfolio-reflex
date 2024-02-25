import reflex as rx


def card(text: str, url : str, image: str) -> rx.Component:
    return rx.flex(
        rx.card(
            rx.vstack(
                rx.image(src=image, width="100%"),
                rx.vstack(
                    rx.hstack(
                        rx.text(text.upper(),
                                font_weigth="bold",
                                font_size="2em"),
                        rx.link(
                            rx.button(
                                rx.icon("Github")),
                            href=url,
                            is_external=True
                        ),
                    ),
                    rx.text("asddsa")),
            ),
            align_item="flex-start",
            size="1",
            border = "none",
            width="100%" 
        ),
    )