var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var destination = './dist';
var source = './src';

gulp.task('css', function () {
    return gulp.src(source + '/assets/css/styles.less')
        .pipe(plugins.less())
        .pipe(plugins.csscomb())
        .pipe(plugins.cssbeautify({indent: '  '}))
        // .pipe(plugins.autoprefixer())
        .pipe(gulp.dest(destination + '/assets/css/'));
});


gulp.task('minify', function () {
    return gulp.src(destination + '/assets/css/*.css')
        .pipe(plugins.csso())
        .pipe(plugins.rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(destination + '/assets/css/'));
});


gulp.task('js', function () {
    return gulp.src([source + '/assets/js/business/*.js', source + '/assets/js/*.js'])
        .pipe(uglify())
        .pipe(concat('global.min.js'))
        .pipe(gulp.dest(destination + '/assets/js/'));
});

gulp.task('build', ['css']);


gulp.task('prod', ['build', 'minify']);


gulp.task('watch', function () {
    gulp.watch(source + '/assets/css/*.less', ['prod']);
});


gulp.task('default', ['build']);