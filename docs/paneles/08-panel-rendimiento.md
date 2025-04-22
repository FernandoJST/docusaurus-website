# Manual de Uso del Inspector de Elementos

## 08 - Panel Rendimiento: Optimizando la Velocidad de Ejecución

El panel **Rendimiento** (Performance) es una herramienta avanzada para analizar **cuánto tiempo tarda tu página en hacer cosas** después de que los recursos han sido cargados (aunque también captura la carga inicial). Te ayuda a identificar y corregir problemas de rendimiento en el tiempo de ejecución, como JavaScript lento, recálculos de estilo costosos o repintados excesivos.

### Grabando un Perfil de Rendimiento

Para usar el panel Rendimiento, debes grabar la actividad del navegador durante un período de tiempo:

1.  Abre el panel Rendimiento.
2.  Hay dos formas principales de grabar:
    * Haz clic en el círculo **"Record"** (Grabar) y luego interactúa con la página (scroll, clics, animaciones) durante unos segundos. Vuelve al panel y haz clic en **"Stop"** (Detener).
    * Haz clic en el ícono de recarga con una flecha circular **"Start profiling and reload page"** (Iniciar perfilado y recargar página). El Inspector recargará la página y grabará la actividad durante la carga inicial hasta que determines detenerlo o se complete automáticamente. Esta es la mejor opción para analizar el rendimiento de carga percibido.

<div class="text--center">
  <img src="/img/inspector-performance-record.png" alt="Opciones de grabación en el panel Rendimiento" />
</div>

Una vez que detienes la grabación, el Inspector procesará los datos y mostrará un reporte detallado.

### Analizando el Reporte de Rendimiento

El reporte de rendimiento es una línea de tiempo visual compleja:

1.  **Overview (Gráficos):** La sección superior muestra gráficos resumen a lo largo del tiempo para FPS (Frames Per Second), CPU usage, NET (actividad de red), y marcadores importantes como FCP (First Contentful Paint) y LCP (Largest Contentful Paint).
    * Busca barras rojas en el gráfico de FPS; indican caídas de frames y una experiencia de usuario no fluida.
    * Busca barras largas en el gráfico de CPU que indican que el hilo principal está ocupado.
2.  **Timeline Detallada:** Debajo del overview, hay carriles (lanes) para diferentes tipos de actividad:
    * **NET:** Muestra la cascada de solicitudes de red durante el período de grabación.
    * **FPS:** Muestra la tasa de frames.
    * **Main:** Es el carril más importante. Muestra la actividad del hilo principal del navegador, que es responsable de ejecutar JavaScript, calcular estilos, hacer layout, pintar y componer. Aquí verás bloques de diferentes colores que representan diferentes tareas (Scripting - amarillo, Rendering - morado, Painting - verde, Loading - azul, Other - gris).
    * Otros carriles pueden incluir Raster, Composite Layers, GPU, etc.

<div class="text--center">
  <img src="/img/inspector-performance-timeline.png" alt="Timeline detallada en el panel Rendimiento" />
</div>

3.  **Zoom y Selección:** Puedes hacer zoom en partes específicas de la línea de tiempo arrastrando un área en el overview, o usando la rueda del ratón mientras mantienes presionada `Shift`. Esto te permite enfocarte en un pico de actividad.
4.  **Paneles de Análisis Inferiores:** La sección inferior cambia dependiendo de lo que selecciones en la línea de tiempo y el tipo de vista que elijas:
    * **Summary:** Muestra un resumen de la actividad en el rango de tiempo seleccionado.
    * **Bottom-Up:** Lista las actividades ordenadas por el tiempo total que consumieron (el "tiempo propio" de una función más el tiempo de las funciones que llama). Útil para ver qué funciones son las más "caras".
    * **Call Tree:** Muestra el tiempo de ejecución en una estructura de árbol de llamadas. Útil para entender el flujo de ejecución y dónde se acumula el tiempo.
    * **Event Log:** Lista todos los eventos registrados en orden cronológico.
    * **Flame Chart (en el carril Main):** Una visualización jerárquica de las llamadas a funciones JavaScript a lo largo del tiempo. Las barras más anchas indican funciones que tardaron más en ejecutarse. La pila de llamadas se muestra verticalmente. ¡Es una vista muy poderosa para identificar cuellos de botella en JavaScript!

<div class="text--center">
  <img src="/img/inspector-performance-flame-chart.png" alt="Flame Chart en el panel Rendimiento" />
</div>

### Identificando Cuellos de Botella

Al analizar el reporte, busca:

* **Tareas largas en el hilo principal:** Bloques amarillos (Scripting) o morados (Rendering) que duran más de ~50ms. Estos pueden hacer que la página no responda.
* **Picos de actividad de CPU:** Indican que se está realizando mucho procesamiento.
* **Caídas de FPS:** Si las animaciones o el scroll no son fluidos.
* **Eventos de Recalculate Style o Layout:** Si ocurren con frecuencia o tardan mucho, es posible que tu CSS o manipulaciones del DOM sean ineficientes.

Usa los paneles Bottom-Up o Call Tree, junto con el Flame Chart, para desglosar las tareas largas y encontrar las funciones exactas que están consumiendo más tiempo.

El panel Rendimiento es una herramienta avanzada pero increíblemente valiosa para garantizar que tus aplicaciones web no solo funcionen correctamente, sino que también ofrezcan una experiencia de usuario fluida y receptiva, especialmente en dispositivos menos potentes.