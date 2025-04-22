# Panel Seguridad: Evaluando la Conexión Segura

El panel **Seguridad** (Security) proporciona información sobre la **seguridad de la conexión** de la página que estás visitando. Su enfoque principal es la seguridad de las conexiones **HTTPS**.

### Visión General de Seguridad

Al abrir el panel, la sección "Overview" (Visión General) te dará una evaluación inmediata del estado de seguridad:

* **Secure origin (Origen seguro):** Indica que la página se sirve a través de HTTPS con un certificado válido. A menudo mostrado con un candado verde o gris.
    ![Página segura en el panel Seguridad](/img/inspector-seguridad-secure.png)
* **Non-secure origin (Origen no seguro):** Indica que la página se sirve a través de HTTP.
* **Mixed content (Contenido mixto):** Indica que la página principal se sirve a través de HTTPS, pero carga recursos (imágenes, scripts, estilos, iframes) a través de HTTP inseguro. Esto debilita la seguridad de la página, ya que los recursos inseguros pueden ser interceptados o manipulados.
* **Certificate errors (Errores de certificado):** Indica problemas con el certificado HTTPS (ej. expirado, emitido para otro dominio, autofirmado no confiable).

### Inspeccionando el Certificado HTTPS

Si la página se sirve a través de HTTPS, puedes hacer clic en "View certificate" (Ver certificado) en la sección Overview para ver los detalles del certificado SSL/TLS:

* **Issued to:** El dominio para el que se emitió el certificado.
* **Issued by:** La Autoridad Certificadora (CA) que emitió el certificado.
* **Valid from/to:** Las fechas de inicio y fin de validez del certificado.
* Otros detalles técnicos como la clave pública, algoritmos de firma, etc.

Verificar estos detalles es importante para confirmar que te estás conectando al sitio legítimo y que la conexión está cifrada correctamente.

### Identificando Contenido Mixto

El contenido mixto es un problema de seguridad común en sitios HTTPS. Hay dos tipos principales:

* **Contenido Mixto Pasivo:** Recursos (imágenes, audio, video) cargados sobre HTTP en una página HTTPS. El riesgo es menor (principalmente espionaje del contenido), pero el navegador a menudo muestra una advertencia en la barra de direcciones.
* **Contenido Mixto Activo:** Recursos (scripts, hojas de estilo, iframes) cargados sobre HTTP en una página HTTPS. Esto es mucho más peligroso, ya que un atacante podría interceptar y modificar el código inseguro para controlar la página HTTPS. Los navegadores a menudo bloquean la carga de contenido mixto activo por defecto.

Si el panel Seguridad reporta contenido mixto, la sección **"Origins"** (Orígenes) mostrará los detalles, listando los orígenes inseguros y los recursos que se cargaron desde ellos. Haz clic en un origen para ver la lista de recursos inseguros.

Corregir el contenido mixto implica asegurarse de que *todos* los recursos cargados en una página HTTPS también se carguen a través de HTTPS.

### Otros Problemas de Seguridad

El panel Seguridad también puede reportar otros problemas, como:

* Uso de APIs web con características inseguras o obsoletas en contextos seguros.
* Errores relacionados con políticas de seguridad (ej. Content Security Policy - CSP).

El panel Seguridad es tu primera línea de defensa para verificar la integridad y el cifrado de la conexión de tu sitio web, y para diagnosticar problemas comunes como certificados inválidos o contenido mixto que pueden minar la confianza del usuario y la funcionalidad.

