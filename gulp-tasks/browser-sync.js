var gulp        = require("gulp");
var browserSync = require('browser-sync');

// Files to watch by browsersync
var files =[
    "styles/**/*.css",
    "./app/**/*.html",
    "./app/**/*.cshtml",
    "./index.cshtml",
    "./app/**/*.js"
];

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


gulp.task("browser-sync", function () {

    browserSync.init(files, {
        proxy: vars.src.proxy,
        open: false,
    });
});

gulp.task("browser-sync-own-server", ['inject-scripts'], function () {
    browserSync.init(files, {
        server: {
            baseDir: vars.src.ownServer
        }
    });
});