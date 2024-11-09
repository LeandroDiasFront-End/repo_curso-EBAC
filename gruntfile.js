const { init } = require("grunt");

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        less: {
            development: {
                files: {
                    'dev/styles/main.css':'src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css':'src/styles/main.less'
                }               
            }
        },

        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js':'src/scripts/main.js'
                }
            }
        }
    });

    //carregamento dos plugins:

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //registro das tarefas:
    
    grunt.registerTask('default', ['less', 'uglify']);
}