const keysTransformer = require('ts-transformer-keys/transformer').default;
module.exports = {
    pluginOptions: {
        apollo: {
            lintGQL: true
        }
    },
    configureWebpack: {
        devtool: 'source-map'
      },
    runtimeCompiler: true,
    chainWebpack: (config) => {
        const svgRule = config.module.rule('svg')

        svgRule.uses.clear()

        svgRule
            .use('vue-svg-loader')
            .loader('vue-svg-loader')
    },
    
}
