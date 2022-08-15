import { pathParse, serializePath } from "https://esm.sh/svg-path-parse@1.1.3"
import Path from "$/Path.jsx"

export default ({
  d = "",
  degree = 0,
  ...props
}) => {
  const data = pathParse(d).absCairo()

  data.segments = data.segments.map(({type, args}) => {
    if (type == "C") {
      const [x1, y1, x2, y2, x, y] = args
      return {
        type,
        args: [
          x1 * (degree + 1),
          y1 * (degree + 1),
          x2 * (degree + 1),
          y2 * (degree + 1),
          x * (-degree + 1),
          y * (-degree + 1),
        ],
      }
    }
    if (type == "M") {
      const [x, y] = args
      return {
        type,
        args: [
          x * (-degree + 1),
          y * (-degree + 1),
        ],
      }
    }
  });
  return <Path {...props} d={serializePath(data)} />
}
