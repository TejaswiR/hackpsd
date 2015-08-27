module.exports = function(grunt) {
  grunt.initConfig({
  sass: {                              // Task 
    dist: {                            // Target 
      files: {                         // Dictionary of files 
        'assets/stylesheets/styles.css': 'assets/stylesheets/src/styles.scss'
      }
    }
  },
  watch: {
    css: {
      files: ['assets/stylesheets/src/*.sass'],
      tasks: ['sass']
    }
  }
});

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');    
  grunt.registerTask('default',['sass','watch']);
};