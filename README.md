# JOY && TOY

# Gun
[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)


基于lerna的monorepo项目，包含开发常见库（例如：工具函数库，Vue相关库，其它工具相关），为开发提供便利。


## 炮火详情单

滚动效果组件 vue-seamless-scroll-new

懒加载图片效果 vue-lazy-image-box-loading

回到顶部  vue-back-to-top


## reffer

[参考](https://jishuin.proginn.com/p/763bfbd5505d)


## lerna命令
* lerna init -- 初始化lerna项目,初始化的时候带上参数可以使用不同模式(各个子包版本统一与否)
* lerna create XXX -- 生成一个子包
* lerna bootstrap -- 一键安装所有module 的依赖,重要的是，bootstrap命令会默认自动执行npm link，把相互依赖的包，相当于是直接使用的的package 里的包，调试和开发十分方便。
* lerna add eslint --scope=package1 --指定作用域装包
* lerna bootstrap --hoist -- 使用–hoist 参数，将重复的node_modules提升到根目录的node_modules里
* lerna create XXX -- 生成一个子包
* lerna publish --发布
* lerna run [script] --运行命令


