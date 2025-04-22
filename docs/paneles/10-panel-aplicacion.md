# Manual de Uso del Inspector de Elementos

## 10 - Panel Aplicación: Explorando Recursos y Almacenamiento

El panel **Aplicación** (Application) te ofrece una vista centralizada de diversos recursos y mecanismos de almacenamiento del lado del cliente que utiliza una página web. Es particularmente útil para depurar características relacionadas con el rendimiento, la confiabilidad (ej. offline) y la interacción con el navegador.

### Estructura del Panel Aplicación

El panel lateral izquierdo organiza los recursos en secciones:

1.  **Application:** Información general sobre la aplicación web, incluyendo el Manifiesto de la Aplicación y la configuración de Service Worker.
2.  **Storage:** Diversos mecanismos de almacenamiento persistente y de sesión.
3.  **Background Services:** Monitoreo de actividades en segundo plano.
4.  **Frames:** Una vista de árbol de los frames (incluyendo iframes) de la página.

### Sección Storage: Gestión de Datos en el Cliente

Esta es una de las secciones más utilizadas. Te permite inspeccionar y manipular los datos que una página guarda en el navegador del usuario.

* **Local Storage y Session Storage:**
    * Estas APIs almacenan pares clave-valor en el navegador. Local Storage persiste hasta que el usuario lo borra; Session Storage dura solo por la duración de la sesión (mientras el navegador está abierto).
    * Al seleccionar uno, verás una tabla con las claves y valores.
    * Puedes **añadir nuevas entradas**, **editar valores** (haz doble clic) o **eliminar entradas** (selecciona y presiona `Delete` o usa el menú contextual).
    * Útil para depurar preferencias de usuario, estados de sesión, tokens de autenticación, etc.

<div class="text--center">
  <img src="/img/inspector-aplicacion-local-storage.png" alt="Inspeccionando Local Storage" />
</div>

* **Cookies:**
    * Pequeños archivos de datos que los sitios web almacenan en tu navegador, enviados con cada solicitud al mismo dominio. Usados para seguimiento de sesión, personalización, seguimiento de usuario.
    * Muestra una tabla detallada con nombre, valor, dominio, ruta, expiración, tamaño y flags (HttpOnly, Secure, SameSite).
    * Puedes editar o eliminar cookies de forma similar a Local Storage.
    * Útil para depurar problemas de sesión, autenticación o comportamiento inesperado relacionado con cookies.
* **IndexedDB y Web SQL:**
    * Bases de datos del lado del cliente más potentes para almacenar grandes cantidades de datos estructurados.
    * Puedes explorar las bases de datos creadas por la página y ver los "object stores" (en IndexedDB) o tablas (en Web SQL) y sus datos.
    * Útil para depurar aplicaciones offline o que manejan grandes volúmenes de datos en el cliente.
* **Cache Storage:**
    * Almacena pares de solicitud/respuesta de red. Usado principalmente por **Service Workers** para hacer que los recursos estén disponibles sin conexión (offline first).
    * Muestra las "caches" nombradas creadas por Service Workers y los recursos almacenados en cada una.
    * Útil para depurar estrategias de caching offline.

### Sección Application: PWAs y Service Workers

* **Manifest:** Si la página web tiene un archivo `manifest.json` (para definir la PWA), esta sección mostrará sus detalles (nombre, íconos, URLs de inicio, orientación, etc.).

<div class="text--center">
  <img src="/img/inspector-aplicacion-manifest.png" alt="Visualizando el Manifiesto de la Aplicación" />
</div>

* **Service Workers:**
    * Los Service Workers son proxies programables entre el navegador y la red. Permiten intercepción de solicitudes, gestión de caché, notificaciones push, etc.
    * Esta sección te permite **registrar, anular el registro, actualizar o detener** el Service Worker actual.
    * Puedes simular eventos push o de sincronización en segundo plano.
    * Muestra el estado del Service Worker (instalado, activado, etc.) y cualquier error en su ciclo de vida.
    * Crucial para depurar funcionalidad offline y notificaciones push.

<div class="text--center">
  <img src="/img/inspector-aplicacion-service-workers.png" alt="Gestionando Service Workers" />
</div>

### Sección Background Services

Monitorea APIs que permiten actividades en segundo plano, como `Background Fetch` (descargar archivos grandes en segundo plano) o `Background Sync` (sincronizar datos cuando hay conectividad).

### Clearing Storage (Borrar Almacenamiento)

En la sección "Storage" del panel lateral izquierdo, hay una opción **"Clear site data"** (Borrar datos del sitio). Esto te permite limpiar varios tipos de almacenamiento y caché de la página para simular la primera visita de un usuario o para asegurarte de que no hay datos antiguos causando problemas. Puedes seleccionar qué tipos de datos quieres borrar.

El panel Aplicación es indispensable para desarrolladores que trabajan con PWAs, almacenamiento del lado del cliente y funcionalidades offline/en segundo plano, ofreciendo control y visibilidad sobre estos aspectos.