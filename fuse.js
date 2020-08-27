const { FuseBox, CSSPlugin } = require("fuse-box");

const fuse = FuseBox.init({
  homeDir: "src",
  target: "browser@es5",
  output: "dist/fuse.js",
  plugins: [CSSPlugin()],
});

fuse
  .bundle("fuse.js")
  .instructions("> index.js");

fuse.run();