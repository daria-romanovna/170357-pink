"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync");
var mqpacker = require("css-mqpacker");
var minifyCSS = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var copy = require("gulp-contrib-copy");
var clean = require("gulp-contrib-clean");
var uglify = require("gulp-uglify")

var paths = {
  sass: "sass/**/*.{scss,sass}",
  fonts: "fonts/**/*.{woff,woff2}",
  scripts: "js/**/*.js",
  images: "img/**/*.{png,jpg,gif,svg}",
  html: "*.html",
  css: "css/normalize.css"
};

gulp.task("clean", function() {
  return gulp.src("build", {read: false})
     .pipe(clean());
});

gulp.task( "copy", function() {
  gulp.src(paths.fonts)
    .pipe(gulp.dest("build/fonts"));
  gulp.src(paths.html)
    .pipe(gulp.dest("build"));
  gulp.src(paths.css)
    .pipe(gulp.dest("build/css"))
});

gulp.task("style", function() {
  return gulp.src("sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 1 version",
        "last 2 Chrome versions",
        "last 2 Firefox versions",
        "last 2 Opera versions",
        "last 2 Edge versions"
      ]}),
      mqpacker ({
        sort: true
      })
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(server.reload({stream: true}));
});

gulp.task("build-style", ["style"], function(){
  return gulp.src("build/css/style.css")
    .pipe(minifyCSS())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"));
});

gulp.task("script", function() {
  return gulp.src(paths.scripts)
    .pipe(plumber())
    .pipe(gulp.dest("build/js"))
});

gulp.task("build-js", ["script"], function(){
  return gulp.src("build/js/script.js")
    .pipe(uglify())
    .pipe(rename("script.min.js"))
    .pipe(gulp.dest("build/js"));
});

gulp.task("build-images", function() {
  return gulp.src(paths.images)
    .pipe(imagemin({
      optimizationLevel: 3,
      progressive: true
    }))
    .pipe(gulp.dest("build/img"));
});

gulp.task("html", function() {
  gulp.src(paths.html)
    .pipe(gulp.dest("build"));
});

gulp.task("serve", ["style", "html"], function() {
  server.init({
    server: "./build",
    notify: false,
    open: true,
    ui: false
  });
  gulp.watch(paths.scripts, ["build-js"]);
  gulp.watch(paths.sass, ["style", "build-style"]);
  gulp.watch(paths.html, ["html"]);
  gulp.watch(paths.html).on("change", server.reload);
});


gulp.task("build", ["clean", "copy", "build-style", "build-js", "build-images"]);


