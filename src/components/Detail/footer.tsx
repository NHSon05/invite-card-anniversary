import React from 'react'
import { useNavigate } from 'react-router-dom'
import img1 from '../../assets/IMG_6645 2.JPG'
import img2 from '../../assets/IMG_4874 2.JPG'
import img3 from '../../assets/IMG_6640.JPG'

interface FooterProps {
  onScrollToTop: () => void
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  const navigate = useNavigate()

  return (
    <footer className="w-full bg-primary text-white py-16 px-6 flex flex-col items-center select-none">
      {/* 3 Photos row */}
      <div className="grid grid-cols-3 gap-4 max-w-4xl w-full mb-12">
        <div className="aspect-3/4 overflow-hidden rounded-lg bg-black/10 shadow-md">
          <img
            src={img1}
            alt="Memory 1"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="aspect-3/4 overflow-hidden rounded-lg bg-black/10 shadow-md">
          <img
            src={img2}
            alt="Memory 2"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="aspect-3/4 overflow-hidden rounded-lg bg-black/10 shadow-md">
          <img
            src={img3}
            alt="Memory 3"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Message */}
      <p className="text-center font-['Montserrat'] font-light text-sm md:text-base text-white/80 leading-relaxed tracking-wider max-w-[45ch] mb-8">
        Và đó là hành trình của tụi mình
      </p>

      {/* Signatures */}
      <div className="font-['Dancing_Script'] text-4xl text-white/95 mb-10">
        Hồng Sơn & Thanh Tuyền
      </div>

      {/* Navigation Actions */}
      <div className="flex flex-col items-center gap-4 text-xs font-['Montserrat'] tracking-[0.2em] uppercase text-white/60">
        <button
          onClick={onScrollToTop}
          className="hover:text-white transition-colors cursor-pointer"
        >
          ↑ Quay lại
        </button>
        <button
          onClick={() => navigate('/')}
          className="hover:text-white transition-colors cursor-pointer text-[10px] opacity-75"
        >
          Quay về trang chủ
        </button>
      </div>
    </footer>
  )
}
