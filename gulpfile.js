var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var cleanCSS = require('gulp-clean-css');
var connect = require('gulp-connect');


//js 프로젝트 소스파일
var jsfiles = ['src/js/*.js'];



gulp.task('copy:js', function() {
  return gulp.src(jsfiles)
    .pipe(connect.reload())
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('copy:html', function() {
  return gulp.src('src/index.html')
    .pipe(connect.reload())
    .pipe(gulp.dest('dist/'));
});

gulp.task('copy:css', function() {
  return gulp.src('src/css/*.css')
    .pipe(connect.reload())
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('copy:lib', function() {
  return gulp.src('src/lib/**/*')
    .pipe(gulp.dest('dist/lib'));
});

gulp.task('minify:js', function() {
  return gulp.src('dist/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*', ['build']);
});

gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    livereload: true,
    port: 3001
  });
});


gulp.task('copy', ['copy:html', 'copy:lib', 'copy:js', 'copy:css']);
gulp.task('build', ['copy', 'minify:js']);
gulp.task('server', ['connect'])
gulp.task('default', ['build', 'watch', 'server']);
