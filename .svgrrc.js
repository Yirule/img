module.exports =  {
    outDir: "jsx",

    ignoreExisting: true,
    jsxRuntime: "automatic",
    expandProps: "start",
    index: false,
    ext: "jsx",
    template: require("./.svgr_template.js"),

    prettierConfig: {
        semi: false,
    }
}