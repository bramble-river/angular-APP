##angular框架实现拉勾网的部分功能`_**_````_**_`
###准备
#### 调试插件
anglur在浏览器中调试不够方便，可以使用调试插件--batarang
下载地址： https://pan.baidu.com/s/1jGILtzg bower
#### 前端工具
##### bower
第三方包管理工具 通过npm bower 安装，使用 npm -b测试是否安装成功
常用命令：init/install/uninstall
配置文件: .bowerrc(修改安装目录)，bower.json
利用bower初始化和安装1.5.8版本的angular bower init bower install - -save angular#1.5.8
创建.bowerrc文件 null<.bowerrc
##### gulp
安装gulp以及相关插件 npm install gulp gulp-clean gulp-concat gulp-cssmin gulp-imagemin gulp-less gulp-load-plugins gulp-uglify --save--dev
### 使用angular开发
####angular语法
1. 数据绑定：页面数据和js中$scope数据模型。
    ng-model(值) ng-bind(文本) {{ }} $scope
2. 指令：html属性、标签、样式、注释。包括内置指令和自定义指令。
    内置指令：ng-click ng-hide ng-show ng-if ng-repeat ng-app ng-class
    自定义指令(directive)属性：
    * restrict（调用方式）:常用的是A（属性），EA（标签）
    * scope true/false 对象 是否继承父级作用域属性 
        对象：@(常量) =(变量) &(函数)
    * template html模板字符串
    + templateurl html模板路径
    + link 为指令定义内在逻辑
    + transclude true/false 是否内嵌html
