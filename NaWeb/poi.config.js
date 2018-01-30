const entry = {
  index: 'src/module/index/index.js',
  about: 'src/module/about/about.js',
  admiral: 'src/module/admiral/admiral.js',
}

const useEntry = nameToUse => {
  return Object.keys(entry).filter(name => name !== nameToUse)
}

module.exports = {
  entry,
  templateCompiler: true,
  sourceMap: true,
  html: [
    {
      filename: 'index.html',
      template: 'src/module/index/index.html',
      excludeChunks: useEntry('index')
    },
    {
      filename: 'about.html',
      template: 'src/module/about/about.html',
      excludeChunks: useEntry('about')
    },
    {
      filename: 'admiral.html',
      template: 'src/module/admiral/admiral.html',
      excludeChunks: useEntry('admiral')
    },
  ]
}
