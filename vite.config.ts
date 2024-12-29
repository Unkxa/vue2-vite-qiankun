import vueJsx from '@vitejs/plugin-vue2-jsx'
import vue from '@vitejs/plugin-vue2'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import qiankun from 'vite-plugin-qiankun';

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'


export default {
    plugins: [
        qiankun('validator',{useDevMode : true}),
        viteCommonjs(), //兼容commonjs
        vueJsx({
            // options are passed on to @vue/babel-preset-jsx
        }),
        vue({
            // template: {
            //   compilerOptions: {
            //     // ...
            //   },
            //   transformAssetUrls: {
            //     // ...
            //   }
            // }
        }),
        cssInjectedByJsPlugin(),
    ],
    base: 'http://localhost:9901',
    resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      },
    server: {
        origin: 'http://localhost:9901', //配置跨域
        host: "0.0.0.0",
        port: 9901, //这里的端口是必须和父应用配置的子应用端口一致
        headers: {
            //因为qiankun内部请求都是fetch来请求资源，所以子应用必须允许跨域
            'Access-Control-Allow-Origin': '*'
        },
        overlay: {
            warning: false,
            errors: false
        }
    },
    configureWebpack: {
        output: {
            library: `vue2`,
            libraryTarget: 'umd', // 把微应用打包成 umd 库格式
            // jsonpFunction: `webpackJsonp_${name}`, // webpack 5 需要把 jsonpFunction 替换成 chunkLoadingGlobal
        },
    },
}