'use strict';

var gulp  = require('gulp');
var pug = require('gulp-pug');

gulp.task('pug', function buildHTML() {
  return gulp.src('pages/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('../build'))
});