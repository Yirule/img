import { pathParse, serializePath } from "https://esm.sh/svg-path-parse@1.1.3"

export default ({
    x = 0,
    y = 0,
    d = "",
    ...props
}) => {
    const path = pathParse(d).relCairo()
    path.segments[0].args[0] += x
    path.segments[0].args[1] += y
    return <path {...props} d={serializePath(path)} />
}
