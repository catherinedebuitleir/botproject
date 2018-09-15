/* jshint esversion: 6 */

const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const njkRender = require('gulp-nunjucks-render');
const plumber = require('gulp-plumber');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');

let reload = browserSync.reload;

let src = {
    scss: './app/scss/**/*.scss',
    css: './app/css/**/*.css',
    html: './app/*.html',
    views: './app/views/**/*.+(html|njk)',
    js: './app/js/**/*.js',
    images: 'app/images/**/*'
};

let path = {
    jquery: "./node_modules/jquery/dist/jquery.js",
    bootstrap: "./node_modules/bootstrap3/dist/js/bootstrap.js",
    hopscotch: "./node_modules/hopscotch/dist/js/hopscotch.js"
}

let dist = {
    html: './dist/',
    css: './dist/css/',
    js: './dist/js/'
};

// nunjuck templates
gulp.task('templates', ['move_html'], function() {
    return gulp
    .src('app/views/**/*.+(html|njk)')
    .pipe(plumber())
    .pipe(njkRender({
        path: ['app/views/','app/views/partials/'],
        watch: true
    }))
    .pipe(gulp.dest('app/.temp_views'))
    .pipe(reload({ stream: true }));
});

//move html
gulp.task('move_html', function() {
    return gulp
    .src(['app/.temp_views' + '/*.html', '!' + 'app/.temp_views' +'/_*.html'])
    .pipe(plumber())
    .pipe(gulp.dest('dist'))
    .pipe(reload({ stream: true }));
});

// Optimize images
gulp.task('images', () =>
  gulp.src('app/images/**/*')
    .pipe(cache(imagemin({verbose: true})))
    .pipe(plumber())
    .pipe(gulp.dest('dist/images'))
);

// Compile sass into CSS
gulp.task('sass', function() {
    return gulp
    .src([src.scss])
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest(dist.css))
    .pipe(reload({ stream: true }));
});

//compile css
gulp.task('css', function() {
    return gulp
    .src([src.css, '/node_modules/hopscotch/dist/css/hopscotch.css'])
    .pipe(plumber())
    .pipe(gulp.dest(dist.css))
    .pipe(reload({ stream: true }))
});

// Compile js
gulp.task('js', function() {
    return gulp
    .src([path.jquery, path.bootstrap, path.hopscotch, src.js])
    .pipe(gulp.dest(dist.js))
    .pipe(reload({ stream: true }));
});

// Static Server + watching scss/html files
gulp.task('default', ['sass', 'css', 'templates', 'js', 'images'],
function() {
    browserSync({ server: dist.html });
    gulp.watch(src.scss, ['sass']);
    gulp.watch(src.css, ['css']);
    gulp.watch(src.views, ['templates']);
    gulp.watch('app/.temp_views/**/*.html', ['move_html']);
    gulp.watch(src.js, ['js']);
    gulp.watch(src.images, ['images']);
});
