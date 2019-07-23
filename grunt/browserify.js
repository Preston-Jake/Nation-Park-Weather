module.exports = {
  options: {
    transform: [
      [
        "babelify",
        {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  node: "current"
                }
              }
            ]
          ]
        }
      ]
    ],
    browserifyOptions: {
      debug: true
    }
  },
  app: {
    src: ["src/scripts/main.js"],
    dest: "src/bundle.js"
  }
};
