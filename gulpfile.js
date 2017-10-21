var gulp = require('gulp'),
server = require('gulp-server-livereload'),
useref = require('gulp-useref'),
gulpif = require('gulp-if'),
uglify = require('gulp-uglify'),
minifyCss = require('gulp-clean-css');
 
gulp.task('nina', function() {
  gulp.src('./')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true,
      port: 9500
    }));
});


gulp.task('build-html', function () {
  return gulp.src(['*.html', 'pa*/*.html'])
      .pipe(useref())
      .pipe(gulpif('*.js', uglify()))
      .pipe(gulpif('*.css', minifyCss()))
      .pipe(gulp.dest('build'));
  });

  
gulp.task('build-assets-img', function () {
  return gulp.src('asset*/**/**').
    pipe(gulp.dest('build'))
  })

  
gulp.task('build', ['build-html','build-assets-img'])

  