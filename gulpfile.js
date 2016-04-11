// Less configuration
var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['less'], function() {

    browserSync.init({
        server: "."
    });

    gulp.watch('./less/*.less', ['less']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('less', function() {
    gulp.src('./less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);