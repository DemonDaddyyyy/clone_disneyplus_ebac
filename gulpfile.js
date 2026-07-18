const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const uglify = require ('gulp-uglify');

function scripts() {
  return gulp.src('./src/scripts/*.js')   // caminho corrigido
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

function styles() {
return gulp.src('./src/styles/*.scss')
    .pipe(sass({ style: 'compressed' }))
    .pipe(gulp.dest('./dist/css'));
}

function images() {
return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

function watchFiles() {
gulp.watch('./src/styles/*.scss', styles);
}

exports.sass = styles;
exports.watch = watchFiles;
exports.default = gulp.parallel(styles, images, watchFiles, scripts);