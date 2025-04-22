// @ts-check
// @type JSDoc annotations allow editor autocompletion and type checking
// (when paired with @ts-check).
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manual de Inspector',
  tagline: 'Guía completa para usar el inspector de elementos del navegador',
  favicon: 'img/logo.ico',
  url: 'https://tu-sitio-manual.com',
  baseUrl: '/',
  organizationName: 'FernandoJST',
  projectName: 'docusaurus-website',
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
          editUrl: 'https://github.com/FernandoJST/docusaurus-website/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
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
        src: 'img/logo.svg',
      },
      items: [
        {
          label: 'Introducción',
          to: '/docs/introduccion/introduccion',
          position: 'right',
        },
        {
          label: 'Acceso',
          to: '/docs/acceso/como-acceder-inspector',
          position: 'right',
        },
        {
          label: 'Paneles',
          to: '/docs/paneles/panel-elementos',
          position: 'right',
        },
        {
          label: 'Extras',
          to: '/docs/extras/extensiones',
          position: 'right',
        },
        {
          href: 'https://github.com/FernandoJST/docusaurus-website',
          label: 'GitHub',
          position: 'right',
        },
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
              to: '/docs/introduccion/introduccion',
            },
            {
              label: 'Paneles',
              to: '/docs/paneles/panel-elementos',
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
          ],
        },
        {
          title: 'Más',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/FernandoJST',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} {siteConfig.title}, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;