export default {
  title: '前端资源',
  icon: 'linecons-diamond',
  children: [
    {
      title: '前端文档',
      icon: '',
      list: [
        {
          title: '现代 JavaScript 教程',
          image: './images/logo/javascript.info.png',
          href: 'https://zh.javascript.info/',
          desc: '从基础知识到高阶主题，只需既简单又详细的解释。'
        },
        {
          title: 'Web 开发技术 | MDN',
          image: './images/logo/mdn.png',
          href: 'https://developer.mozilla.org/zh-CN/docs/Web',
          desc: 'MDN Web 文档'
        },
        {
          title: 'ECMAScript 6 入门',
          image: './images/logo/ecmascript.ico',
          href: 'http://es6.ruanyifeng.com/',
          desc: '《ECMAScript 6 入门》是一本开源的 JavaScript 语言教程，全面介绍 ECMAScript 6 新引入的语法特性。'
        },
      ]
    },
    {
      title: '前端工具',
      icon: '',
      list: [
        {
          title: 'Can I use',
          image: './images/logo/caniuse.png',
          href: 'https://caniuse.com/',
          desc: '浏览器兼容性检查工具'
        },
        {
          title: 'Regexper',
          image: './images/logo/regexper.ico',
          href: 'https://regexper.com/',
          desc: 'Regular expression visualizer using railroad diagrams. 正则表达式可视化'
        },
        {
          title: 'Travis CI',
          image: './images/logo/travis-ci.png',
          href: 'https://travis-ci.org/',
          desc: 'Test and Deploy Your Code with Confidence. 持续集成'
        }
      ]
    }
  ]
};