// configure paths
requirejs.config({
    baseUrl: 'app',
    paths: {
        jquery: '../lib/jquery',
        lib: '../lib',
        scripts: 'js',
        views: 'js/views'
    }
});

// load our app
requirejs(['scripts/sudoku']);