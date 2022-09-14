import { pathParse, serializePath } from "https://esm.sh/svg-path-parse@1.1.3"
import Path from "$/Path.jsx"

export default ({
    n = 3,
    r = 100,
    ...props
}) => {
    const path = { 
        err: "",
        type: 1,
        segments: [
        { type: "M", args: [0, 0] }
    ] }

    const rad = Math.PI / 180

    const points = []
    Array(n).fill().map((_, i) =>
        points.push(
            Math.cos((360 / n * i) * rad) * r,
            Math.sin((360 / n * i) * rad) * r,
        )
    )
    path.segments.push({
        type: "M",
        args: points
    })
    return <Path {...props} d={serializePath(path)} />
}
