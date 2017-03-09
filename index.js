'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var vb2ts = require('vb2ts').default;

module.exports = function (opts) {
	opts = opts || {};

	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-vb2ts', 'Streaming not supported'));
			return;
		}

		try {
			file.contents = new Buffer(vb2ts(file.contents.toString(), opts));
			this.push(file);
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-vb2ts', err));
		}

		cb();
	});
};
