# Panel Red: Monitoreando el Tráfico de la Web

El panel **Red** (Network) te proporciona una visión completa de **todas las solicitudes y respuestas de red** que el navegador realiza mientras carga y interactúa con una página. Es esencial para analizar el rendimiento de carga, depurar APIs y verificar que los recursos se cargan correctamente.

### Capturando la Actividad de Red

Para ver la actividad de red, debes tener el panel abierto **antes** de que ocurra la solicitud. La forma más común es abrir el panel y luego **recargar la página (`F5` o `Cmd+R`)**. Verás una lista que se llena con cada recurso que el navegador solicita.

<div class="text--center">
  <img src="/img/inspector-red-capturing.png" alt="Capturando actividad de red al recargar la página" />
</div>

### La Tabla de Solicitudes

La parte principal del panel es una tabla que lista cada solicitud de red. Las columnas comunes incluyen:

* **Name:** El nombre del recurso (generalmente el nombre del archivo).
* **Status:** El código de estado HTTP de la respuesta (ej. 200 OK, 404 Not Found, 301 Moved Permanently).
* **Type:** El tipo MIME del recurso (ej. `document`, `script`, `stylesheet`, `img`, `xhr`, `Workspace`, `websocket`).
* **Initiator:** Cómo se inició la solicitud (ej. desde un parser de HTML, un script, una redirección).
* **Size:** El tamaño transferido del recurso (puede ser menor que el tamaño real si se usa compresión).
* **Time:** La duración total de la solicitud.
* **Waterfall:** Una visualización gráfica del tiempo de la solicitud (ver más abajo).

Puedes personalizar qué columnas se muestran haciendo clic derecho en el encabezado de la tabla.

### Analizando los Detalles de una Solicitud

Al hacer clic en una fila de la tabla, se abre un panel lateral o inferior con más detalles sobre esa solicitud específica. Las pestañas clave son:

* **Headers:** Muestra los encabezados de la **solicitud** (Request Headers) que el navegador envió y los encabezados de la **respuesta** (Response Headers) que el servidor devolvió. Aquí puedes ver información como el User-Agent, las cookies enviadas, el tipo de contenido, la política de caché (`Cache-Control`), etc.
* **Preview:** Intenta dar una previsualización legible de la respuesta. Útil para ver imágenes, HTML renderizado o respuestas JSON formateadas.
* **Response:** Muestra el cuerpo de la respuesta cruda tal como se recibió del servidor.
* **Timing:** Proporciona un desglose detallado de las diferentes fases de la solicitud (DNS Lookup, Initial connection, SSL, Request sent, Waiting (TTFB - Time To First Byte), Content Download). Esencial para entender dónde se gasta el tiempo.
* **Cookies:** Muestra las cookies enviadas en la solicitud y las cookies recibidas en la respuesta.

<div class="text--center">
  <img src="/img/inspector-red-details.png" alt="Panel de detalles de una solicitud de red" />
</div>

### La Cascada de Tiempo (Waterfall)

La columna "Waterfall" (Cascada) es una representación visual de la línea de tiempo de cada solicitud. Las barras de colores muestran las diferentes etapas de la solicitud de forma cronológica, permitiéndote identificar fácilmente si una solicitud está esperando (barras amarillas/naranjas en "Waiting"), tardando mucho en descargar (barras verdes) o bloqueada por otras solicitudes.

El orden de las barras también muestra si los recursos se cargan en paralelo o secuencialmente.

### Filtrado y Control de la Red

La barra de herramientas superior del panel Red tiene opciones muy útiles:

* **Grabar (icono de círculo):** Activa/desactiva la grabación de la actividad de red.
* **Borrar (icono de prohibido):** Limpia la lista de solicitudes.
* **Filtro:** Escribe texto para mostrar solo URLs que coincidan. Puedes usar palabras clave como `status-code:404` o `domain:misitio.com`.
* **Botones de Tipo:** Haz clic en botones como `XHR`, `JS`, `CSS`, `Img` para mostrar solo ese tipo de recurso.
* **Disable cache:** Si está marcado, el navegador ignorará la caché y siempre descargará los recursos del servidor. ¡Crucial para probar cambios recientes!
* **Throttling:** Un menú desplegable que simula velocidades de red más lentas (ej. "Fast 3G", "Slow 3G") o incluso offline. Indispensable para probar el rendimiento en condiciones reales de usuario.

<div class="text--center">
  <img src="/img/inspector-red-throttling.png" alt="Opciones de throttling en el panel Red" />
</div>

* **Online/Offline:** Simula el estado online/offline del navegador.

El panel Red es tu herramienta principal para diagnosticar problemas de carga, optimizar el tamaño y número de recursos, depurar peticiones a servidores externos y asegurar que tu página se comporta bien bajo diferentes condiciones de red.