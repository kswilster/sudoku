// configure paths
requirejs.config({
    baseUrl: 'app',
    paths: {
        jquery: '../lib/jquery',
        underscore: '../lib/underscore',
        jadeRuntime: '../lib/runtime',
        lib: '../lib',
        scripts: 'js',
        views: 'js/views'
    }
});

// load our app
requirejs(['scripts/sudoku']);