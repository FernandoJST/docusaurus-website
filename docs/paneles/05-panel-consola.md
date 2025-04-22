# Panel Consola: El Entorno Interactivo de JavaScript

El panel **Consola** (Console) es tu portal de comunicación bidireccional con el entorno JavaScript de la página. Sirve para dos propósitos principales: **ver mensajes** (errores, advertencias, logs) y **ejecutar código** interactivamente.

### Tipos de Mensajes de la Consola

Tu código JavaScript y el propio navegador pueden enviar diferentes tipos de mensajes a la Consola usando el objeto global `console`:

* `console.log(mensaje, ...)`: Imprime un mensaje general. Útil para ver valores de variables o confirmar que el código se ejecuta.
* `console.info(mensaje, ...)`: Similar a `log`, pero a veces mostrado con un ícono de información.
* `console.warn(mensaje, ...)`: Imprime una advertencia, a menudo con un ícono amarillo. El navegador también emite advertencias (ej. sobre APIs obsoletas).
* `console.error(mensaje, ...)`: Imprime un error, mostrado con un ícono rojo y un stack trace (la secuencia de llamadas a funciones que llevaron al error). Los errores de ejecución de JavaScript no capturados aparecen automáticamente aquí.
* `console.table(data)`: Muestra datos tabulares (arrays de objetos, objetos) como una tabla interactiva, mucho más legible que un simple `log`.
* `console.dir(objeto)`: Imprime una representación interactiva de un objeto, permitiendo explorar sus propiedades. Útil para inspeccionar elementos del DOM o grandes objetos JavaScript.
* `console.clear()`: Borra todos los mensajes de la consola.
* `console.count(etiqueta)`: Registra cuántas veces se ha llamado a `count()` con la misma etiqueta.
* `console.time(etiqueta)` / `console.timeEnd(etiqueta)`: Mide el tiempo que tarda en ejecutarse el código entre las dos llamadas.

<div class="text--center">
  <img src="/img/inspector-consola-tipos-mensajes.png" alt="Ejemplos de diferentes tipos de mensajes en la Consola" />
</div>

Cada mensaje suele ir acompañado de un enlace al archivo fuente y número de línea donde se originó. Hacer clic en este enlace te lleva al panel **Fuentes** a esa línea de código.

### La Línea de Comandos Interactiva

La línea en la parte inferior de la Consola es un entorno de ejecución de JavaScript completo.

* Puedes escribir cualquier expresión o sentencia JavaScript válida y presionar `Enter` para ejecutarla.
* El resultado de la última expresión evaluada se muestra debajo.
* El contexto de ejecución es el ámbito global de la página actual. Puedes acceder a variables y funciones globales definidas en los scripts de la página.
* Soporta **autocompletado** a medida que escribes.
* Usa las flechas **arriba/abajo** para navegar por el historial de comandos que has ejecutado.

### Utilidades de la Consola

El Inspector proporciona algunas variables y funciones de utilidad predefinidas en la Consola:

* `\$0`: Referencia al último elemento del DOM que seleccionaste en el panel Elementos.
* `\$1`: Referencia al penúltimo elemento seleccionado, y así sucesivamente hasta `\$4`.
* `\$()`: Equivalente a `document.querySelector()`. `$('selector')` devuelve el primer elemento que coincide.
* `\$\$()`: Equivalente a `document.querySelectorAll()`. `\$\$('selector')` devuelve un array de todos los elementos que coinciden.
* `copy(objeto)`: Copia una representación de string del objeto proporcionado al portapapeles.
* `keys(objeto)`: Devuelve un array con los nombres de las propiedades del objeto.
* `values(objeto)`: Devuelve un array con los valores de las propiedades del objeto.

*Ejemplo:* Después de seleccionar un elemento en el panel Elementos, puedes escribir `\$0.style.backgroundColor = 'yellow'` en la Consola y presionar `Enter` para cambiar su color de fondo.

### Configuración de la Consola

La barra de herramientas superior de la Consola tiene opciones importantes:

* **Nivel de Log:** Un menú desplegable para filtrar los mensajes mostrados (Verbose, Info, Warnings, Errors).
* **Filtro:** Un campo de texto para mostrar solo mensajes que contienen un texto específico o coinciden con una expresión regular. También puedes filtrar por origen del mensaje (ej. mensajes de usuario, mensajes del navegador).
* **Contexto de Ejecución:** Un menú desplegable que te permite elegir el contexto JavaScript si hay varios (ej. si estás dentro de un iframe o un Service Worker). "top" se refiere al contexto de la ventana principal.
* **Preserve log:** Una casilla que, si está marcada, mantiene los mensajes de la consola incluso si navegas a otra página o recargas la actual. Muy útil para depurar redirecciones o problemas de carga inicial.
* **Clear console:** El ícono de prohibido (`∅`) borra todos los mensajes.

<div class="text--center">
  <img src="/img/inspector-consola-toolbar.png" alt="Barra de herramientas y configuraciones de la Consola" />
</div>

La Consola es indispensable para cualquier tarea de depuración JavaScript, para experimentar rápidamente con APIs del navegador o para obtener información sobre el estado de tu aplicación en tiempo de ejecución.
