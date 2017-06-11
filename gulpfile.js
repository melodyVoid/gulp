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

//拷贝文件
//dest---destination  目的地,终点
/*
 gulp.task("dest", function () {
 //获取文件
 gulp.src("src/index.html")
 .pipe(gulp.dest("dist/"))
 });*/

gulp.task("dest", function () {
    //获取文件
    gulp.src("src/**/*.*")      //**表示递归加载,意思是取到所有文件
        //让文件走向下一个流程
        .pipe(gulp.dest("dist/"))
});

//默认任务
gulp.task("default", function () {
    console.log("这是默认任务");
    //当src目录下的文件发生变化时,自动执行后面的任务
    gulp.watch("src/*",["dest"]);
});

//gulp原生不支持任何功能,只提供最基础的API