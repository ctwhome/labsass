var gulp        = require("gulp");
var browserSync = require('browser-sync');

// Files to watch by browsersync
var files =[
    "styles/**/*.css",
    "./app/**/*.html",
    "./app/**/*.cshtml",
    "./index.cshtml",
    'app/**/*.json',
    "./app/**/*.js"
];

var vars = {
    src: {
        // Sources
        server: "./app",
        proxy: "http://localhost:11124/",                       // App proxy
        ownServer: "./",
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



// reloading browsers
gulp.task('watch', browserSync.reload);

// Injet only css
gulp.task('inject', function () {
    return gulp.src('app/styles/*.css')
        .pipe(browserSync.stream());
});


gulp.task("browser-sync", function () {

    browserSync({
        server: vars.src.server
    });
    browserSync.init(files, {
        //proxy: vars.src.proxy,
        //open: false,
    });
});

gulp.task("browser-sync-own-server", ['inject-scripts'], function () {
    browserSync.init(files, {
        server: {
            baseDir: vars.src.ownServer
        }
    });
});