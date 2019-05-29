var data = [
  {
    title: '前端框架',
    icon: 'linecons-star',
    children: [
      {
        title: 'Vue',
        list: [
          {
            title: 'Vue',
            image: './assets/images/logo/vue.png',
            href: 'https://cn.vuejs.org/',
            desc: '渐进式 JavaScript 框架'
          },
          {
            title: 'Vue Loader',
            image: './assets/images/logo/vue.png',
            href: 'https://vue-loader.vuejs.org/',
            desc: 'Vue Loader 是一个 webpack 的 loader，它允许你以一种名为单文件组件 (SFCs)的格式撰写 Vue 组件'
          },
          {
            title: 'Vuex',
            image: './assets/images/logo/vue.png',
            href: 'https://vuex.vuejs.org/zh/',
            desc: '一个专为 Vue.js 应用程序开发的状态管理模式'
          },
          {
            title: 'Vue Router',
            image: './assets/images/logo/vue.png',
            href: 'https://router.vuejs.org/zh/',
            desc: 'Vue Router 是 Vue.js 官方的路由管理器'
          },
          {
            title: 'Vue SSR',
            image: './assets/images/logo/vue.png',
            href: 'https://ssr.vuejs.org/zh/',
            desc: 'Vue.js 服务器端渲染指南'
          },
          {
            title: 'Vue CLI',
            image: './assets/images/logo/vue.png',
            href: 'https://cli.vuejs.org/zh/',
            desc: 'Vue.js 开发的标准工具'
          },
          {
            title: 'Vue Packages',
            image: './assets/images/logo/vue.png',
            href: 'https://curated.vuejs.org/',
            desc: 'Find the best packages for your Vue app!'
          },
          {
            title: 'Nuxt',
            image: './assets/images/logo/nuxtjs.png',
            href: 'https://curated.vuejs.org/',
            desc: 'Vue.js Meta Framework to create complex, fast & universal web applications quickly.'
          },
          {
            title: 'Ant Design Vue',
            image: './assets/images/logo/Ant Design Vue.png',
            href: 'https://vue.ant.design/docs/vue/introduce-cn/',
            desc: '这里是 Ant Design 的 Vue 实现，开发和服务于企业级后台产品。'
          },
          {
            title: 'awesome-vue',
            image: './assets/images/logo/awesome-vue.svg',
            href: 'https://github.com/vuejs/awesome-vue',
            desc: 'A curated list of awesome things related to Vue.js'
          },
          {
            title: 'Vue技术内幕',
            image: './assets/images/logo/hcysun.png',
            href: 'http://hcysun.me/vue-design/',
            desc: '逐行级别的 Vue 源码分析'
          },
          {
            title: 'Vue 论坛',
            image: './assets/images/logo/vue.png',
            href: 'https://forum.vuejs.org/',
            desc: 'Vue 论坛'
          },
          {
            title: 'Element',
            image: './assets/images/logo/element.png',
            href: 'https://element.eleme.cn/',
            desc: 'Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库'
          },
          {
            title: 'Vuetify',
            image: './assets/images/logo/vuetify.svg',
            href: 'https://vuetifyjs.com/zh-Hans/',
            desc: '让Vue和Material Design的强大力量在开发上助您一臂之力'
          },
        ]
      },
      {
        title: 'React',
        list: [
          {
            title: 'React 文档',
            image: './assets/images/logo/react.svg',
            href: 'https://zh-hans.reactjs.org/',
            desc: '用于构建用户界面的 JavaScript 库'
          },
          {
            title: 'Ant Design React',
            image: './assets/images/logo/Ant Design React.svg',
            href: 'https://ant.design/',
            desc: '服务于企业级产品的设计体系，基于确定和自然的设计价值观上的模块化解决方案，让设计者和开发者专注于更好的用户体验。'
          },
          {
            title: 'Nerv',
            image: './assets/images/logo/nerv.png',
            href: 'https://nerv.aotu.io/',
            desc: '一个基于 Virtual DOM 的类 React 组件框架'
          },
          {
            title: 'React Router',
            image: './assets/images/logo/react_router.png',
            href: 'https://reacttraining.com/react-router/',
            desc: 'React Router is a collection of navigational components that compose declaratively with your application.'
          },
          {
            title: 'Next.js',
            image: './assets/images/logo/nextjs.png',
            href: 'https://nextjs.org/',
            desc: 'The React Framework'
          },
          {
            title: 'DvaJS',
            image: './assets/images/logo/react.svg',
            href: 'https://dvajs.com/',
            desc: 'React and redux based, lightweight and elm-style framework.'
          },
          {
            title: 'UmiJS',
            image: './assets/images/logo/react.svg',
            href: 'https://umijs.org/',
            desc: '可插拔的企业级 react 应用框架。'
          }
        ]
      },
      {
        title: 'Angular',
        list: [
          {
            title: 'Angular 文档',
            image: './assets/images/logo/angular.svg',
            href: 'https://angular.cn/',
            desc: '一套框架，多种平台；移动端 & 桌面端'
          },
          {
            title: 'Ionic',
            image: './assets/images/logo/ionic.png',
            href: 'https://ionicframework.com/',
            desc: 'One codebase. Any platform.'
          },
          {
            title: 'Angular Material',
            image: './assets/images/logo/angular.svg',
            href: 'https://material.angular.cn/',
            desc: 'Material Design 组件库 for Angular'
          }
        ]
      }
    ]
  },
  {
    title: '前端类库',
    icon: 'linecons-star',
    list: [
      {
        title: 'Redux',
        image: './assets/images/logo/redux.svg',
        href: 'https://redux.js.org/',
        desc: 'A predictable state container for JavaScript apps.'
      },
      {
        title: 'Redux 中文文档',
        image: './assets/images/logo/redux.svg',
        href: 'https://www.redux.org.cn/',
        desc: 'A predictable state container for JavaScript apps.'
      }
    ]
  },
  {
    title: '社区资讯',
    icon: 'linecons-doc',
    list: []
  },
  {
    title: '网上课堂',
    icon: 'linecons-lightbulb',
    list: [
      
    ]
  },
  {
    title: '素材资源',
    icon: 'linecons-thumbs-up',
    children: [
      {
        title: '图表素材'
      },
      {
        title: 'LOGO设计'
      },
      {
        title: '平面素材'
      }
    ]
  },
  {
    title: '常用工具',
    icon: 'linecons-diamond',
    children: [
      {
        title: '图形创意'
      },
      {
        title: '界面灵感'
      },
      {
        title: '网页灵感'
      }
    ]
  },
  {
    title: '学习教程',
    icon: 'linecons-pencil',
    children: [
      {
        title: '发现产品'
      },
      {
        title: '界面灵感'
      },
      {
        title: '网页灵感'
      }
    ]
  },
  {
    title: 'FED团队',
    icon: 'linecons-user',
    list: [
      {
        title: 'AlloyTeam',
        image: './assets/images/logo/alloyteam.png',
        href: 'http://www.alloyteam.com/',
        desc: '腾讯Web前端团队'
      },
    ]
  }
];
