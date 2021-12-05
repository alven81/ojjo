var gulp = require('gulp'), // Подключаем Gulp
	sass = require('gulp-sass')(require('sass')); //Подключаем Sass пакет

gulp.task('sass', function(){
	return gulp.src('scss/*.scss') // Берем все sass файлы из папки sass и дочерних, если таковые будут
        .pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('css'))
});

gulp.task('watch', function() {
	gulp.watch('scss/*.scss', gulp.parallel('sass'));
});
