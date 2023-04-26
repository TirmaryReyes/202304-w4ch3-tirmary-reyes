# Week 4 - Challenge 3

## Teléfono React

Aquí tienes la maquetación HTML/CSS de una aplicación, tendrás que programarla en React.

- Se debe poder escribir un número de teléfono clicando en los botones numéricos. La tecla borrar puede borrar el último dígito o borrar el número completo, como prefieras.
- Sólo se verá o el botón Llamar o el botón Colgar, nunca los dos a la vez.
- No se puede introducir un número de más de 9 cifras.
- El botón Llamar sólo se puede pulsar si el número tiene 9 cifras. Cuando tenga 9 cifras el botón debe tener la clase "active".
- El mensaje superior "Calling..." sólo aparece cuando se pulsa el botón "Call" y mientras dure la llamada. Usa la clase "off" para controlar su visibilidad (el elemento HTML correspondiente debe seguir estando, aunque no se vea).
- Al pulsar el botón "Call", éste debe desaparecer del DOM y debe aparecer en su lugar el botón "Hang up". El teclado tiene que quedar deshabilitado.
- Al pulsar el botón "Hang up", éste debe desaparecer y debe aparecer en su lugar el botón "Call". El teclado tiene que habilitarse. Además, se debe borrar el número de teléfono.
- Si no ocurre nada tras cinco segundos de llamada, ésta se debe colgar automáticamente.

Separa todo en los siguientes componentes:

- Info
- Display
- Actions
  - Action
- Keyboard
  - Key

Guarda los estados comunes en un context.

Entrega el listado de responsabilidades.
