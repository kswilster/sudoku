// configure paths
requirejs.config({
    baseUrl: 'app',
    paths: {
        lib: '../lib',
        scripts: 'js'
    }
});

// load our app
requirejs(['scripts/sudoku']);