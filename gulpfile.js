var gulp = require('gulp'),
        gutil = require('gulp-util'),
        sass = require('gulp-ruby-sass'),
        uglify = require('gulp-uglify'),
        watch = require('gulp-watch'),
        concat = require('gulp-concat'),
        notify = require('gulp-notify');
        coffee = require('gulp-coffee');

    // sass task
    gulp.task('sass', function () {
      gulp.src('./assets/styles/**/*.scss')
        .pipe(sass({ 
          noCache: true,
          style: "expanded",
          lineNumbers: true,
          loadPath: './assets/styles/*'
        }))
        .pipe(gulp.dest('./assets/styles'));;
    });

    gulp.task('coffee', function() {
      gulp.src('./assets/scripts/*.coffee')
        .pipe(coffee({bare: true}).on('error', gutil.log))
        .pipe(gulp.dest('./assets/scripts/'))
    });    

    gulp.task('watch', function() {
      // watch scss files
      gulp.watch('./assets/styles/**/*.scss', function() {
        gulp.run('sass');
      });

      gulp.watch('./assets/scripts/**/*.js', function() {
        gulp.run('js');
      });
    });

gulp.task('default', ['sass', 'coffee', 'watch']);