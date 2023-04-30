# test-gradi-web

La página está divida en tres secciones: Pre productos, Productos, y Post productos.

En la sección pre productos podemos encontrar el texto de bienvenida y los botones de navegación.

Luego en productos podemos hayar los productos desplegados y elaborados con su valoración y precio.

Por último en la sección post products está el "newsletter" funcional detectando cuando es un correo y cuando no.

A tener en cuenta:

    1. No se pudo realizar el efecto "wave" en el footer, recomendaría utilizar una imagen con este efecto en su lugar.

    2. Las imagenes "pastillas" son algo difíciles de organizar en todos los diseños (full size, responsive, celular, tablet, etc).

    3. En el endpoint API, se tuvo que eliminar una entrada (id: 8141368492342), ya que este no contenía una imagen y por ende no tenía como reemplazarla.

    4. Cuando llegas al final de la sección "Products" se va un poco más de allá de la pantalla esto por la función de desplazamiento que se va más allá del ancho de la pantalla impidiendo controlar la función (en el celular funciona sin este problema).

    5. Se intenta para las tipografías usar google fonts pero la importación de este muchas veces no funciona, se podría usar si se importa una a una con google fonts u otro sistema de fuentes.

La página fue diseñada por completo con HTML, CSS y JS, evitando el uso de librerias (tailwind, bootstrap, bulma) y el uso de framework (React, Vue JS).

Cualquier duda se puede comunicar con el dueño del repositorio.
