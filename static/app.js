// configure paths
requirejs.config({
    baseUrl: 'app',
    paths: {
        jquery: '../lib/jquery',
        jadeRuntime: '../lib/runtime',
        lib: '../lib',
        scripts: 'js',
        views: 'js/views'
    }
});

// load our app
requirejs(['scripts/sudoku']);