'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

gulp.task('serve', function() {
    
    browserSync.init({
        server: {
            baseDir: "../build"
        }
    });

    gulp.watch(['../build/**/*.html', '../build/css/**/*.css']).on('change', reload);
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./less/**/*.less', ['less']);
    gulp.watch('./pages/**/*.pug', ['pug']);
});