module.exports = function(grunt) {

	grunt.config('uglify', {
		// Minify code from the scripts output
		build: {
			src: '../js/scripts.js',
			dest: '../dist/js/scripts.min.js'
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-uglify');
};