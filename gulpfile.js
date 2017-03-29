const gulp = require('gulp');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const babel = require('gulp-babel');
const browserSync = require('browser-sync');
const cssnext = require('postcss-cssnext');
const rucksack = require('rucksack-css');
const cfg = require('./gulp-pack.json');

// css
gulp.task('css', () => {
  let plugins = [
      cssnext,
      rucksack
  ];
  gulp.src([cfg.css.src])
    .pipe(concat(cfg.css.bundle))
    .pipe(postcss(plugins))
    .pipe(gulp.dest(cfg.css.dest));
});

// js
gulp.task('js', () => {
  gulp.src([cfg.js.src])
    .pipe(babel({presets: ['es2015']}))
    .pipe(concat(cfg.js.bundle))
    .pipe(gulp.dest(cfg.js.dest));
});

// html
gulp.task('html', () => {
  gulp.src([cfg.html.src])
    .pipe(gulp.dest(cfg.html.dest));
});

gulp.task('reload', () => {
    browserSync.reload();
});

// dev
gulp.task('dev', ['css', 'js', 'html'], () => {
  gulp.watch(cfg.css.src, ['css']);
  gulp.watch(cfg.js.src, ['js']);
  gulp.watch(cfg.html.src, ['html']);
});

// dev + server
gulp.task('server', ['css', 'js', 'html'], () => {
  browserSync.init({
        server: cfg.dest,
        open: false,
        port: cfg.port,
        ui: false
  });
  gulp.watch(cfg.css.src, ['css', 'reload']);
  gulp.watch(cfg.js.src, ['js', 'reload']);
  gulp.watch(cfg.html.src, ['html', 'reload', 'reload']);
});

// default/build
gulp.task('default', ['css', 'js', 'html']);
