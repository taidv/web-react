
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack');
const webpackstream = require('webpack-stream');
const changed = require('gulp-changed');
const ts = require('gulp-typescript');
var tsProject = ts.createProject("tsconfig.json");
var paths = {

}

const TYPESCRIPT_FILES = ['src/**/*.{ts,tsx,less}'];
const STATIC_FILES = ['src/static/**/*', '!**/*.{ts,tsx}'];

var webpackCfg = require('./webpack.config.js');

var cdnResolve = function (lib, version) { };

gulp.task('build:static', function () {
    return gulp.src(STATIC_FILES)
        .pipe(changed('dist'))
        .pipe(gulp.dest('dist'));
});

gulp.task('build:webpack', function () {
    return gulp.src(TYPESCRIPT_FILES)
        .pipe(webpackstream(webpackCfg, webpack))
        .pipe(gulp.dest('dist'));
});


gulp.task("default", ["build:static", "build:webpack"]);
