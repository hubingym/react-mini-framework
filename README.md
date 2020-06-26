# react-mini-framework
小巧玲珑的react代码结构，没有redux样板代码，只有你该写的代码

最近学习scratch-gui的源码，想把一些关键代码自己抄写一遍，但我不想写redux那些样板代码，我只想写我该写的代码(初始状态数据、render、业务逻辑)，自己想了一个最简单的react项目结构，至于性能能否满足需求，以后不断检验

移动端单页面应用页面dom元素一般较少，ReactDOM.render整个虚拟dom树，代价很小



## 主要思想

1、按service、view、state来划分代码结构，只要状态变化，就更新整个视图

2、states目录下面是状态数据，可以直接获取和更改，当更新状态后，需要调用eventBus.forceUpdate()通知视图更新

2、sevices目录下面是处理逻辑的代码

3、views目录下面是视图组件，尽量是函数组件



## 主要api

1、eventBus.onUpdate

2、eventBus.forceUpdate
