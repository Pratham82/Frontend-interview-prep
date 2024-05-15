const Loader = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    display="block"
    width="50"
    height="50"
  >
    <circle
      cx="50"
      cy="50"
      r="35"
      fill="none"
      stroke="#007bff"
      strokeWidth="10"
    >
      <animate
        attributeName="stroke-dashoffset"
        dur="2s"
        repeatCount="indefinite"
        from="0"
        to="502"
      />
      <animate
        attributeName="stroke-dasharray"
        dur="2s"
        repeatCount="indefinite"
        values="150.6 100.4;1 250;150.6 100.4"
      />
    </circle>
  </svg>
)

export default Loader
