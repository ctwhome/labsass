var gulp = require("gulp");
var plumber = require('gulp-plumber');

var sass = require("gulp-sass");
var autoprefix = require("gulp-autoprefixer");
var sourcemaps = require('gulp-sourcemaps');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
//var uncss = require('gulp-uncss');
//var browserSync = require('browser-sync');

var vars = {
    src: {
        // Sources
        proxy: "http://localhost:11124/",                       // App proxy
        ownServer: "./",
        scss: [
            "app/styles/sass/styles.scss",
            "app/styles/sass/sections/**/*.scss"
        ],
        sections:"app/styles/sass/sections/**/*.scss",
        scssvendor: "app/styles/sass/vendor.scss",
        scsscomponents: "app/styles/sass/components.scss",
        components: [                                              // Sass injection
            "./app/**/*.scss",
            "./app/styles/sass/components/*.scss"
        ],
        html: "./**/*.cshtml",
        js: "./app/**/*.js",
    },
    des: {
        // output
        css: "./styles",
        js: "./app/scripts"
    }
};

/**
 * Compile sass
 *
 * 0. Concat Sass
 * 1. Create source maps
 * 2. Show sass error in console and BrowserSync for 3 seconds
 * 3. Reload browserSync
 */
// var separator = "\n------------------------------\n";
gulp.task('sass', function () {
    console.log("Running sass task");
    return gulp.src(vars.src.scss)

        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefix("ie >= 11"))
        .pipe(sourcemaps.write('./'))

        .pipe(gulp.dest(vars.des.css));
});


gulp.task('sass-vendor', function () {
    console.log("Running sass-vendor task");
    return gulp.src(vars.src.scssvendor)

        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefix("ie >= 11"))
        .pipe(sourcemaps.write('./'))

        .pipe(gulp.dest(vars.des.css));
});


gulp.task('sass-components', ['concat-sass'], function () {
    console.log("Running sass-components task");
    return gulp.src(vars.src.scsscomponents)

        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefix("ie >= 11"))
        .pipe(sourcemaps.write('./'))

        .pipe(gulp.dest(vars.des.css));
});

/**
 * Concat sass files to components
 */
gulp.task('concat-sass', function () {
    return gulp.src(vars.src.components)
        .pipe(concat({
            path: '_concate-components.scss',
            stat: { mode: 0666 }
        }))
        .pipe(gulp.dest('./styles/sass'));
});


/**
 * Minify CSS
 *
 * 1. Remove Unnecessary Css
 * 2. Autoprefix css
 * 3. Minify css.min
 */
gulp.task('minifycss', function () {
    return gulp.src('./styles/styles.css')
        .pipe(plumber())
        //.pipe(uncss({
        //    html: ['app/**/*.html']
        //}))
        //.pipe(autoprefix())
        .pipe(minifyCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./styles'));
});


/**
 * Default task with proxy
 */
gulp.task('watch-sass', ['sass', 'sass-vendor', 'sass-components'],
    function () {
        gulp.watch(vars.src.scss, ['sass']);
        gulp.watch(vars.src.scssvendor, ['sass-vendor']);
        gulp.watch(vars.src.components, ['sass-components']);
    });