var gulp = require("gulp");
var plumber = require('gulp-plumber');

var sass = require("gulp-sass");
var autoprefix = require("gulp-autoprefixer");
var sourcemaps = require('gulp-sourcemaps')
var uncss = require('gulp-uncss');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');

var filter = require('gulp-filter');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var inject = browserSync.stream;

/**
 * Sources variables
 */
var vars = {
    src: {
        // Sources
//		    scss: 'sass/styles.scss',
        scss: 'sass/*.scss',
        html: './app/**/*.html',
        js: "./app/**/*.js",
        server: "./app"
    },
    des: {
        // output
        css: './app/css',
        js: './app/scripts'
    }
};


/**
 * Start BrowserSync
 */
gulp.task('browser-sync', function () {
    browserSync({
        server: vars.src.server
    });
});


// reloading browsers
gulp.task('watch', browserSync.reload);

// Injet only css
gulp.task('inject', function () {
    return gulp.src('app/styles/*.css')
        .pipe(browserSync.stream());
});


/**
 * Default task "gulp" linked to the LQ app
 */
gulp.task('default', ['browser-sync'], function () {
    gulp.watch([
        'app/**/*.js',
        'app/**/*.json',
        'app/**/*.html',
    ], ['watch']);

    gulp.watch('app/styles/*.css', ['inject']);
    console.log("\n\n\nRUN WATCH-SASS from the LQ WebApp to update the Styles\n\n\n")
});


