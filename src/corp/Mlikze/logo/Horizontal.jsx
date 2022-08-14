import Mark from "./Mark.jsx"
import Type from "./Type.jsx"

export default (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266 80">
    <Mark width={80} height={80} />
    <Type x={96} y={22} width={168} height={36} />
  </svg>
)
