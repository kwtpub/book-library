import css from "rollup-plugin-import-css"
import nodeResolve from "@rollup/plugin-node-resolve"
import copy from "rollup-plugin-copy"

export default {
  input: "src/app.js",
  output: {
    dir: "dist",
    format: "iife"
  },
  plugins: [
    css({output: 'bundle.css'}), 
    nodeResolve(),
    copy({
      targets: [
        { src: 'index.html', dest: 'dist' },
        { src: 'static/**/*', dest: 'dist/static' },
        { src: 'public/**/*', dest: 'dist' }
      ]
    })
  ]
}
