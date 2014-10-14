var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins(),
    runSequence = require('run-sequence');

gulp.task('jshint', function () {
    return gulp.src('modules/*.js')
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('default'));
});

gulp.task('tests', function () {
    return gulp.src('tests/*/*.js', {read: false})
        .pipe(plugins.mocha({reporter: 'spec'}));
});

gulp.task('npm:install', plugins.shell.task(['npm install']));
gulp.task('npm:start', plugins.shell.task(['npm start']));

gulp.task('build', function () {
    runSequence(
        ['jshint', 'tests'],
        'npm:start'
    );
});
