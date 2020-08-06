module.exports = {
  plugins: [{
    resolve: '@antv/gatsby-theme-antv',
    options: {}
  }],
  pathPrefix: '',
  siteMetadata: {
    title: 'CTAccel',
    description: 'The developer zone of ctaccel products',
    siteUrl: 'https://developer.ct-accel.com',
    githubUrl: 'https://github.com/ctaccel/ctaccel.github.io.git',
    // logoUrl: 'https://antv.vision/zh',
    navs: [{
        slug: 'docs/intro/brief',
        title: {
          zh: '产品简介',
          en: 'Introduction'
        }
      },
      {
        slug: 'docs/manual/getting-started',
        title: {
          zh: '使用文档',
          en: 'Manual'
        }
      },
      {
        slug: 'docs/api',
        title: {
          zh: 'API 文档',
          en: 'API'
        }
      },
      {
        slug: 'docs/faq',
        title: {
          zh: '常见问题',
          en: 'FAQ'
        }
      },
      {
        slug: 'https://console.ct-accel.com',
        title: {
          zh: '控制台',
          en: 'Console'
        }
        // target: '_blank',
      }
    ],
    docs: [{
        slug: 'specification/category',
        title: {
          zh: '分类一',
          en: 'category1'
        },
        order: 4
      },
      {
        slug: 'specification/category/three',
        title: {
          zh: '第三层',
          en: 'three level'
        },
        order: 2
      }
    ],
    examples: [{
      slug: 'category',
      icon: 'pie',
      title: {
        zh: '饼图分类',
        en: 'Category'
      }
    }],
    showSearch: false, // 是否展示搜索框
    showChinaMirror: false, // 是否展示国内镜像链接
    showAntVProductsCard: false, // 是否展示 AntV 系列产品的卡片链接
    showLanguageSwitcher: true, // 用于定义是否展示语言切换
    showGithubCorner: true, // 是否展示角落的 GitHub 图标
    playground: {
      container: '<div id="container" />',
      playgroundDidMount: 'console.log("playgroundDidMount");',
      playgroundWillUnmount: 'console.log("playgroundWillUnmount");'
    },
    redirects: []
  }
};