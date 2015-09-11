/* ===================================================== */
/* Component:                   Grunt configuration file */
/* ===================================================== */

module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          port: 1337,
          base: 'dist',
          livereload: true,
          open: true,
          hostname: '0.0.0.0'
        }
      }
    },

    clean: {
      dest: ['dist/*']
    },

    concat: {
      dist: {
        src: ['src/lib/js/*.js', 'src/app/js/scripts.js'],
        dest: 'dist/js/scripts.min.js'
      }
    },

    uglify: {
      build: {
        options: {
          mangle: true,
          compress: true
        },
        src: 'dist/js/*.js',
        dest: 'dist/js/scripts.min.js'
      }
    },

    imagemin: {
      dynamic: {
        options: {
          optimizationLevel: 5
        },
        files: [{
          expand: true,
          cwd: 'src/app/images/',
          src: ['**/*.{png,jpg,gif,svg}'],
          dest: 'dist/images/'
        }]
      }
    },

    postcss: {
      options: {
        map: true,
        processors: [
          require('pixrem')(),
          require('autoprefixer')({browsers: 'last 2 versions'}),
          require('cssnano')()
        ]
      },
      dist: {
        src: 'dist/css/styles.min.css'
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'dist/css/styles.min.css': 'src/app/scss/app.scss'
        }
      } 
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
            expand: true,
            cwd: 'src/',
            src: ['**/*.html'],
            dest: 'dist/'
        }]
      }
    },

    watch: {
      scripts: {
        files: ['src/**/*.js'],
        tasks: ['concat', 'uglify']
      },
      css: {
        files: ['src/**/*.scss'],
        tasks: ['sass', 'postcss']
      },
      html: {
        files: ['src/*.html'],
        tasks: ['htmlmin']
      },
      livereload: {
        options: {
          livereload: 35729
        },
        files: ['dist/**/*']
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');


  grunt.registerTask('dist', [
    'clean',
    'concat',
    'uglify',
    'sass',
    'imagemin',
    'htmlmin'
  ]);

  grunt.registerTask('dev', [
    'connect',
    'watch'
  ]);
};
