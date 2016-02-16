var babelify = require('babelify');
var browserify = require('browserify');
var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var watchify = require('watchify');

var b = watchify(browserify({
  entries: 'src/index.js',
  debug: true
}));

b.transform(babelify, {presets: ['es2015', 'stage-2', 'react']});
b.on('update', bundle);
b.on('log', gutil.log)
function bundle() {
  return b.bundle()
  .pipe(source('bundle.js'))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./dist'));
};

gulp.task('build', bundle);
gulp.task('default', ['build']);