//载入gulp核心包
const gulp = require("gulp");

//gulp是用来帮助我们执行一些重复操作的
//一般我们将这些重复的操作划分为不同的任务

//如何定义一个任务?
//两个参数,第一个是任务名,第二个是函数
gulp.task("hello", function () {
    console.log("hello melody");
    //这里编写一些重复性的流程
});

//让任务运行还是借助命令行