var gulp        = require("gulp");

var typescript  = require('gulp-tsc');


/**
 * Sources variables
 */
var vars = {
    src: {
        // Sources
        proxy: "http://localhost:11124/",                       // App proxy
        ownServer: "./",
        scss: "styles/sass/styles.scss",
        scssvendor: "styles/sass/vendor.scss",
        html: "./**/*.cshtml",
        js: "./app/**/*.js",
    },
    des: {
        // output
        css: "./styles",
        cssvendor: "./vendor",
        js: "./app/scripts"
    }
};



/**
 * Compile TypeScript
 * Not working yet
 */
gulp.task('typescript', function(){
    //gulp.src(['app/**/*.ts'])
    gulp.src(['app/app.config.ts'])
        .pipe(typescript(
            {
                sourceMap: true,
                declaration: false,
                noResolve: true,
                suppressImplicitAnyIndexErrors: true
            }
        ))
        .pipe(gulp.dest('dest/'))
});


/**
 * Build and minify JS
 */
// gulp.task('js', function () {
//  gulp.src(['src/**/module.js', src.js])
//      .pipe(sourcemaps.init())
//      .pipe(concat('app.js'))
//      .pipe(ngAnnotate())
//      .pipe(uglify())
//      .pipe(sourcemaps.write())
//      .pipe(gulp.dest(dest.js))
// })