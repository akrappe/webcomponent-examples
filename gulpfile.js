const gulp = require('gulp');
const watchify = require('watchify');
const browserify = require('browserify');
const tsify = require('tsify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const log = require('gulplog');
const sourcemaps = require('gulp-sourcemaps');
const assign = require('lodash.assign');

// add custom browserify options here
const customOpts = {
    entries: ['./07-demo-components/02-feature-mix/src/custom-component.ts'],
    debug: true
};

const opts = assign({}, watchify.args, customOpts);
const b = watchify(browserify(opts));
b.plugin(tsify);

// add transformations here
// i.e. b.transform(coffeeify);



gulp.task('browserify', bundle); // so you can run `gulp js` to build the file
b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', log.info); // output build logs to terminal

function bundle() {
    return b.bundle()
    // log errors if they happen
        .on('error', log.error.bind(log, 'Browserify Error'))
        .pipe(source('custom-component.js'))
        // optional, remove if you don't need to buffer file contents
        .pipe(buffer())
        // optional, remove if you dont want sourcemaps
        .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
        // Add transformation tasks to the pipeline here.
        .pipe(sourcemaps.write('./')) // writes .map file
        .pipe(gulp.dest('./07-demo-components/02-feature-mix/dist'));
}
