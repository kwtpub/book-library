
import css from 'rollup-plugin-css-only';
import nodeResolve from '@rollup/plugin-node-resolve';
import html from '@rollup/plugin-html';

export default {
  input: 'src/app.js',
  output: {
    dir: 'dist',
    format: 'iife',
    assetFileNames: '[name]-[hash][extname]', // Хэши в именах файлов CSS/JS
    entryFileNames: '[name]-[hash].js',
  },
  plugins: [
    css({ output: 'bundle.css' }), // Или просто css()
    nodeResolve(),
    html() // Автоматически вставит правильные ссылки на ваши CSS и JS с хэшами
  ]
};

