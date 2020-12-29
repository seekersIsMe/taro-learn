export default {
  pages: [
    'pages/index/index',
    'pages/test/index'
  ],
  tabBar: {
    list: [{
      pagePath: 'pages/index/index',
      text: '首页'
    },
    {
      pagePath: 'pages/test/index',
      text: '测试'
    }
    ],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
