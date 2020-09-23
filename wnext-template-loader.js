const qs = require('querystring')
const path = require('path')
const compiler = require('vue-template-compiler')
const traverse = require('@babel/traverse')

module.exports = function(source) {
  const {
    rootContext,
    resourcePath,
    resourceQuery
  } = this

  const query = qs.parse(resourceQuery.slice(1))
  const sourceRoot = path.relative(rootContext, resourcePath)
  const pathInsourceRoot = sourceRoot.replace(/^src/, '').replace(/\.vue$/, '.wxml')
  // console.log(path.dirname(path.relative(rootContext, resourcePath)))
  
  if (query.type === 'template') {
    const {ast} = compiler.compile(source)
    console.log(ast)
    traverse(ast, {
      
    })
    //this.emitFile(pathInsourceRoot, source)
  }

  return source
}