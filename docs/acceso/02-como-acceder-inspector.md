# Métodos de Acceso al Inspector

Acceder a las Herramientas para Desarrolladores es el primer paso para empezar a trabajar con ellas. Aquí detallamos los métodos más comunes y eficientes.

### Método 1: El Atajo de Teclado Universal (`F12`)

Este es el método más rápido y recomendado para abrir el Inspector en la mayoría de los navegadores de escritorio (Chrome, Firefox, Edge, Opera).

* Simplemente presiona la tecla **`F12`**.

Alternativas comunes que funcionan en muchos navegadores:
* **Windows/Linux:** `Ctrl + Shift + I`
* **macOS:** `Cmd + Option + I`

Estos atajos suelen abrir el Inspector en el último panel que tenías activo.

### Método 2: Inspeccionar un Elemento Específico (Clic Derecho)

Este método es extremadamente útil porque no solo abre el Inspector, sino que también selecciona automáticamente el elemento de la página sobre el que hiciste clic, llevándote directamente al panel "Elementos".

1.  Navega a la página que quieres inspeccionar.
2.  Haz **clic derecho** sobre el elemento de la página que te interesa (una imagen, un enlace, un bloque de texto, etc.).
3.  En el menú contextual que aparece, selecciona la opción **"Inspeccionar"** o **"Inspeccionar elemento"**.

El Inspector se abrirá, generalmente acoplado, y el panel Elementos estará activo, con el nodo HTML correspondiente al elemento que seleccionaste resaltado. Esto te ahorra el paso de usar el selector de elementos una vez que el Inspector está abierto.

<div class="text--center">
  <img src="/img/inspector1.png" alt="Mostrar el menú contextual con la opción Inspeccionar Elemento resaltada" />
</div>

### Método 3: A través del Menú del Navegador

Aunque menos directo, puedes acceder al Inspector desde el menú principal del navegador:

* **Google Chrome:** Menú de tres puntos verticales (⋮) > Más herramientas > Herramientas para desarrolladores.
* **Mozilla Firefox:** Menú de tres líneas horizontales (≡) > Más herramientas > Herramientas para desarrolladores > Inspector Web.
* **Microsoft Edge:** Menú de tres puntos horizontales (...) > Más herramientas > Herramientas para desarrolladores.
* **Safari (macOS):** Requiere habilitar el menú "Desarrollo" en Preferencias > Avanzado > "Mostrar el menú Desarrollo en la barra de menús". Una vez habilitado, ve a Desarrollo > Mostrar Inspector Web.

<div class="text--center">
  <img src="/img/inspector2.png" alt="Abrir Herramientas para desarrolladores desde el menú de Google Chrome" />
</div>

### Acoplar y Desacoplar el Inspector (Docking)

El Inspector no tiene por qué ocupar toda la ventana del navegador. Puedes cambiar su posición para adaptarla a tu flujo de trabajo:

* Busca el ícono de **tres puntos verticales (⋮)** (o a veces un ícono de ventana) en la esquina superior derecha de la barra de herramientas del Inspector.
* Haz clic en él para ver las opciones de "Dock side" (Lado de acoplamiento).

Las opciones comunes son:
* **Dock to bottom:** Acopla el Inspector en la parte inferior de la ventana.
* **Dock to left:** Acopla el Inspector en el lado izquierdo.
* **Dock to right:** Acopla el Inspector en el lado derecho.
* **Undock into separate window:** Abre el Inspector en su propia ventana flotante.

<div class="text--center">
  <img src="/img/inspector-docking-options.png" alt="Mostrar las opciones de docking en el menú del Inspector" />
</div>


Elegir dónde acoplar el Inspector a menudo depende del tipo de trabajo que estás haciendo. Para depurar CSS y diseño, acoplar a la derecha o abajo es común. Para trabajar con la Consola o Fuentes, una ventana separada puede ser útil.

Con estos métodos, puedes abrir el Inspector de la forma que mejor se adapte a tu tarea actual.