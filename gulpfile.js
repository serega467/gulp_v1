'use strict';

// let gulp = require('gulp'),
//     sass = require('gulp-sass');

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// function buildStyles() {
//     return gulp.src('app/scss/style.scss')
//       .pipe(sass().on('error', sass.logError))
//       .pipe(gulp.dest('app/css/style.css'));

gulp.task('sass', function(){
    gulp.src('app/scss/style.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('app/css'))
});