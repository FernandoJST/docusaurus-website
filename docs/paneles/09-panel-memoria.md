# Panel Memoria: Diagnóstico de Uso de Memoria y Fugas

El panel **Memoria** (Memory) es la herramienta principal para **analizar el uso de memoria** de tu aplicación web. Es crucial para identificar cuándo la página consume demasiada memoria (lo que puede ralentizarla o hacerla colapsar) y, sobre todo, para detectar **fugas de memoria**.

### ¿Qué es una Fuga de Memoria?

En JavaScript, la gestión de memoria la realiza principalmente un recolector de basura (Garbage Collector - GC). El GC identifica objetos que ya no son "alcanzables" desde el código en ejecución y libera la memoria que ocupan. Una fuga de memoria ocurre cuando hay **objetos que ya no necesitas, pero siguen siendo referenciados** de alguna manera, impidiendo que el GC los libere. Con el tiempo, esto puede llevar a un consumo de memoria creciente y problemas de rendimiento.

### Tipos de Perfiles de Memoria

El panel Memoria ofrece diferentes formas de perfilar el uso de memoria:

1.  **Heap Snapshot (Instantánea del Montículo):** Esta es la herramienta más utilizada para encontrar fugas de memoria. Toma una "fotografía" del estado de la memoria JavaScript en un momento específico. Muestra todos los objetos que están en memoria, sus tamaños y las referencias entre ellos.
2.  **Allocation instrumentation on timeline (Instrumentación de asignación en la línea de tiempo):** Graba las asignaciones de memoria a lo largo del tiempo. Útil para ver cuándo se asigna memoria y qué funciones son responsables.
3.  **Allocation sampling (Muestreo de asignación):** Similar al anterior pero menos detallado, con menos sobrecarga de rendimiento. Útil para perfiles largos o complejos.

Nos centraremos en los Heap Snapshots para la detección de fugas.

### Tomando y Analizando un Heap Snapshot

1.  Abre el panel Memoria.
2.  Selecciona **"Heap snapshot"** en las opciones de perfilado.
3.  Haz clic en **"Take snapshot"** (Tomar instantánea). El navegador pausará brevemente para capturar el estado de la memoria. La instantánea aparecerá en el panel lateral izquierdo.

![Tomando un Heap Snapshot](/img/inspector-memoria-take-snapshot.png)

4.  Al seleccionar una instantánea, el área principal mostrará los objetos en la memoria. La vista por defecto suele estar agrupada por constructor (`Constructor`). Columnas importantes incluyen:
    * **Distance:** La distancia más corta a la "raíz" del recolector de basura (objetos globales, la pila de llamadas, etc.). Objetos con una distancia pequeña son más propensos a ser mantenidos.
    * **Shallow Size:** El tamaño de la memoria que ocupa el objeto *en sí mismo*.
    * **Retained Size:** El tamaño total de la memoria que se libera si este objeto fuera eliminado, incluyendo los objetos que solo son referenciados por él. Este es un indicador clave del impacto de un objeto.

### Detectando Fugas de Memoria con Comparación

La técnica más efectiva para encontrar fugas es comparar snapshots:

1.  Realiza una acción en tu aplicación (ej. abrir un modal).
2.  Toma el **primer Heap Snapshot**.
3.  Realiza la acción que sospechas que causa la fuga **varias veces** (ej. abrir y cerrar el modal 3-4 veces). **Espera un poco** entre interacciones para dar tiempo al GC.
4.  Realiza una **acción inversa** si aplica (ej. cierra el modal que abriste).
5.  Toma el **segundo Heap Snapshot**.
6.  En la vista del **segundo** snapshot, cambia el modo de vista en el menú desplegable superior de "Summary" (Resumen) a **"Comparison"** (Comparación). Selecciona el primer snapshot para comparar.

![Comparando dos Heap Snapshots](/img/inspector-memoria-comparison.png)

7.  La columna **"# Delta"** te mostrará la diferencia en el número de objetos entre los dos snapshots. Una fuga se manifiesta a menudo como un **aumento constante en el número de objetos** de un tipo específico que esperabas que fueran eliminados (ej. nodos del DOM, instancias de una clase de componente) después de realizar una acción repetidamente.
8.  Ordena la tabla por "# Delta" (descendente) o por "Delta (Retained Size)" para ver qué objetos están aumentando.
9.  Selecciona un tipo de objeto sospechoso (ej. `HTMLDivElement` si sospechas de nodos DOM filtrados). En el panel inferior, la sección **"Retainers"** (Retenedores) mostrará la **ruta de retención**. Esta es la cadena de referencias de objetos que está impidiendo que el objeto seleccionado sea recolectado por el GC.

![Inspeccionando la ruta de retención de un objeto](/img/inspector-memoria-retainers.png)

10. Analiza la ruta de retención para identificar la referencia "culpable" en tu código que está manteniendo vivo el objeto innecesariamente.

### Causas Comunes de Fugas de Memoria

* Referencias no eliminadas en detectores de eventos (event listeners).
* Timers (`setInterval`, `setTimeout`) que no se cancelan.
* Cierres (Closures) que capturan variables innecesariamente.
* Cachés que crecen indefinidamente.
* Referencias a nodos del DOM que han sido removidos de la página pero no liberados.

El panel Memoria requiere una comprensión más profunda de cómo JavaScript gestiona la memoria, pero es una herramienta esencial para aplicaciones de larga ejecución, complejas o propensas a problemas de rendimiento a largo plazo.