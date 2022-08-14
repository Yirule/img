const path = require("path")

function indexTemplate(filePaths) {
    const exportEntries = filePaths.map((filePath) => {
        const extname = path.extname(filePath)
        const basename = path.basename(filePath, extname)
        const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename
        return `export { default as ${exportName} } from "./${basename}${extname}"`
    })
    return exportEntries.join("\n")
}

module.exports = indexTemplate
