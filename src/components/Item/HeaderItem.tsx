import React from 'react'

interface HeaderItemProps {
  className?: string
  color?: string
  size?: number
}

export const HeaderItem: React.FC<HeaderItemProps> = ({
  className = '',
  color = '#2c2523',
  size = 120,
}) => {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 120 150"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(60, 75) scale(0.85)">
          {/* Top decorative loop */}
          <path
            d="M 0 -70 C -15 -70, -25 -55, 0 -45 C 25 -55, 15 -70, 0 -70 Z"
            stroke={color}
            strokeWidth="1"
          />
          <circle cx="0" cy="-57" r="1.5" fill={color} />

          {/* Left side vines and swirls */}
          <path
            d="M -5 -45 C -35 -40, -45 -20, -45 5 C -45 30, -25 55, 0 65"
            stroke={color}
            strokeWidth="1.2"
          />
          <path
            d="M -20 -42 C -40 -30, -50 -10, -35 15"
            stroke={color}
            strokeWidth="0.8"
            strokeDasharray="1,1"
          />
          <path
            d="M -45 5 C -55 10, -50 25, -35 25 C -20 25, -30 45, -5 58"
            stroke={color}
            strokeWidth="0.9"
          />

          {/* Right side vines and swirls */}
          <path
            d="M 5 -45 C 35 -40, 45 -20, 45 5 C 45 30, 25 55, 0 65"
            stroke={color}
            strokeWidth="1.2"
          />
          <path
            d="M 20 -42 C 40 -30, 50 -10, 35 15"
            stroke={color}
            strokeWidth="0.8"
            strokeDasharray="1,1"
          />
          <path
            d="M 45 5 C 55 10, 50 25, 35 25 C 20 25, 30 45, 5 58"
            stroke={color}
            strokeWidth="0.9"
          />

          {/* Small leaf accents */}
          <path d="M -35 -15 C -38 -20, -32 -25, -30 -20 Z" fill={color} />
          <path d="M 35 -15 C 38 -20, 32 -25, 30 -20 Z" fill={color} />
          <path d="M -25 35 C -30 40, -22 42, -20 38 Z" fill={color} />
          <path d="M 25 35 C 30 40, 22 42, 20 38 Z" fill={color} />

          {/* Monogram Letters and Middle Bar */}
          <text
            x="0"
            y="-12"
            fontFamily="'Playfair Display', serif"
            fontSize="34"
            fontWeight="400"
            textAnchor="middle"
            fill={color}
          >
            O
          </text>
          <line
            x1="-24"
            y1="-2"
            x2="24"
            y2="-2"
            stroke={color}
            strokeWidth="1.2"
          />
          <text
            x="0"
            y="32"
            fontFamily="'Playfair Display', serif"
            fontSize="34"
            fontWeight="400"
            textAnchor="middle"
            fill={color}
          >
            N
          </text>
        </g>
      </svg>
    </div>
  )
}
