/**
 * Created by 橘子到底酸不酸 on 2017/10/9.
 */
var gulp=require("gulp");
var concat=require("gulp-concat");
var rename=require("gulp-rename");
var minifyCss=require("gulp-minify-css");
var uglify=require("gulp-uglify");
//css压缩
gulp.task("css",function(){
    gulp.src("./css/*.css")
        .pipe(concat("main.css"))
        .pipe(rename({suffix:".min"}))
        .pipe(minifyCss())
        .pipe(gulp.dest("./css"))
})
//js压缩
gulp.task("js",function(){
    gulp.src("./js/*.js")
        .pipe(concat("main.js"))
        .pipe(rename({suffix:".min"}))
        .pipe(uglify())
        .pipe(gulp.dest("./js"))
})