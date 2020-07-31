export default {
  "title": "iClubs IO Docs",
  "tagline": "",
  "url": "https://your-docusaurus-test-site.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "favicon": "img/just-logo.svg",
  "organizationName": "Zappts",
  "projectName": "Zappts Front End Docs",
  "themeConfig": {
    "navbar": {
      "title": "iClubs IO Docs",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/logo-red.svg"
      },
      "items": [
        {
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "right"
        },
        {
          "to": "http://docs.iclubs.io/",
          "activeBasePath": "docs",
          "label": "APIs",
          "position": "right"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "right"
        },
        {
          "href": "https://github.com/facebook/docusaurus",
          "label": "Ajuda",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "APIs",
              "to": "http://docs.iclubs.io/"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Linkedin",
              "href": "https://www.linkedin.com/company/zappts/"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "iClubs IO",
              "to": "https://iclubs.io/"
            },
            {
              "label": "Zappts",
              "href": "https://zappts.com.br"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 Powered by Zappts."
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "homePageId": "intro",
          "sidebarPath": "/home/jvmedeiros/Documentos/Trabalho/Zappts/jvcarol.github.io/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/home/jvmedeiros/Documentos/Trabalho/Zappts/jvcarol.github.io/src/css/custom.css"
        }
      }
    ]
  ],
  "customFields": {},
  "plugins": [],
  "themes": []
};