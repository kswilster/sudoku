// configure paths
requirejs.config({
    baseUrl: 'app',
    paths: {
        jquery: '../lib/jquery',
        lib: '../lib',
        scripts: 'js'
    }
});

// load our app
requirejs(['scripts/sudoku']);