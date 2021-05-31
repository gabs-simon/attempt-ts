/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Attempt-TS',
  tagline: 'Beautify your throw types',
  url: 'https://gabs-simon.github.io/',
  baseUrl: '/attempt-ts/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Attempt-TS',
      logo: {
        alt: 'Attempt-TS',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'index',
          position: 'left',
          label: 'Overview',
        },
        {
          type: 'doc',
          docId: 'api/attempt',
          position: 'left',
          label: 'API',
        },
        {
          href: 'https://github.com/gabs-simon/attempt-ts',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/gabs-simon/attempt-ts',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Gabs Simon. Licensed under the MIT License. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/gabs-simon/attempt-ts/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
