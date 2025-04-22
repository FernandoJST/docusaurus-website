# Potenciando el Inspector con Extensiones

El **Inspector de Elementos** ya es una suite de herramientas impresionante, pero su funcionalidad puede expandirse significativamente mediante **extensiones del navegador** diseñadas para desarrolladores. Estas extensiones añaden nuevos paneles o características que se integran directamente en la interfaz del Inspector.

## ¿Cómo Funcionan las Extensiones DevTools?

Las extensiones DevTools pueden:

- Añadir **nuevos paneles** en la barra principal del Inspector (como el panel `Components` en React Developer Tools).
- Añadir **paneles laterales** en pestañas existentes (por ejemplo, información específica en la pestaña "Elementos").
- Añadir **opciones al menú contextual** (clic derecho) dentro de la página o del Inspector.
- Proporcionar **utilidades adicionales** accesibles a través del Command Menu (`Ctrl + Shift + P`).

Estas extensiones tienen acceso al DOM, al contexto JavaScript de la página y a las APIs del Inspector, permitiendo crear herramientas de depuración muy especializadas.

## Ejemplos de Extensiones Imprescindibles

Si trabajas con tecnologías front-end populares, estas extensiones son altamente recomendadas:

### React Developer Tools

Extensión para proyectos en React. Añade un panel `Components` que muestra el árbol de componentes. Permite inspeccionar:

- `props`, `state`, `hooks`
- Contexto
- Medición de rendimiento con `Profiler`

<div class="text--center">
  <img alt="Panel Components de React Developer Tools" src="/img/extension-react-detallado.png" />
</div>

---

### Vue.js DevTools

Para proyectos con Vue.js. Muestra:

- `data`, `props`, `computed`, `watchers`, eventos
- Integración con Vue Router y Vuex
- Panel de rendimiento

---

### Redux DevTools

Ideal para proyectos con Redux:

- Visualización de acciones despachadas
- Estado de la store después de cada acción
- Depuración con "viaje en el tiempo"

<div class="text--center">
  <img alt="Panel Components de Redux DevTools" src="/img/extension-redux-detallado.png" />
</div>

---

### Angular DevTools

Herramienta para aplicaciones Angular. Permite:

- Explorar el árbol de componentes
- Ver dependencias
- Analizar ciclos de detección de cambios

---

### Lighthouse (Extensión)

Aunque Lighthouse ya viene integrado en Chrome, esta extensión:

- Puede incluir funciones más recientes
- Se ejecuta en pestañas separadas del Inspector

---

### Accessibility Insights for Web

Desarrollada por Microsoft, esta herramienta:

- Ejecuta pruebas automatizadas de accesibilidad
- Incluye "FastPass", una revisión rápida de problemas comunes

---

### JSON Viewer / Formatter

Extensiones que formatean automáticamente JSON en el panel Network:

- Facilita la lectura de respuestas sin procesar

---

### CSS Viewer

Herramienta rápida para ver estilos CSS pasando el cursor sobre elementos:

- Sin necesidad de abrir el Inspector

---

## Instalación y Gestión

1. Abre la Chrome Web Store.
2. Busca la extensión por nombre (por ejemplo: "React Developer Tools").
3. Haz clic en **"Añadir a Chrome"** y luego en **"Agregar extensión"**.
4. Abre el Inspector (`F12` o clic derecho → "Inspeccionar").
5. La nueva herramienta aparecerá como un nuevo panel automáticamente si detecta que la página usa la tecnología compatible.

> **Nota:** Algunas extensiones solo se activan si detectan una tecnología específica (React, Vue, etc.). Asegúrate de que la extensión esté habilitada en la configuración del navegador.

---

## AdBlock (Extensión)

La extensión **AdBlock** bloquea anuncios intrusivos en sitios web, mejorando la experiencia de navegación y reduciendo la carga de trabajo del navegador. Esta es una herramienta útil para desarrolladores que desean probar su sitio sin las distracciones de los anuncios.

### Instalación de AdBlock:

1. Abre la **Chrome Web Store** o la tienda de extensiones de tu navegador.
2. Busca "AdBlock" y selecciona la extensión oficial.
3. Haz clic en **"Añadir a Chrome"** o **"Agregar a Firefox"** según corresponda.
4. Confirma la instalación.

Una vez instalada, AdBlock bloqueará anuncios automáticamente, y puedes configurar filtros adicionales desde su menú.

---

## Conclusión

Agregar las extensiones DevTools adecuadas puede transformar tu flujo de trabajo. Explora y prueba las más útiles para los frameworks y tareas que realizas con frecuencia.