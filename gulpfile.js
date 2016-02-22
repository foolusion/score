var babelify = require('babelify');
var browserify = require('browserify');
var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var watchify = require('watchify');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');

var b = watchify(browserify({
  entries: 'src/index.js',
  debug: true
}));

b.transform(babelify, {presets: ['es2015', 'stage-2', 'react']});

b.on('update', bundle);
b.on('log', gutil.log)
function minify() {
  return b.bundle()
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./dist'));
};

function bundle() {
  return b.bundle()
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./dist'));
};

gulp.task('build', bundle);
gulp.task('prod', minify);
gulp.task('default', ['build']);
