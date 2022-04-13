### Koa

> 下一代web框架

- 利用 async，丢弃回调函数，增强错误处理
- 没有捆绑任何中间件

### 核心概念

- Koa application（应用程序）
- Context（上下文）
    - 执行顺序
    - 回调倒序（`next()`之后，洋葱模型）
    - 先进后出
- Request（请求），Response（相应）

### 中间件

- `@koa/router`：路由
- `koa-body`：处理传入的数据
- `@koa/cors`：处理跨域
- `koa-json`：json格式化
- `koa-combine-routers`:router压缩
- `koa-helmet`:加入一些安全相关的请求头
- `koa-static`:设置静态资源目录
- `koa-compose`整合koa中间件
- `koa-compress`:压缩koa中间件

### webpack插件

- `clean-webpack-plugin`:清理构建后目录
- `webpack-node-external`:排除node_modules不相关包
- `@babel/core`: `babel`核心
- `@babel/node`: 编译
- `@babel/preset-env`: 可以使用最新的`JavaScript`特性
- `babel-loader`: 允许使用`babel`转义`JavaScript`文件
- `cross-env`: 可以跨端设置环境变量
- `nodemon`:koa热加载
- `npm-check-updates`: 检查包更新
- `webpack-merge`:合并多个webpack配置
- **其他见webpack相关文档**
