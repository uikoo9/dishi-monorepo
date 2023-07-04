/**
 * dmg options
 */
module.exports = {
  // 定制窗口
  window: {
    size: {
      width: 500,
      height: 200,
    },
    position: {
      x: 500,
      y: 500,
    },
  },

  // 定制背景图
  background: 'pack/icon/bg.png',

  // 内容位置
  contents: [
    { x: 160, y: 90, type: 'file' },
    { x: 360, y: 90, type: 'link' },
  ],
};
