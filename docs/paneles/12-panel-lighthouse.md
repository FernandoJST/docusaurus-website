# Manual de Uso del Inspector de Elementos

## 12 - Panel Lighthouse: Auditorías de Calidad Web

El panel **Lighthouse** integra la popular herramienta de auditoría de código abierto de Google. Te permite ejecutar una serie de pruebas automatizadas para evaluar la **calidad de tu página web** en múltiples aspectos y obtener sugerencias accionables para mejorarla.

### Categorías de Auditoría

Lighthouse evalúa tu página en las siguientes categorías principales:

* **Performance (Rendimiento):** Mide la velocidad de carga y la interactividad, basándose en Métricas Web Principales (Core Web Vitals) como Largest Contentful Paint (LCP), Total Blocking Time (TBT) y Cumulative Layout Shift (CLS).
* **Accessibility (Accesibilidad):** Comprueba si la página es accesible para usuarios con discapacidades, siguiendo pautas WCAG (Web Content Accessibility Guidelines). Busca problemas como bajo contraste de color, falta de atributos `alt` en imágenes, estructura de encabezados incorrecta, etc.
* **Best Practices (Mejores Prácticas):** Busca problemas de código moderno, seguridad (ej. usar HTTPS, evitar APIs obsoletas), rendimiento (ej. usar compresión), etc.
* **SEO (Optimización para Motores de Búsqueda):** Realiza comprobaciones básicas para asegurarse de que la página es amigable para los motores de búsqueda (ej. meta tags, robots.txt, estructura de enlaces).
* **Progressive Web App (PWA):** Evalúa si la página cumple los criterios para ser una PWA, como tener un manifiesto, un Service Worker registrado y responder offline.

### Generando un Reporte

1.  Abre el panel Lighthouse.
2.  En la sección "Categories" (Categorías), selecciona las auditorías que quieres ejecutar.
3.  En "Device" (Dispositivo), elige si quieres simular un entorno **Mobile** (dispositivo típico, red más lenta) o **Desktop** (ordenador, red rápida). La simulación móvil es crucial, ya que el rendimiento en dispositivos reales puede ser muy diferente.
4.  Marca la casilla "Clear storage" (Borrar almacenamiento) si quieres simular la primera visita de un usuario.
5.  Haz clic en el botón **"Generate report"** (Generar reporte).

<div class="text--center">
  <img src="/img/inspector-lighthouse-generate.png" alt="Configurando y generando un reporte Lighthouse" />
</div>


Lighthouse tardará un tiempo en ejecutar todas las auditorías y procesar los resultados.

### Analizando el Reporte

El reporte es la parte más valiosa. Para cada categoría seleccionada, obtendrás una puntuación de 0 a 100 (más alto es mejor) y secciones detalladas:

* **Metrics (Métricas - en Performance):** Muestra las puntuaciones y valores de las métricas de rendimiento clave (LCP, TBT, CLS, FCP, Speed Index, Time to Interactive).
* **Opportunities (Oportunidades):** Sugerencias concretas para **mejorar la métrica principal** de la categoría (ej. "Eliminar recursos que bloquean el renderizado" en Performance). Estas sugerencias a menudo tienen un impacto medible en la puntuación.
* **Diagnostics (Diagnósticos):** Información adicional sobre el rendimiento o el cumplimiento de la categoría que **no tienen un impacto directo en la puntuación principal** pero son útiles para entender los problemas (ej. "Evitar cargas de red masivas", "Mantener bajos los recuentos de solicitudes").
* **Audits Passed (Auditorías Pasadas):** Una lista de las pruebas que la página superó satisfactoriamente.

<div class="text--center">
  <img src="/img/inspector-lighthouse-report-summary.png" alt="Vista general de un reporte Lighthouse" />
</div>

Para cada sugerencia en "Opportunities" o "Diagnostics", puedes hacer clic para expandir y obtener más detalles sobre el problema, qué recursos están involucrados y, a menudo, un enlace a la documentación de Google sobre cómo solucionarlo.

### Usando Lighthouse para Mejorar

* **Prioriza "Opportunities":** Enfócate primero en las sugerencias en esta sección, ya que tendrán el mayor impacto en tus puntuaciones.
* **Enfócate en Core Web Vitals:** Presta especial atención a LCP, TBT y CLS en el reporte de Performance, ya que Google los considera importantes para la experiencia del usuario y el SEO.
* **Itera:** Implementa las sugerencias de mejora, vuelve a ejecutar el reporte y verifica si las puntuaciones mejoran. Es un proceso iterativo.
* **No busques el 100 perfecto:** Si bien una puntuación alta es deseable, el objetivo principal es mejorar la experiencia real del usuario. A veces, el esfuerzo para llegar a un 100 puede no valer la pena el pequeño beneficio adicional.

Lighthouse es una herramienta indispensable para obtener un feedback objetivo y basado en datos sobre la calidad técnica de tu sitio. Úsala regularmente, especialmente antes de lanzar cambios importantes, para asegurarte de que ofreces la mejor experiencia posible a tus usuarios.
