'use strict';

var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins(),
    del = require('del'),
    through = require('through'),
    paths = {
        js: ['*.js', 'server/**/*.js','client/**/*.js'],
        html: ['client/**/views/**']
    };
var env = 'development';

var defaultTasks = ['devServe', 'watch'];
gulp.task('devServe', function () {
    plugins.nodemon({
        script: 'server.js',
        ext: 'html js',
        env: { 'NODE_ENV': 'development' } ,
        ignore: ['node_modules/'],
        nodeArgs: ['--debug']
    });
});
gulp.task('watch', function () {
    gulp.watch(paths.js).on('change', plugins.livereload.changed);
    gulp.watch(paths.html).on('change', plugins.livereload.changed);
    plugins.livereload.listen({interval: 500});
});

gulp.task('development', defaultTasks);

gulp.task('default', function (defaultTasks) {
    // run with paramater
    gulp.start(env);
});