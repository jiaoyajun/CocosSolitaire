'use strict';
const gulp = require("gulp");
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
const inject = require('gulp-inject-string');

gulp.task('buildJs', () => {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(inject.replace('var __my__;', ''))
        .pipe(inject.prepend('window.__my__ = {};\nwindow.ll = window.__my__;\n'))
        .pipe(inject.replace('var __extends', 'window.__extends'))
        .pipe(inject.replace('var ', 'let '))
        .pipe(gulp.dest('./dist'));
})

gulp.task("buildDts", () => {
    return tsProject.src()
        .pipe(tsProject())
        .dts.pipe(inject.append('import ll = __my__;'))
        .pipe(gulp.dest('./dist'));
});

gulp.task("copy", () => {
    return gulp.src('dist/**/*')
        .pipe(gulp.dest('../assets/'))
});

gulp.task('build', gulp.series(
    gulp.parallel('buildJs'),
    gulp.parallel('buildDts'),
    gulp.parallel('copy')
))
