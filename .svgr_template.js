module.exports = (
    { imports, interfaces, _componentName, props, jsx, _exports },
    { tpl },
) => {
    return tpl`
${imports}

${interfaces}

export default (${props}) => (
  ${jsx}
)
`;
};
