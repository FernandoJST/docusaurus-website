// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manual del Inspector de Elementos', // Título personalizado
  tagline: 'Aprende a usar el inspector de elementos del navegador',
  favicon: 'img/favicon.ico', // Cambia el favicon aquí

  url: 'https://tu-sitio-manual.com', // Cambia la URL de tu sitio
  baseUrl: '/',

  organizationName: 'tu-usuario', // Tu nombre de usuario o el de tu organización
  projectName: 'manual-inspector', // Nombre de tu proyecto

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/tu-usuario/tu-repositorio', // Enlace a tu repositorio
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/tu-usuario/tu-repositorio',
        },
        theme: {
          customCss: './src/css/custom.css', // Referencia a tu archivo CSS personalizado
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Manual Inspector',
      logo: {
        alt: 'Logo del Manual',
        src: 'img/logo.svg', // Cambia la ruta de tu logo
      },
      items: [
        // El logo y el título quedan automáticamente a la izquierda si no hay items con position: 'left'
        // Puedes añadir enlaces a secciones específicas de tu sidebar aquí
        {
          label: 'Introducción', // Texto que se muestra en la navbar
          to: '/docs/introduccion/introduccion', // Ruta a la página de introducción
          position: 'right', // Posicionado a la derecha
        },
        {
          label: 'Acceso', // Texto que se muestra en la navbar
          to: '/docs/acceso/como-acceder-inspector', // Ruta a la página de acceso
          position: 'right', // Posicionado a la derecha
        },
        {
           label: 'Paneles', // Texto que se muestra en la navbar
           to: '/docs/paneles/panel-elementos', // Ruta a la primera página de paneles
           position: 'right', // Posicionado a la derecha
        },
         {
            label: 'Extras', // Texto que se muestra en la navbar
            to: '/docs/extras/extensiones', // Ruta a la primera página de extras
            position: 'right', // Posicionado a la derecha
         },
        {
          // Este es el enlace que abre la barra lateral completa
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right', // Sigue a la derecha
          label: 'Guía Completa', // Puedes cambiar el label si quieres
        },
        {to: '/blog', label: 'Blog', position: 'right'}, // Blog sigue a la derecha
        {
          href: 'https://github.com/tu-usuario/tu-repositorio', // Enlace a tu GitHub
          label: 'GitHub',
          position: 'right',
        },
        // Si habilitas el buscador, a menudo se añade aquí:
        // { type: 'search', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guía',
          items: [
            {
              label: 'Introducción',
              to: '/docs/intro', // Enlace a tu documentación
            },
          ],
        },
        {
          title: 'Comunidad',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/inspector-element',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/inspector-element',
            },
          ],
        },
        {
          title: 'Más',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/tu-usuario',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Manual Inspector, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    // Configuración del buscador (EJEMPLO - ASEGÚRATE DE USAR LA DE TU PLUGIN)
    /*
    algolia: {
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_SEARCH_API_KEY',
      indexName: 'YOUR_INDEX_NAME',
      contextualSearch: true,
    },
    */
  },
};

export default config;