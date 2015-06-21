var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var path = require('path');
var minify_css = require('gulp-minify-css');
var runSequence = require('gulp-run-sequence');
var webserver = require('gulp-webserver');

gulp.task('compress_js', function() {
  return gulp.src(['js/underscore.js', 'js/backbone.js', 'js/**/*.js'])
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('js'));
});

gulp.task('compress_css', function () {
  gulp.src('css/*.css')
    .pipe(minify_css({compatibility: 'ie8'}))
    .pipe(concat('all.min.css', {newLine: '\n\n'}))
    .pipe(gulp.dest('css'));
});

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('precompile:assets', function(s){
  runSequence('compress_js','compress_css',s);
})

gulp.task('serve', function(s){
  runSequence("precompile:assets", "webserver",s);
})