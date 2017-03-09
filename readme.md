# gulp-vb2ts [![Build Status](https://travis-ci.org/Maximaximum/gulp-vb2ts.svg?branch=master)](https://travis-ci.org/Maximaximum/gulp-vb2ts)

> My top-notch gulp plugin


## Install

```
$ npm install --save-dev gulp-vb2ts
```


## Usage

```js
const gulp = require('gulp');
const vb2ts = require('gulp-vb2ts');

gulp.task('default', () => {
	gulp.src('src/file.ext')
		.pipe(vb2ts())
		.pipe(gulp.dest('dist'))
);
```


## API

### vb2ts([options])

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## License

MIT © [Maximaximum](http://mazepa-studio.com)
