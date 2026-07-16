import React from 'react'

interface EnvelopeProps {
  onClick?: () => void
}

export const Envelope: React.FC<EnvelopeProps> = ({ onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="relative w-[340px] h-[224px] md:w-[460px] md:h-[304px] cursor-pointer transition-all duration-500 hover:scale-[1.03] active:scale-[0.98] select-none group"
    >
      {/* Outer shadow glow */}
      <div className="absolute inset-0 bg-black/10 rounded-[6px] blur-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* 3D Envelope Paper Layer */}
      <div className="relative w-full h-full bg-[#f6f4ed] rounded-[6px] shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)] overflow-hidden border border-[#e8e5db]">
        <svg viewBox="0 0 500 330" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Inside/Back lining (darker shadow/contrast) */}
          <rect x="0" y="0" width="500" height="330" fill="#f4f1e7" />
          
          {/* Bottom flap */}
          <path 
            d="M 0 330 L 250 180 L 500 330 Z" 
            fill="#faf8f2" 
            stroke="#e2dfd3" 
            strokeWidth="1" 
          />
          
          {/* Left flap */}
          <path 
            d="M 0 0 L 220 165 L 0 330 Z" 
            fill="#f7f5ee" 
            stroke="#e2dfd3" 
            strokeWidth="1" 
          />
          
          {/* Right flap */}
          <path 
            d="M 500 0 L 280 165 L 500 330 Z" 
            fill="#f7f5ee" 
            stroke="#e2dfd3" 
            strokeWidth="1" 
          />
          
          {/* Top flap (pointing down with rounded tip at center) */}
          <path 
            d="M 0 0 L 250 215 L 500 0 Z" 
            fill="#fcfbf7" 
            stroke="#dbd7c9" 
            strokeWidth="1.5" 
            className="filter drop-shadow-[0_4px_3px_rgba(0,0,0,0.06)]"
          />

          {/* Detailed Ornate Crest / Monogram (O/N) */}
          <g transform="translate(250, 125) scale(0.72)">
            {/* Elegant Floral & Leaf Crest Frame */}
            {/* Top decorative loop */}
            <path d="M 0 -70 C -15 -70, -25 -55, 0 -45 C 25 -55, 15 -70, 0 -70 Z" fill="none" stroke="#2c2523" strokeWidth="1" />
            <circle cx="0" cy="-57" r="1.5" fill="#2c2523" />

            {/* Left side vines and swirls */}
            <path d="M -5 -45 C -35 -40, -45 -20, -45 5 C -45 30, -25 55, 0 65" fill="none" stroke="#2c2523" strokeWidth="1.2" />
            <path d="M -20 -42 C -40 -30, -50 -10, -35 15" fill="none" stroke="#2c2523" strokeWidth="0.8" strokeDasharray="1,1" />
            <path d="M -45 5 C -55 10, -50 25, -35 25 C -20 25, -30 45, -5 58" fill="none" stroke="#2c2523" strokeWidth="0.9" />
            
            {/* Right side vines and swirls */}
            <path d="M 5 -45 C 35 -40, 45 -20, 45 5 C 45 30, 25 55, 0 65" fill="none" stroke="#2c2523" strokeWidth="1.2" />
            <path d="M 20 -42 C 40 -30, 50 -10, 35 15" fill="none" stroke="#2c2523" strokeWidth="0.8" strokeDasharray="1,1" />
            <path d="M 45 5 C 55 10, 50 25, 35 25 C 20 25, 30 45, 5 58" fill="none" stroke="#2c2523" strokeWidth="0.9" />

            {/* Small leaf accents */}
            <path d="M -35 -15 C -38 -20, -32 -25, -30 -20 Z" fill="#2c2523" />
            <path d="M 35 -15 C 38 -20, 32 -25, 30 -20 Z" fill="#2c2523" />
            <path d="M -25 35 C -30 40, -22 42, -20 38 Z" fill="#2c2523" />
            <path d="M 25 35 C 30 40, 22 42, 20 38 Z" fill="#2c2523" />

            {/* Monogram Letters and Middle Bar */}
            <text 
              x="0" 
              y="-12" 
              fontFamily="'Playfair Display', serif" 
              fontSize="34" 
              fontWeight="400"
              textAnchor="middle" 
              fill="#2c2523"
            >
              O
            </text>
            <line x1="-24" y1="-2" x2="24" y2="-2" stroke="#2c2523" strokeWidth="1.2" />
            <text 
              x="0" 
              y="32" 
              fontFamily="'Playfair Display', serif" 
              fontSize="34" 
              fontWeight="400"
              textAnchor="middle" 
              fill="#2c2523"
            >
              N
            </text>
          </g>
        </svg>
      </div>
    </div>
  )
}
