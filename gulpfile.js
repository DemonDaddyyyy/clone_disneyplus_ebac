const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function styles() {
  return gulp.src('./src/styles/*.scss')
    .pipe(sass({ style: 'compressed' }))
    .pipe(gulp.dest('./dist/css'));
}

function watchFiles() {
gulp.watch('./src/styles/*.scss', styles);
}

exports.sass = styles;
exports.watch = watchFiles;
exports.default = gulp.series(styles, watchFiles);