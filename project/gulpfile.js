var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Получаем все файлы с окончанием .scss/sass в папке app/scss и дочерних директориях
 .pipe(sass())
 .pipe(gulp.dest('app/css'))
 .pipe(browserSync.reload({
 stream: true
 }))
});

gulp.task('browserSync', function() {
  browserSync({
 server: {
 baseDir: 'app'
 },
  })
})


gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  // Обновляем браузер при любых изменениях в HTML или JS
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});
