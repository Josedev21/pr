module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    "dev/styles/main.css": "src/styles/main.less"
                }
            },
            production: {
                options: {
                    compress: true
                },
                files: {
                    "dist/styles/main.min.css": "src/styles/main.less"
                }
            }
        },
        watch: {
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:development']
            },

            /**para ficar de olho no html */
            html: {
                files: ['src/index.html'],
                tasks: ['replace:dev']
            }
        },

    /**link do css para ENDEREÇO_DO_CSS para ambiente dev , e o endereço minificado MAIN.MIN.CSS para dist */
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'ENDEREÇO_DO_CSS',
                            replacement: './styles/main.css'
                        },
                        {
                            match: 'ENDEREÇO_DO_JS',
                            replacement: '../src//scripts/main.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/index.html'],
                        dest: 'dev/'
                    }
                ]
            },
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'ENDEREÇO_DO_CSS',
                            replacement: './styles/main.min.css'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['prebuild/index.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },

        /**minifica o html do ambiente dist  */
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'prebuild/index.html': 'src/index.html'
                }
            }
        },

        /**apaga a pasta */
        clean: ['prebuild']
    })

    /**Carregamento dos plugins */
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks('grunt-contrib-clean');

    /**Começa observando o less:development */
    grunt.registerTask('default', ['watch']);

    /**começa observando o less:production */
    grunt.registerTask('build', ['less:production', 'htmlmin:dist', 'replace:dist', 'clean']);

} 