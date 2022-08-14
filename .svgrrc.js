module.exports =  {
    outDir: "jsx",

    ignoreExisting: true,
    jsxRuntime: "automatic",
    expandProps: "start",
    index: false,
    ext: "jsx",
    template: require("./.svgr_component.tpl.js"),
    indexTemplate: require("./.svgr_index.tpl.js"),

    prettierConfig: {
        semi: false,
    }
}