const withCss = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withPlugins = require("next-compose-plugins")
const withSassResources = require("sass-resources-loader")

if(typeof require !== 'undefined'){
    require.extensions['.css']=file=>{}
}

module.exports = withPlugins([withSass,withCss,withSassResources],{
    webpack:(config) => {
        return config
    }
})
