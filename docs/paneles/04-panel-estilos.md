# Panel Estilos: El Laboratorio CSS

El panel **Estilos** (Styles) es donde pasas la mayor parte de tu tiempo cuando depuras o ajustas la apariencia visual de una página. Muestra todas las reglas CSS que afectan al elemento seleccionado y te permite modificarlas en tiempo real.

### Entendiendo la Cascada y la Especificidad

La sección principal del panel Estilos lista las reglas CSS aplicadas en el orden en que la cascada las resuelve. Esto es fundamental:

* Las reglas que aparecen **más arriba** en la lista suelen tener **menos especificidad** o provienen de hojas de estilo por defecto del navegador o externas.
* Las reglas que aparecen **más abajo** tienen **mayor especificidad** o se definen más tarde en el código, y por lo tanto, sobrescriben a las anteriores.
* Las propiedades **tachadas** (`color: blue;`) han sido **sobrescritas** por una regla posterior o más específica.

![Panel Estilos mostrando reglas sobrescritas (tachadas)](/img/inspector-estilos-cascada.png)

Esta visualización te ayuda a entender *por qué* un estilo particular se está aplicando (o no) a un elemento.

### Interacción Poderosa con CSS

* **Activar/Desactivar Propiedades:** Cada declaración CSS (`propiedad: valor;`) tiene una casilla a su izquierda. Haz clic en la casilla para **desactivar temporalmente** esa propiedad. Esto es invaluable para aislar qué propiedad está causando un problema de diseño.
* **Editar Valores:** Haz clic en el valor de una propiedad (ej. `16px` en `font-size: 16px;`). Se convierte en un campo de texto editable.
    * Para valores numéricos, puedes usar las **flechas arriba/abajo** del teclado para incrementar/decrementar el valor. Mantén `Shift` para incrementos de 10, o `Ctrl`/`Cmd` para incrementos de 100.
    * Para colores, haz clic en el **cuadrado de color** junto al valor para abrir un selector de color con opciones de formato (HEX, RGB, HSL) y una paleta de colores.
    
![Selector de color en el panel Estilos](/img/inspector-estilos-color-picker.png)

    * Para propiedades como `box-shadow` o `text-shadow`, a menudo hay un ícono que abre un editor visual.
    
![Editor visual de box-shadow](/img/inspector-estilos-box-shadow-editor.png)

* **Añadir Nuevas Propiedades:** Haz clic al final de una regla existente o en un área vacía dentro de un bloque de reglas para añadir una nueva declaración `propiedad: valor;`. El Inspector ofrece autocompletado para nombres y valores de propiedades CSS.
* **Añadir Nuevas Reglas:** Haz clic en el botón **"+"** (a veces junto a "Element Style") para añadir una nueva regla CSS con un selector por defecto (generalmente el del elemento seleccionado). Puedes editar el selector.
* **`.cls` (Clases):** Haz clic en el botón `.cls` para ver y alternar las clases CSS aplicadas al elemento seleccionado. Puedes desmarcar una clase para ver cómo se ve el elemento sin ella, o escribir un nombre para **añadir una clase existente** y probar su efecto.
* **`:hov` (Estados):** Haz clic en el botón `:hov` para forzar estados como `:hover`, `:active`, `:focus`, `:visited`, o pseudoelementos como `::before` y `::after`. Esto te permite inspeccionar y depurar estilos que solo se aplican bajo ciertas condiciones.
    
![Simular estados CSS con :hov](/img/inspector-estilos-force-state.png)

* **Box Model:** En la parte inferior del panel (o en la pestaña Layout), hay una representación interactiva del Box Model. Pasa el cursor sobre las secciones `margin`, `border`, `padding`, `content` para resaltarlas en la página. Haz doble clic en los valores para editarlos.

![Box Model interactivo en el Inspector](/img/inspector-estilos-box-model.png)

### Paneles Relacionados: Computed y Layout

* **Computed (Calculado):** Muestra los valores *finales y resueltos* de *todas* las propiedades CSS de un elemento. Esto es útil porque un elemento hereda propiedades de sus padres, y el panel Computed te muestra el valor que realmente está usando el navegador. Aquí también puedes ver de qué regla específica proviene el valor (haz clic en el ícono de flecha).
* **Layout:** Contiene herramientas específicas para depurar Flexbox y Grid. Si un elemento o su padre usa `display: flex` o `display: grid`, este panel mostrará un overlay visual en la página y opciones para inspeccionar los "tracks" de la grid o la distribución de los ítems flex.

El panel Estilos es tu sandbox para CSS. La capacidad de experimentar y ver los cambios al instante, junto con la información detallada sobre la cascada y los valores calculados, lo convierte en una herramienta indispensable para cualquier tarea de diseño front-end y depuración visual.
