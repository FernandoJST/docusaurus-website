# Atajos de Teclado Esenciales

Los atajos de teclado son tus mejores amigos para navegar y usar el Inspector de Elementos con rapidez y eficiencia. Memorizar estos atajos comunes puede ahorrarte mucho tiempo al evitar tener que mover el ratón constantemente. Aquí están los más útiles, principalmente para navegadores basados en Chromium.

| Atajo (Windows/Linux)     | Atajo (macOS)             | Acción Principal                                                                 | Notas                                                                 |
| :------------------------ | :------------------------ | :------------------------------------------------------------------------------- | :-------------------------------------------------------------------- |
| `F12`                     | `Cmd + Option + I`        | **Abrir/Cerrar** Herramientas para Desarrolladores.                              | El atajo más común.                                                   |
| `Ctrl + Shift + C`        | `Cmd + Shift + C`         | **Seleccionar Elemento** en la página para inspeccionar (activa el selector).    | Abre el Inspector en el panel Elementos y activa el selector.           |
| `Esc`                     | `Esc`                     | **Alternar** la visibilidad del panel Consola (o Drawer).                      | Muy útil para ver logs o ejecutar comandos mientras estás en otro panel. |
| `Ctrl + L`                | `Cmd + K`                 | **Limpiar la Consola**.                                                          | Rápido para empezar con una Consola limpia.                           |
| `Ctrl + Shift + J`        | `Cmd + Option + J`        | Ir directamente al panel **Consola**.                                            | Acceso rápido si la Consola no está abierta o visible.                 |
| `Ctrl + Shift + C`        | `Cmd + Option + C`        | Ir directamente al panel **Elementos** y activar el selector.                     | Alternativa a F12 si sabes que irás a Elementos/selector.             |
| `Ctrl + [` y `Ctrl + ]`   | `Cmd + [` y `Cmd + ]`     | **Cambiar de panel** (izquierda/derecha) en la barra principal.                 | Navegación rápida entre paneles (Elementos, Consola, Fuentes, etc.). |
| `Ctrl + P`                | `Cmd + P`                 | En el panel Fuentes: **Buscar un archivo** por nombre.                         | Utiliza el "Go to File" en Fuentes.                                  |
| `Ctrl + O`                | `Cmd + O`                 | En el panel Fuentes: Buscar un archivo por nombre (igual que Ctrl+P).          |                                                                       |
| `Ctrl + Shift + P`        | `Cmd + Shift + P`         | Abrir el **Command Menu**.                                                       | Acceso rápido a la mayoría de las funciones del Inspector por nombre. |
| `Ctrl + F`                | `Cmd + F`                 | **Buscar** en el panel actual (Elementos, Fuentes, Red, etc.).                   | Busca texto dentro del contenido visible del panel.                   |
| `F8`                      | `F8` / `Cmd + \`          | En el panel Fuentes: **Pausar/Reanudar** ejecución de script.                    | Pausa en la siguiente sentencia, o continúa desde una pausa.          |
| `F10`                     | `F10` / `Cmd + '`         | En el panel Fuentes: **Step Over** la siguiente llamada a función.               | Ejecuta la línea actual y la siguiente sin entrar en funciones.       |
| `F11`                     | `F11` / `Cmd + ;`         | En el panel Fuentes: **Step Into** la siguiente llamada a función.               | Entra en la función llamada si hay una.                               |
| `Shift + F11`             | `Shift + F11` / `Cmd + Shift + ;` | En el panel Fuentes: **Step Out** de la función actual.                          | Continúa la ejecución hasta salir de la función actual.                |
| `F5`                      | `Cmd + R`                 | **Recargar** la página.                                                          | Recarga normal, puede usar caché.                                     |
| `Ctrl + F5`               | `Cmd + Shift + R`         | **Recargar ignorando caché** (Hard Reload).                                     | Fuerza al navegador a descargar todos los recursos nuevamente.        |
| `Alt + Clic`              | `Option + Clic`           | En el panel Elementos: **Expandir/Colapsar** recursivamente un nodo del DOM.    | Muy útil para ver rápidamente el contenido completo de un subárbol.    |
| `Shift + Clic en el icono de red` | `Shift + Clic en el icono de red` | En el panel Red: **Guardar todo como HAR**.                              | Exporta la actividad de red para compartir o analizar después.        |

### El Poder del Command Menu (`Ctrl+Shift+P` / `Cmd+Shift+P`)

Si olvidas un atajo o la ubicación de una opción, el Command Menu es tu salvador. Ábrelo y simplemente empieza a escribir lo que quieres hacer (ej. "screenshot" para tomar una captura de pantalla de un nodo específico, "dock" para cambiar la posición del Inspector, "show render" para abrir el panel de Renderizado). Es una forma muy eficiente de acceder a casi cualquier funcionalidad del Inspector.

![El Command Menu del Inspector](/img/inspector-command-menu.png)

Integrar estos atajos en tu flujo de trabajo diario te hará sentir mucho más cómodo y ágil al usar el Inspector, permitiéndote concentrarte más en la depuración y menos en buscar botones y menús. Empieza con los más comunes (abrir/cerrar, seleccionar elemento, consola, depuración) y añade más gradualmente.
