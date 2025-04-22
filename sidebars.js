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
      items: ['introduccion/introduccion'],
    },
    {
      type: 'category',
      label: 'Cómo acceder al Inspector',
      collapsible: true,
      collapsed: false,
      items: ['acceso/como-acceder-inspector'],
    },
    {
      type: 'category',
      label: 'Paneles del Inspector',
      collapsible: true,
      collapsed: false,
      items: [
        'paneles/panel-elementos',
        'paneles/panel-estilos',
        'paneles/panel-consola',
        'paneles/panel-fuentes',
        'paneles/panel-red',
        'paneles/panel-rendimiento',
        'paneles/panel-memoria',
        'paneles/panel-aplicacion',
        'paneles/panel-seguridad',
        'paneles/panel-lighthouse',
        'paneles/panel-recorder',
      ],
    },
    {
      type: 'category',
      label: 'Extras',
      collapsible: true,
      collapsed: false,
      items: [
        'extras/extensiones',
        'extras/atajos-utiles',
        'extras/conclusiones',
      ],
    },
  ],
};

export default sidebars;

