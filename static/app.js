// configure paths
requirejs.config({
    baseUrl: 'app',
    paths: {
        jquery: '../lib/jquery',
        underscore: '../lib/underscore',
        jadeRuntime: '../lib/runtime',
        lib: '../lib',
        scripts: 'js',
        views: 'js/views',
        models: 'js/models'
    }
});

// load our app
requirejs(['scripts/sudoku']);