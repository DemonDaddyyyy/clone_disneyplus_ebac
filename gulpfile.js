const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts() {
  return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
}

function styles() {
  return gulp.src('./src/styles/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'));
}

function images() {
  return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

function watchFiles() {
  gulp.watch('./src/styles/*.scss', styles);
  gulp.watch('./src/scripts/*.js', scripts);
}

const build = gulp.parallel(styles, images, scripts); // SEM watch — termina normalmente

exports.sass = styles;
exports.scripts = scripts;
exports.images = images;
exports.watch = watchFiles;
exports.build = build;                  
exports.default = gulp.series(build, watchFiles);