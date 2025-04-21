// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introducción',
      collapsible: true,
      collapsed: false,
      items: ['introduccion/01-introduccion'],
    },
    {
      type: 'category',
      label: 'Cómo acceder al Inspector',
      collapsible: true,
      collapsed: false,
      items: ['acceso/02-como-acceder-inspector'],
    },
    {
      type: 'category',
      label: 'Paneles del Inspector',
      collapsible: true,
      collapsed: false,
      items: [
        'paneles/03-panel-elementos',
        'paneles/04-panel-estilos',
        'paneles/05-panel-consola',
        'paneles/06-panel-fuentes',
        'paneles/07-panel-red',
        'paneles/08-panel-rendimiento',
        'paneles/09-panel-memoria',
        'paneles/10-panel-aplicacion',
        'paneles/11-panel-seguridad',
        'paneles/12-panel-lighthouse',
        'paneles/13-panel-recorder',
      ],
    },
    {
      type: 'category',
      label: 'Extras',
      collapsible: true,
      collapsed: false,
      items: [
        'extras/14-extensiones',
        'extras/15-ejemplos-practicos',
        'extras/16-atajos-utiles',
        'extras/17-conclusiones',
      ],
    },
  ],
};

export default sidebars;
