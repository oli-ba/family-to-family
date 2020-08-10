import plugin_gridsome_plugin_tailwindcss_5 from "/Users/olivierbalaguer/_dev/gridsome-family-family/node_modules/gridsome-plugin-tailwindcss/gridsome.client.js"
import plugin_gridsome_vue_remark_8 from "/Users/olivierbalaguer/_dev/gridsome-family-family/node_modules/@gridsome/vue-remark/gridsome.client.js"
import plugin_project_10 from "/Users/olivierbalaguer/_dev/gridsome-family-family/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_tailwindcss_5,
    options: {"shouldPurge":true,"shouldImport":true,"shouldTimeTravel":true,"importUrlConfig":{"modernBrowser":true},"presetEnvConfig":{"stage":0,"autoprefixer":false,"features":{"focus-visible-pseudo-class":false,"focus-within-pseudo-class":false}},"purgeConfig":{"keyframes":true,"content":["./src/**/*.vue","./src/**/*.js","./src/**/*.jsx","./src/**/*.ts","./src/**/*.tsx","./src/**/*.html","./src/**/*.pug","./src/**/*.md","./src/**/*.svg"],"whitelist":["body","html","img","a","g-image","g-image--lazy","g-image--loaded","active","active--exact"],"whitelistPatterns":[{},{},{},{},{},{},{},{},{},{}]}}
  },
  {
    run: plugin_gridsome_vue_remark_8,
    options: {}
  },
  {
    run: plugin_project_10,
    options: {}
  }
]
