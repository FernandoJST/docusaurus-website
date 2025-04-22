# Panel Recorder: Grabando y Reproduciendo Flujos de Usuario

El panel **Recorder** (Grabador) es una adición relativamente nueva al Inspector que te permite **grabar secuencias de interacciones del usuario** (como clics, entradas de texto y navegación) y luego **reproducirlas automáticamente**. Esto es muy útil para automatizar pruebas de regresión de flujos clave o para analizar el rendimiento de un camino de usuario específico.

### ¿Por Qué Usar el Panel Recorder?

* **Automatización Simple:** Crea rápidamente scripts de prueba sin necesidad de configurar herramientas de automatización externas complejas (como Selenium o Playwright).
* **Pruebas de Regresión:** Verifica que los flujos de usuario importantes (ej. proceso de checkout, registro) sigan funcionando después de realizar cambios en el código.
* **Perfilado de Rendimiento de Flujos:** Graba un flujo y luego usa la opción "Measure performance" para obtener un reporte detallado del panel Performance específicamente para esas interacciones.
* **Documentación de Flujos:** La lista de pasos grabados puede servir como documentación básica de cómo realizar una tarea en el sitio.

### Grabando un Nuevo Flujo

1.  Abre el panel Recorder.
2.  Haz clic en **"Create recording"** (Crear una nueva grabación).
3.  Dale un **nombre** a tu flujo.
4.  Puedes ajustar la **configuración** (ej. ¿quieres incluir scroll? ¿qué atributos prefieres usar para seleccionar elementos?).
5.  Haz clic en el botón rojo **"Start recording"** (Iniciar grabación).

<div class="text--center">
  <img alt="Iniciando una nueva grabación en el panel Recorder" src="/img/inspector-recorder-start.png" />
</div>

6.  Interactúa con la página como lo haría un usuario para completar el flujo que deseas grabar (ej. haz clic en un enlace, escribe texto en un campo, haz clic en un botón). Verás que cada acción que realizas aparece como un "step" (paso) en el panel Recorder.
7.  Una vez que hayas completado el flujo, haz clic en el botón **"End recording"** (Finalizar grabación).

### Trabajando con Grabaciones

Después de detener la grabación, verás la lista de pasos:

* **Reproducir:** Haz clic en el botón de reproducción (el triángulo) para que el navegador repita automáticamente las acciones grabadas. Puedes ajustar la velocidad de reproducción.

<div class="text--center">
  <img alt="Reproduciendo una grabación" src="/img/inspector-recorder-playback.png" />
</div>

* **Editar Pasos:** Puedes hacer clic en cualquier paso para expandirlo y ver sus detalles (ej. el selector del elemento, el tipo de evento, el valor de la entrada de texto). Puedes modificar estos detalles, eliminar pasos o añadir nuevos pasos manualmente (ej. esperar un tiempo).
* **Medir Rendimiento:** Haz clic en los tres puntos junto al nombre de la grabación y selecciona **"Measure performance"** (Medir rendimiento). Esto ejecutará la grabación mientras el panel Performance graba un perfil. Obtendrás un reporte de rendimiento detallado para ese flujo específico.
* **Medir Rendimiento:** Haz clic en el ícono de cronómetro 🕒 que aparece al costado derecho del nombre de la grabación. Esto ejecutará la grabación mientras el panel Performance graba un perfil. Obtendrás un reporte de rendimiento detallado para ese flujo específico.
* **Exportar:** Haz clic en el ícono de exportación ⬇️ (una flecha hacia abajo en una hoja) que aparece junto al nombre de la grabación. Puedes exportar el flujo en varios formatos, incluyendo un script de Puppeteer, un script de Playwright, o un archivo JSON. Esto te permite usar la grabación fuera del Inspector para automatización más robusta.

<div class="text--center">
  <img alt="Exportando una grabación" src="/img/inspector-recorder-export.png" />
</div>

* **Importar:** Puedes importar grabaciones previamente exportadas (en formato JSON).

### Limitaciones

El panel Recorder es una herramienta genial para flujos simples a moderados, pero puede tener limitaciones con interacciones muy complejas o escenarios con mucho dinamismo. Los selectores generados automáticamente pueden no siempre ser robustos si la estructura del DOM cambia.

A pesar de sus limitaciones, el panel Recorder es un excelente punto de partida para la automatización de pruebas y para obtener métricas de rendimiento específicas de flujos de usuario reales, todo dentro del propio navegador.