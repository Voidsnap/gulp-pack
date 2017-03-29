const gulp = require('gulp');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const babel = require('gulp-babel');
const browserSync = require('browser-sync');
const cssnext = require('postcss-cssnext');
const rucksack = require('rucksack-css');
const build = require('gulp-build');

const cfg = require('./gulp-pack.json');
const template = require ('./src/template');

// meta
const meta = {
  title: cfg.title,
  author: cfg.author,
  description: cfg.description,
  keywords: cfg.keywords,
  lang: cfg.lang,
  csssrc: cfg.css.dest+cfg.css.bundle,
  jsscript: cfg.js.dest+cfg.js.bundle
};

// css
gulp.task('css', () => {
  let plugins = [
      cssnext,
      rucksack
  ];
  gulp.src([cfg.css.src])
    .pipe(concat(cfg.css.bundle))
    .pipe(postcss(plugins))
    .pipe(gulp.dest(cfg.dest+cfg.css.dest));
});

// js
gulp.task('js', () => {
  gulp.src([cfg.js.src])
    .pipe(babel({presets: ['es2015']}))
    .pipe(concat(cfg.js.bundle))
    .pipe(gulp.dest(cfg.dest+cfg.js.dest));
});

// html
gulp.task('html', () => {
  let options = {layout: template};
  gulp.src([cfg.html.src])
    .pipe(build(meta, options))
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
