var gulp = require('gulp');
// подключаем gulp-sass

var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.+(scss|sass)') // Получаем все файлы с окончанием .scss/sass в папке app/scss и дочерних директориях
 .pipe(sass())
 .pipe(gulp.dest('app/css'))
})

gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.+(scss|sass)', ['sass']); 
  // другие ресурсы
})
