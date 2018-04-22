let mix = require("laravel-mix");
mix
    .js("assets/src/js/app.js", "assets/dist/")
    .sass("assets/src/scss/app.scss", "assets/dist/")
    .browserSync({
        proxy: "junaidqadir.local",
        files: [
            "./assets/dist/*",
            "./assets/src/js/**/*.js",
            "./assets/src/scss/**/*.scss",
            "./assets/src/img/**/*.+(png|jpg|svg)",
            "./**/*.+(html|php)",
            "./views/**/*.+(html|twig)"
        ]
    });
