# douban

> vue-cli  router  sass 

## Build Setup



``` bash

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report


```



For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



<!-- 安装less -->


npm install less less-loader --save-dev


<!-- webpack中修改配置 -->
在webpack.dev.conf.js中，我们可以看到下面的代码：

 module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },

<!-- 修改那style状态 -->

<style scoped lang="less">

	

</style>









