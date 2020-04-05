import greet from './greet';
export * from './core/core';

const state = {
  greet,
};

export default state;

/**
 * 用于外界获取数据,对调试有帮助
 */
function getState() {
  return state;
}
export { getState }
