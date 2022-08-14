import Mark from "./Mark.jsx"
import Type from "./Type.jsx"

export default (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168 128">
    <Mark x={44} width={80} height={80} />
    <Type y={92} width={168} height={36} />
  </svg>
)
