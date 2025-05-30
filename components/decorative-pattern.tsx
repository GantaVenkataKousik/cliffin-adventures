interface DecorativePatternProps {
  className?: string
  pattern?: "dots" | "lines" | "mountains"
  color?: string
}

export default function DecorativePattern({
  className = "",
  pattern = "dots",
  color = "currentColor",
}: DecorativePatternProps) {
  const getPattern = () => {
    switch (pattern) {
      case "dots":
        return (
          <pattern id="dots-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1.5" fill={color} />
          </pattern>
        )
      case "lines":
        return (
          <pattern
            id="lines-pattern"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line x1="0" y1="0" x2="0" y2="10" stroke={color} strokeWidth="1" />
          </pattern>
        )
      case "mountains":
        return (
          <pattern id="mountains-pattern" x="0" y="0" width="100" height="50" patternUnits="userSpaceOnUse">
            <path d="M0 50 L25 20 L50 35 L75 15 L100 50" fill="none" stroke={color} strokeWidth="1" />
          </pattern>
        )
      default:
        return (
          <pattern id="dots-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1.5" fill={color} />
          </pattern>
        )
    }
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>{getPattern()}</defs>
        <rect width="100%" height="100%" fill={`url(#${pattern}-pattern)`} opacity="0.1" />
      </svg>
    </div>
  )
}
