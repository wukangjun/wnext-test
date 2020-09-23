const path = require('path')
const glob = require('glob')
const qs = require('querystring')
const { VueLoaderPlugin } = require('vue-loader')
const WnextPlugin = require('./wnext-plugin')

const outputDir = 'weapp'
const entries = glob.sync('./src/**/*.vue')

const entriesMap = Object.create(null)
entries.forEach(entry => {
  filename = entry
    .replace(/^\.\/src/, '')
    .replace(/\.vue$/, '')
    
  entriesMap[filename] = entry
})

module.exports = {
  mode: 'none',
  
  entry: entriesMap,

  output: {
    path: path.resolve(__dirname, outputDir),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        loader: require.resolve('./wnext-template-loader'),
        resourceQuery: query => {
          const parseed = qs.parse(query.slice(1))
          return parseed.vue != null
        }
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: path.resolve(__dirname, 'wnext-loader.js')
          },
          'vue-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'css-loader'
        ]
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
    new WnextPlugin()
  ]
}