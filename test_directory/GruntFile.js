module.exports = function(grunt) {

  grunt.initConfig({
	  
    concat: {
  options: {
    separator: ' \r\n'
  },
  
  dist: {
    src: ['js/src/*.js'],
    dest: 'js/dist/script.main.js'
  },
  
  dist: {
    src: ['css/src/*.css'],
    dest: 'css/dist/main.css'
  }
},

uglify:{
	dist: {
    src: ['js/dist/script.main.js'],
    dest: 'js/dist/script.main.min.js'
  } 
},

cssmin: {
  options: {
    separator: ''
  },
  
  dist: {
    src: ['css/src/*.css'],
    dest: 'css/dist/main.min.css'
  }
}
  });

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');

grunt.registerTask('default', ['concat','uglify','cssmin']);
};

