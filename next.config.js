const withCss = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withPlugins = require("next-compose-plugins")

if(typeof require !== 'undefined'){
    require.extensions['.css']=file=>{}
}

module.exports = withPlugins([withSass,withCss],{
    webpack:(config) => {
        return config
    }
})
