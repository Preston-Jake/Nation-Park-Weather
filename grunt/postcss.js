module.exports = {
  options: {
    map: true,
    processors: [
      require("postcss-import")(),
      require("postcss-mixins")(),
      require("postcss-simple-vars")(),
      require("postcss-nested")(),
      require("postcss-preset-env")(),
      require("pixrem")(),
      require("autoprefixer")({ browsers: "last 2 versions" })
    ]
  },
  dist: {
    src: "src/styles/styles.css",
    dest: "src/styles.css"
  }
};
