(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{66:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return l}));var r=a(2),n=(a(0),a(86));const o={id:"sess2",title:"Hierarquia de pastas"},s={unversionedId:"sess2",id:"sess2",isDocsHomePage:!1,title:"Hierarquia de pastas",description:"Organiza\xe7\xe3o do Projeto:",source:"@site/docs/sess2.md",permalink:"/docs/sess2",editUrl:"https://github.com/jvcarol/jvcarol.github.io/edit/source/docs/sess2.md",sidebar:"someSidebar",previous:{title:"Ambienta\xe7\xe3o com o projeto",permalink:"/docs/sess1"},next:{title:"Bibliotecas Utilizadas",permalink:"/docs/sess3"}},i=[{value:"<strong>Organiza\xe7\xe3o do Projeto:</strong>",id:"organiza\xe7\xe3o-do-projeto",children:[]}],c={rightToc:i};function l({components:e,...t}){return Object(n.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"organiza\xe7\xe3o-do-projeto"},Object(n.b)("strong",{parentName:"h2"},"Organiza\xe7\xe3o do Projeto:")),Object(n.b)("p",null,"O projeto segue a organiza\xe7\xe3o da hierarquia de pastas padr\xe3o de um projeto web, ou seja, os arquivos edit\xe1veis est\xe3o na pasta ",Object(n.b)("strong",{parentName:"p"},"src"),", na raiz do projeto, e a partir dela a orienta\xe7\xe3o para o c\xf3digo:"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"portal-iclubs.io # root directory\n\u251c\u2500\u2500 docs\n\u251c\u2500\u2500 public\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 assets\n\u2502       \u2514\u2500\u2500 css\n\u2502       \u2514\u2500\u2500 demo\n\u2502       \u2514\u2500\u2500 fonts\n\u2502       \u2514\u2500\u2500 github\n\u2502       \u2514\u2500\u2500 img\n\u2502       \u2514\u2500\u2500 scss\n\u2502   \u2514\u2500\u2500 components\n\u2502   \u2514\u2500\u2500 layouts\n\u2502   \u2514\u2500\u2500 redux\n\u2502       \u2514\u2500\u2500 actions\n\u2502       \u2514\u2500\u2500 reducers\n\u2502       \u2514\u2500\u2500 store.js\n\u2502       \u2514\u2500\u2500 types.js\n\u2502   \u2514\u2500\u2500 services\n\u2502   \u2514\u2500\u2500 util\n\u2502   \u2514\u2500\u2500 variables\n\u2502   \u2514\u2500\u2500 views\n\u2502   \u2514\u2500\u2500 routes.js\n\u2502   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 ...\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Assets"),": Cont\xe9m os arquivos de estiliza\xe7\xe3o, imagens e fontes."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Components"),": Cont\xe9m todos os componentes que podem ser reutilizados na aplica\xe7\xe3o, como por exemplo a NavBar que \xe9 importada em todas as telas."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Layouts:")," Nesta pasta s\xe3o listados os perfis de acesso e organiza\xe7\xe3o de rotas para cada perfil."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Redux:")," Nesta pasta ficam todos os arquivos relacionados ao redux, como os ",Object(n.b)("inlineCode",{parentName:"li"},"reducers")," e os ",Object(n.b)("inlineCode",{parentName:"li"},"actions"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Services"),": Nesta pasta ficam as configura\xe7\xf5es do servi\xe7o de API."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Util"),": Nesta pasta ficam alguns arquivos auxiliares, que podem ou n\xe3o ser utilizados em v\xe1rios locais no c\xf3digo."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Variables"),": Nesta pasta temos alguns arquivos com vari\xe1veis fixas e globais."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Views"),": Nesta pasta ficam todas as telas, sendo elas separadas em subpastas, onde cada subpasta se refere a um perfil de usu\xe1rio como ",Object(n.b)("inlineCode",{parentName:"li"},"Admin")," ou ",Object(n.b)("inlineCode",{parentName:"li"},"Customers")," e as telas de autentica\xe7\xe3o.")))}l.isMDXComponent=!0},86:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,m=u["".concat(s,".").concat(d)]||u[d]||b[d]||o;return a?n.a.createElement(m,i(i({ref:t},l),{},{components:a})):n.a.createElement(m,i({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);