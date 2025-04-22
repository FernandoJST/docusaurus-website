# Manual de Uso del Inspector de Elementos

## 03 - Panel Elementos: Explorando el DOM

El panel **Elementos** es el pilar central del Inspector. Es tu vista interactiva del **Document Object Model (DOM)**, la estructura jerárquica de objetos que representa el contenido de la página web.

### El Árbol del DOM vs. Código Fuente HTML

Es crucial entender que el árbol del DOM que ves aquí puede ser diferente del código fuente HTML original que recibiste del servidor. ¿Por qué? Porque JavaScript puede añadir, eliminar o modificar elementos, atributos y texto *después* de que la página se carga. El panel Elementos siempre te muestra el estado *actual* del DOM.

### Funcionalidades Clave del Panel Elementos

* **Navegación en el Árbol:** La vista principal es un árbol donde cada nodo representa un elemento HTML, un comentario o un nodo de texto. Puedes expandir (▸) o colapsar (▾) nodos para navegar por la jerarquía.
* **Seleccionar Elementos:**
    * Haz clic en un nodo en el árbol para seleccionarlo.
    * Usa el ícono de **Selector de Elementos** (una flecha con un cuadrado, `Ctrl+Shift+C` o `Cmd+Shift+C`) en la barra superior del Inspector. Haz clic en este ícono y luego haz clic en cualquier parte de la página web. El Inspector saltará al nodo correspondiente en el árbol.
    * Cuando un elemento está seleccionado en el árbol, puedes usar la variable `\$0` en la **Consola** para referenciar ese elemento. `\$1` es el penúltimo seleccionado, y así sucesivamente hasta `\$4`.
* **Resaltado en la Página:** Al pasar el cursor sobre un nodo en el árbol del DOM, el Inspector resaltará el elemento correspondiente en la página web con un overlay, mostrando información útil como su nombre de etiqueta, dimensiones y clases/IDs.
    ![Resaltar elemento en la página al pasar el cursor en el panel Elementos](/img/inspector-elementos-hover-resaltar.png)
* **Editar HTML:** Haz doble clic en cualquier parte de un nodo (nombre de etiqueta, atributo, valor de atributo, texto) para convertirlo en un campo de texto editable. Puedes modificarlo y presionar `Enter`. Los cambios se reflejan instantáneamente en la página.
    * *Ejemplo:* Cambia el texto de un `<h1>` o el `src` de una imagen.
* **Añadir Atributos:** Haz doble clic en el nombre de la etiqueta (ej. `<div>`) y escribe un espacio para añadir nuevos atributos.
* **Menú Contextual (Clic Derecho):** Haz clic derecho sobre un nodo para ver opciones poderosas:
    * `Add attribute`, `Edit as HTML` (permite editar el HTML interno, incluyendo hijos).
    * `Duplicate element`, `Delete element`.
    * `Copy` (varias opciones: OuterHTML, Selector CSS, XPath, JS path, etc.).
    * `Break on...` (DOM breakpoints - hablaremos de esto en Fuentes).
    * `Force State` (equivalente al botón `:hov` en Estilos).
* **Arrastrar y Soltar:** Puedes hacer clic y arrastrar nodos en el árbol del DOM para reordenarlos o moverlos a un contenedor diferente.

### Paneles Relacionados y Vistas

Debajo o junto al árbol del DOM, encontrarás pestañas con más información sobre el elemento seleccionado:

* **Styles:** Muestra las reglas CSS aplicadas (explicado en el Panel Estilos).
* **Computed:** Muestra los valores CSS finales *calculados* por el navegador después de resolver la cascada, herencia, etc. Muy útil para ver los valores efectivos, incluyendo aquellos que no están explícitamente definidos pero son heredados o por defecto.
    ![Panel Computed mostrando estilos finales](/img/inspector-elementos-computed.png)
* **Layout (o Box Model):** Muestra la representación visual del Box Model del elemento y herramientas para depurar Flexbox y Grid.
* **Event Listeners:** Lista los detectores de eventos JavaScript (ej. `click`, `mouseover`) asociados a este elemento. Puedes expandirlos para ver el código de la función manejadora.
* **DOM Breakpoints:** Lista los breakpoints del DOM que has establecido (ej. pausar cuando se modifica el subárbol de un elemento).

El panel Elementos es tu ventana principal al contenido y la estructura de la página. Domina la selección y edición en tiempo real, y tendrás una base sólida para interactuar con el resto de herramientas, especialmente el panel Estilos.