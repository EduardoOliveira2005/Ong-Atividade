const { defineConfig } = require("vite");
const { resolve } = require("path");

module.exports = defineConfig({

    base: "/Ong-Atividade/",

    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                projetos: resolve(__dirname, "projetos.html"),
                cadastro: resolve(__dirname, "cadastro.html")
            }
        }
    }

});