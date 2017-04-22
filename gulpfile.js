const gulp = require('gulp')
const sass = require('gulp-sass')
const prefix = require('gulp-autoprefixer')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const babel = require('gulp-babel')

gulp.task('styles', () => {
  gulp.src('src/styles/**/*.scss')
  .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
  .pipe(prefix({
    browsers: ['last 2 versions'],
    cascade: false,
  }))
  .pipe(gulp.dest('./assets/css'))
})

gulp.task('vendors', () => {
  gulp.src([
    'src/vendors_js/ScrollMagic.js',
    'src/vendors_js/TweenMax.min.js',
    'src/vendors_js/animation.gsap.js'
  ])
  .pipe(concat('vendors.min.js'))
  .pipe(gulp.dest('./assets/js'))
})

gulp.task('js', () => {
  gulp.src('src/js/*.js')
  .pipe(babel({
    presets: ['es2015'],
  }))
  .pipe(uglify())
  .pipe(concat('main.min.js'))
  .pipe(gulp.dest('./assets/js'))
})

gulp.task('watch', () => {
  gulp.watch('src/styles/**/*.scss', ['styles'])
  gulp.watch('src/js/*.js', ['js'])
  gulp.watch('src/vendors_js/*.js', ['vendors'])
})

gulp.task('default', ['styles', 'js', 'vendors'])
gulp.task('start', ['watch'])
