# Manual de Uso del Inspector de Elementos

## 06 - Panel Fuentes: Depuración de Código y Exploración de Archivos

El panel **Fuentes** (Sources) es tu cuartel general para **ver el código fuente** que compone la página y, lo más importante, para **depurar código JavaScript** pausando su ejecución.

### Estructura del Panel Fuentes

El panel se divide en varias secciones principales:

1.  **Navegador de Archivos:** El panel lateral izquierdo. Muestra un árbol jerárquico de todos los recursos (HTML, CSS, JS, imágenes, etc.) que el navegador ha cargado para la página actual, organizados típicamente por dominio. Puedes navegar por las carpetas y hacer clic en un archivo para abrirlo en el editor central.
    * **Filesystem / Workspaces:** Puedes mapear carpetas locales a URLs de red aquí para editar archivos directamente en DevTools y guardar los cambios en tu disco duro.
2.  **Editor de Código:** El área central donde se visualiza el contenido del archivo seleccionado. Es un editor de código completo con resaltado de sintaxis, números de línea y la capacidad de establecer breakpoints.
3.  **Panel de Depuración de JavaScript:** Aparece en el lado derecho (o a veces en la parte inferior) y solo se activa cuando la ejecución de JavaScript está pausada. Contiene secciones cruciales:
    * **Watch:** Te permite añadir expresiones JavaScript para monitorear sus valores a medida que avanza la depuración.
    * **Breakpoints:** Una lista de todos los breakpoints que has establecido. Puedes activarlos/desactivarlos o eliminarlos desde aquí.
    * **Scope:** Muestra las variables accesibles en el ámbito de ejecución actual (Local, Closure, Global) y sus valores.
    * **Call Stack:** Muestra la secuencia de llamadas a funciones que llevaron a la ejecución a la pausa actual. Cada entrada en la pila es un enlace a la ubicación en el código de la llamada.

### Depuración con Breakpoints

La funcionalidad más potente del panel Fuentes es la capacidad de **pausar la ejecución de JavaScript** usando breakpoints.

* **Line Breakpoints:** El tipo más común. Haz clic en el **margen izquierdo** (junto al número de línea) en el Editor de Código. Aparecerá un indicador azul. Cuando la ejecución alcance esta línea, se detendrá.
* **Conditional Breakpoints:** Haz clic derecho en el margen izquierdo y selecciona "Add conditional breakpoint...". Ingresa una expresión JavaScript. La ejecución solo se pausará si la expresión se evalúa como `true`. Útil para depurar bucles o funciones que se ejecutan muchas veces.
* **DOM Breakpoints:** En el panel Elementos, haz clic derecho sobre un nodo y selecciona `Break on...`. Puedes pausar cuando el nodo es removido, cuando se modifican sus atributos o cuando se modifica su subárbol (sus hijos). Aparecen en la sección DOM Breakpoints del panel de depuración.
* **XHR/Fetch Breakpoints:** En el panel de depuración, en la sección "XHR/fetch Breakpoints", haz clic en "+" para añadir una cadena. La ejecución se pausará cuando se realice una solicitud XHR o Fetch cuya URL contenga esa cadena. Útil para depurar llamadas a APIs.
* **Event Listener Breakpoints:** En el panel de depuración, en la sección "Event Listener Breakpoints", expande categorías (ej. Mouse, Keyboard) y marca tipos de eventos. La ejecución se pausará cuando se dispare ese tipo de evento. Muy potente para depurar interacciones que no sabes qué código activan.

![Diferentes tipos de breakpoints en el panel Fuentes](/img/inspector-fuentes-breakpoints.png)

### Controlando la Ejecución Pausada

Una vez que el código se detiene en un breakpoint, el panel de depuración se activa y aparecen controles en la barra de herramientas superior del Inspector o en el panel de depuración:

* **Resume/Pause Script Execution (`F8` / `Cmd + \`):** Continúa la ejecución hasta el siguiente breakpoint o hasta que termine el script.
* **Step Over Next Function Call (`F10` / `Cmd + '`):** Ejecuta la siguiente línea de código, pero si es una llamada a función, ejecuta la función completa sin entrar en ella.
* **Step Into Next Function Call (`F11` / `Cmd + ;`):** Ejecuta la siguiente línea. Si es una llamada a función, *entra* en la función y pausa en la primera línea dentro de ella.
* **Step Out of Current Function (`Shift + F11` / `Cmd + Shift + ;`):** Continúa la ejecución hasta el final de la función actual y pausa en la siguiente sentencia después de la llamada original a esa función.

Mientras está pausado, puedes pasar el cursor sobre variables en el Editor de Código para ver sus valores, o usar la **Consola** para inspeccionar o modificar variables en el ámbito actual.

El panel Fuentes es tu aliado indispensable para desentrañar la lógica de tu JavaScript, seguir el flujo de ejecución, examinar el estado del programa en puntos clave y, en última instancia, resolver bugs complejos.