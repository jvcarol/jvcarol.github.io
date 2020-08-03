module.exports = {
  title: 'iClubs IO Docs',
  tagline: 'Documentação dos portais front.',
  url: 'https://jvcarol.github.io', // Usually your GitHub Pages url.
  baseUrl: '/',
  organizationName: 'jvcarol', // Usually your GitHub org/user name.
  projectName: 'jvcarol.github.io', // Usually your repo name.
  onBrokenLinks: 'throw',
  favicon: 'img/just-logo.svg',
  themeConfig: {
    colorMode:{
      defaultMode: 'dark',
      disableSwitch: true,
    },
    navbar: {
      title: 'iClubs IO Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo-red.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          to: 'http://docs.iclubs.io/',
          activeBasePath: 'docs',
          label: 'APIs',
          position: 'right',
        },
        {
          to: 'blog',
          label: 'Blog', 
          position: 'right'
        },
        {
          href: 'https://github.com/orgs/jvcarol/people/JVMedeiros',
          label: 'Ajuda',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Zappts Logo',
        src: 'img/zappts-logo.svg',
        href: 'https://zappts.com/',
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'APIs',
              to: 'http://docs.iclubs.io/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/company/zappts/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'iClubs IO',
              to: 'https://iclubs.io/',
            },
            {
              label: 'Zappts',
              href: 'https://zappts.com.br',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Powered by Zappts.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'intro',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
