interface MoleIconProps {
  className?: string
  size?: number
}

export function MoleIcon({ className = "", size = 64 }: MoleIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Base della Mole */}
      <rect x="18" y="60" width="28" height="20" fill="currentColor" opacity="0.8" />
      
      {/* Corpo principale */}
      <rect x="20" y="40" width="24" height="20" fill="currentColor" opacity="0.85" />
      
      {/* Parte superiore */}
      <polygon points="22,40 42,40 38,25 26,25" fill="currentColor" opacity="0.9" />
      
      {/* Cupola */}
      <ellipse cx="32" cy="25" rx="8" ry="10" fill="currentColor" opacity="0.95" />
      
      {/* Guglia/Pinnacolo */}
      <polygon points="30,15 34,15 32,0" fill="currentColor" />
      <circle cx="32" cy="2" r="2" fill="currentColor" />
    </svg>
  )
}

