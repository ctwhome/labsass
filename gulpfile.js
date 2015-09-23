var gulp = require("gulp");

var typescript = require('gulp-tsc');

var filter = require('gulp-filter');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
require('require-dir')('./gulp-tasks');

// var uglify = require('gulp-uglify')
// var ngAnnotate = require('gulp-ng-annotate')

/**
 * Sources variables
 */
var vars = {
    src: {
        // Sources
        proxy: "http://localhost:11124/",                       // App proxy
        ownServer: "./",
        scss: [
            './styles/sass/**/*.scss',
            './app/**/*.scss'
        ],
        scssvendor: "styles/sass/vendor.scss",
        scsscomponents: "styles/sass/components.scss",
        components: [                                              // Sass injection
            './app/**/*.scss',
            './styles/sass/components/*.scss'
        ],
        html: "./**/*.cshtml",
        js: "./app/**/*.js",
    },
    des: {
        // output
        js: "./app/scripts"
    }
};


/**
 * Default task with proxy
 */
gulp.task('default', ['sass', 'sass-vendor', 'sass-components', 'browser-sync'],
    function () {
        //gulp.watch("./**/*.js").on('change', browserSync.reload);
        gulp.watch(vars.src.scss, ['sass']);
        gulp.watch(vars.src.scssvendor, ['sass-vendor']);
        gulp.watch(vars.src.components, ['sass-components']);
    });