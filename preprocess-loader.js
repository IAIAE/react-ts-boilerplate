"use strict";

let path = require("path")
let preprocess = require("preprocess")
let loaderUtils = require("loader-utils")


module.exports = function(source) {
	this.cacheable && this.cacheable();

	let paths = path.extname(this.resourcePath || '').split('.')
	let ext = paths[paths.length - 1];
	let ppOptions = {
		fileNotFoundSilentFail: true,  //not throw exception when @include or @extend file not found.
		srcDir: this.context,
		type: ext,
	};
	let loaderOptions = loaderUtils.getOptions(this) || {}
	if (loaderOptions.ppOptions && typeof loaderOptions.ppOptions == 'object') {
		ppOptions = Object.assign({}, ppOptions, loaderOptions.ppOptions)
	}
	delete loaderOptions.ppOptions;
	let context = Object.assign({}, process.env, loaderOptions);
	context.NODE_ENV = ppOptions.NODE_ENV || 'development'
	let result = preprocess.preprocess(source, context, ppOptions)
	return this.callback(null, result)
}