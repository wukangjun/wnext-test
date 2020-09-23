

module.exports = class WnextPlugin {
  apply(compiler) {
    /**
     * 一个新的编译(compilation)创建之后，钩入(hook into) compiler。
     */

    // compiler.hooks.compilation.tap('WnextPlugin', compilation => {
    //   compilation.hooks.optimizeChunkAssets.tapAsync('WnextPlugin', (chunks, callback) => {
        
    //     Object.keys(compilation.assets).forEach(filename => {
    //       const source = Reflect.get(compilation.assets, filename)
    //       console.log(source.source())
    //     })
    //     callback()
    //   })
    // })

    compiler.hooks.compilation.tap('WnextPlugin', compilation => {   
      compilation.hooks.succeedModule.tap('WnextPlugin', module => {
        
        // Object.keys(compilation.assets).forEach(filename => {
        //   const source = Reflect.get(compilation.assets, filename)
        //   console.log(source.source())
        // })
      })
    })

    // compiler.hooks.compilation.tap('WnextPlugin', compilation => {
    //   compilation.hooks.beforeModuleAssets.tap('WnextPlugin', (m, f) => {
    //     compilation.modules.forEach(module => {
    //       console.log(module.buildInfo)
    //     })
    //   })
    // })
  }
}