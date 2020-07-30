
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','fdd'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','728'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','798'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','08d'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','3a8'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','917'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','c2b'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','c12'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','084'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','cb0'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','581'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','8fd'),
  exact: true,
},
{
  path: '/docs/mdx',
  component: ComponentCreator('/docs/mdx','955'),
  exact: true,
},
{
  path: '/docs/sess1',
  component: ComponentCreator('/docs/sess1','8aa'),
  exact: true,
},
{
  path: '/docs/sess2',
  component: ComponentCreator('/docs/sess2','834'),
  exact: true,
},
{
  path: '/docs/sess3',
  component: ComponentCreator('/docs/sess3','79c'),
  exact: true,
},
{
  path: '/docs/sess4',
  component: ComponentCreator('/docs/sess4','22e'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
