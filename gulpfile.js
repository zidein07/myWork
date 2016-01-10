var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');
var eslint = require('gulp-eslint');
var jscs = require('gulp-jscs');

gulp.task('eslint', function() {
  return gulp.src(['src/script/*.js',
          'src/script/*/*.js'])
         .pipe(eslint())
         .pipe(eslint.format())
         .pipe(eslint.failOnError());
});



gulp.task('less', function () {
  return gulp.src('./src/less/main.less')
    .pipe(less())
    .pipe(gulp.dest('./assets/css'))
    .pipe(browserSync.stream());
});

gulp.task('test', ['eslint', 'jscs']);

gulp.task('jscs', function () {
      gulp.src(['src/*.js',
        'src/*/*.js'])
        .pipe(jscs());
});

gulp.task('connect', ['less'], function () {
  browserSync.init({
    files: [
      'index.html',
      'src/partials/*.html',
      'src/partials/*/*.html',
      'src/style/*.css',
      'src/*/*/*.js',
      'src/*/*.js',
      'src/*.js'
    ],
    port: 3000,
    logConnections: false,
    notify: false,
    server: './'
  });
  gulp.watch(["./src/less/main.less", "./src/less/*/*.less"], ['less']);
});

gulp.task('default',['connect']);