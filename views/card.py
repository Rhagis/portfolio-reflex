import reflex as rx


def card(text: str, url : str, image: str) -> rx.Component:
    return rx.card(
        rx.image(src=image),
        rx.link(
            rx.text(text),
            href=url,
            is_external=True),
        align_item="flex-start",
        size="1",
        border = "none"

    )