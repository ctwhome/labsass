var gulp        = require("gulp");
var plumber 	= require('gulp-plumber');
var inject      = require('gulp-inject');


/**
 * Inject scripts in index
 */
gulp.task('inject-scripts', function () {
    var target = gulp.src('./index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(
        [
            './src/**/*.js',
            "./Scripts/angular.js",
            //"./Scripts/angular-translate-loader-partial.js",
            "./Scripts/angular-ui-router.js",
            "./Scripts/angular-animate.js",
            "./Scripts/angular-translate.js",
            "./Scripts/angular-ui/ui-utils.js",
            "./Scripts/angular-ui/ui-utils-ieshiv.js",
            "./Scripts/angular-ui/ui-bootstrap.js",
            "./Scripts/angular-ui/ui-bootstrap-tpls.js",
            "./Scripts/angular-ui-select/dist/select.js",
            "./Scripts/angular-sanitize.js",

            "./app/app.js",
            "./app/app.router.js",
            "./app/app.config.js",
            "./app/app.run.js",

            "./app/**/*.js"

        ],
        {read: false});

    return target.pipe(inject(sources))
        .pipe(gulp.dest('./'));
});
