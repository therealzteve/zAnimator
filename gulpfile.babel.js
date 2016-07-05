// generated on 2016-05-03 using generator-webapp 2.0.0
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins'; // Loads any plugin from package.json
import browserSync from 'browser-sync';
import del from 'del';
import { stream as wiredep } from 'wiredep';
import inject from 'gulp-inject';
import browserify from 'browserify';
import babelify from 'babelify';

var source = require('vinyl-source-stream');
var Server = require('karma').Server;
var collapse = require('bundle-collapser/plugin');

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

// ##################
// TASKS
// ##################

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});

/**
  Cleans the temporary projects folders
*/
gulp.task('clean', del.bind(null, ['.tmp', 'dist']));


/**
  Main build task
*/
gulp.task('build', ['lint', 'buildlib'], () => {
  return gulp.src('dist/**/*').pipe($.size({
    title: 'build',
    gzip: true
  }));
});


//gulp.task('lint', lint('app/scripts/**/*.js'));
gulp.task('lint', () => {
  return gulp.src('app/scripts/**/*.js')
    .pipe(reload({
      stream: true,
      once: true
    }))
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.if(!browserSync.active, $.eslint.failAfterError()));
});

/**
 * Builds the library for using in the browser
 */
gulp.task('buildlib', ['scripts'], () => {
  console.log('test');
  var b = browserify({
      debug: true,
      standalone: 'zAnimator'
    })
    .transform(babelify)
    .require('app/scripts/main.js',
      {
        entry: true,
        fullPaths: false
        })
    .plugin(collapse);

    return b.bundle()
     .on('error', function (err) { console.log('Error: ' + err.message); })
     .pipe(source('zAnimator.js'))
     .pipe(gulp.dest('.tmp/lib/'));
     //.pipe(fs.mkdir('.tmp/lib'))
     //.pipe(fs.createWriteStream('.tmp/lib/zAnimator.js'));
    /*.pipe(gulp.src('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))*/


  /*  return gulp.src('app/scripts/main.js')
		.pipe($.requirejsOptimize({
      baseUrl: '.tmp/scripts',
      findNestedDependencies: true,
      name: '../../node_modules/almond/almond',
      include: ['main'],
      out: 'zAnimator.js',
      wrap: {
        startFile: 'app/scripts/wrap.start',
        endFile: 'app/scripts/wrap.end'
      },
      packages: [
      {
          name: 'factory',
          location: 'factories/createjs',
          main: 'factory'
      }
    ],
    optimize: 'none'
		}))
    .pipe(gulp.dest('.tmp/lib')); */

  /*rjs({
    baseUrl: '.tmp/scripts',
    findNestedDependencies: true,
    name: '../../node_modules/almond/almond',
    include: ['main'],
    out: 'zAnimator.js',
    wrap: {
      startFile: 'app/scripts/wrap.start',
      endFile: 'app/scripts/wrap.end'
    },
    packages : [
    {
        name: 'factory',
        location : 'factories/createjs',
        main : 'factory'
    }
  ]
  })
  .pipe(gulp.dest('.tmp/lib'))
  .pipe(reload({
    stream: true
  }));*/
});

gulp.task('scripts', () => {
  return gulp.src('app/scripts/**/*.js')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('.tmp/scripts'));
});

gulp.task('addScriptsToHtml', () => {
  var target = gulp.src('app/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['app/scripts/zAnimator/**/*.js'], {
    read: false
  });

  return target
    .pipe(inject(sources))
    .pipe(gulp.dest('.tmp'))
    .pipe(reload({
      stream: true
    }));
});

gulp.task('serve', ['buildlib', 'addScriptsToHtml'], () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.tmp', 'app'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch('app/examples/**/*.*', ['addScriptsToHtml']);
  gulp.watch('app/scripts/**/*.js', ['buildlib']);
  gulp.watch('bower.json', ['wiredep', 'fonts']);
});

gulp.task('serve:dist', () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['dist'],
      routes: {
        '/examples': 'app/examples',
        '/bower_components': 'bower_components'
      }
    }
  });
});

gulp.task('serve:test', ['scripts'], () => {
  browserSync({
    notify: false,
    port: 9000,
    ui: false,
    server: {
      baseDir: 'test',
      routes: {
        '/scripts': '.tmp/scripts',
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch('app/scripts/**/*.js', ['scripts']);
  gulp.watch('test/spec/**/*.js').on('change', reload);
  gulp.watch('test/spec/**/*.js', ['lint:test']);
});

// inject bower components
gulp.task('wiredep', () => {
  gulp.src('app/*.html')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest('app'));
});

/**
 * Run test once and exit
 */
gulp.task('test', function(done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function(done) {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});
