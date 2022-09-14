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

    Array(n).fill().map((_, i) =>
        path.segments.push({
            type: "C",
            args: [
                Math.cos((360 / n * i) * rad) * r,
                Math.sin((360 / n * i) * rad) * r,
            ]
        })
    )
    console.log(pathParse("M0 0").getSegments())
    console.log(path)
    return <Path {...props} d={serializePath(path)} />
}
