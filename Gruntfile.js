

module.exports = function(grunt) {

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        // watch for changes and trigger compass, jshint, uglify and livereload
        watch: {
            js: {
                files: ['public/js/src/*.js'],
                tasks: ['uglify'],
                options: {
                    livereload: true,
                },
            },
            css: {
                files: 'public/css/src/*.scss',
                tasks: ['styles'],
                options: {
                    livereload: true,
                },
            }
        },

        // we use the Sass
        styles: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'public/css/main.css': 'public/css/src/main.scss'
                }
            }
        },

        // uglify to concat & minify
        uglify: {
            js: {
                files: {
                    'public/js/main.js': [
                        'public/js/src/main.js'
                    ]
                }
            }
        },

        // start the server and all that
        nodemon: {
            dev: {
                script: 'server.js'
            }
        },

        // concurrent blocking task management
        concurrent: {
            target: {
                tasks: [ 'nodemon', 'watch' ],
                options: {
                    logConcurrentOutput: true
                }
            }
        }

    });


    // register task
    grunt.registerTask('default', ['concurrent']);
};

