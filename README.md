
模板使用:

# Antd Admin

当前主分支3.0，演示地址 http://zuiidea.github.io/antd-admin/

- 接下来将会做一些功能完善和文档完善。:sweat_smile:

## 特性

- 基于[React](https://github.com/facebook/react)，[Antd Design](https://github.com/ant-design/ant-design)，[dva](https://github.com/dvajs/dva)，[Mock](https://github.com/nuysoft/Mock) 企业级后台管理系统最佳实践
- 基于[Mock](https://github.com/nuysoft/Mock)实现脱离后端独立开发
- 基于Antd UI 设计语言，提供后台管理系统常见使用场景

## To do list
- [x] 登录页面
- [x] dashbord页面
  - [x] 数字卡片
  - [x] 实时天气卡片
  - [x] 图表
- [x] 用户列表页面
  - [x] 增删改查
  - [ ] 交互动效
- [x] 扩展UI组件
 - [x] Ico
- [ ] 可视化图表

## 开发及构建

### 目录结构

```bash
├── /mock/           # 数据mock的接口文件
├── /dist/           # 项目输出目录
├── /src/            # 项目源码目录
│ ├── /components/   # 项目组件
│ ├── /routes/       # 路由组件
│ ├── /models/       # 数据模型
│ ├── /services/     # 数据接口
│ ├── /utils/        # 工具函数
│ ├── route.js       # 路由配置
│ ├── index.js       # 入口文件
│ └── index.html     
├── package.json     # 项目信息
└── proxy.config.js  # 数据mock配置

```

### 快速开始

克隆项目文件:

```
git clone git@github.com:zuiidea/antd-admin.git
```

进入目录安装依赖:

```
npm i 或者 yarn install
```

开发：

```bash
npm run dev    # 使用mock拦截请求，数据存储在localStroge里

打开 http://localhost:8000
```


构建：

```bash
npm run build

将会生成dist目录
```

### 注意事项

- 生产环境中，已有数据接口，请将`src/utils/index.js`第四行 `require('./mock.js')`注释
- 开发环境中，如再mock目录新增文件，请在`src/utils/mock.js`第二行的`mockData`数组中添加
- 如需重写异步请求函数，请修改`src/utils/request.js`
- 如需重写antd样式配置，请修改`src/theme.js`
- 项目配置文件在`src/utils/config.js`


## 参考

用户列表：https://github.com/dvajs/dva/tree/master/examples/user-dashboard

dashboard设计稿：https://dribbble.com/shots/3108122-Dashboard-Admin （已征得作者同意）

## 截屏

![](assets/demo2.gif)
