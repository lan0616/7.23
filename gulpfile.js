var gulp = require('gulp');
var sass = require('gulp-sass');
var minCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
//  1编译sass 压缩css style.css  
gulp.task('devCss', function() {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(minCss())
        .pipe(gulp.dest('./src/css'))
});
//2 监听scss
gulp.task('watch', function() {
    return gulp.watch('./src/sass/*.scss', gulp.series('devCss'));
});
//压缩js
gulp.task('minJs', function() {
        return gulp.src(['./src/js/**/*.js', '!./src/js/libs/*.js'])
            .pipe(uglify())
            .pipe(gulp.dest('bulid'));
    })
    //整合任务 开发环境
gulp.task('dev', gulp.series('devCss', 'minJs', 'watch'));