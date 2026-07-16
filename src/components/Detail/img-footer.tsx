import React from 'react'
import flowerImg from '../../assets/flower-footer.jpg'

export const ImgFooter: React.FC = () => {
  return (
    <div className="w-full h-[300px] md:h-[450px] overflow-hidden relative select-none border-b border-primary/5">
      <img
        src={flowerImg}
        alt="Decorative divider"
        className="w-full h-full object-cover"
      />
      {/* Subtle overlay to create cinematic atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
    </div>
  )
}
