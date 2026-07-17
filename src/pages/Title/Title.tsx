import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Envelope } from '../../components/Item/Envelope'
import { Letter } from '../../components/Item/Letter'
import heroBg from '../../assets/hero.webp'

const Title = () => {
  const navigate = useNavigate()
  const [isOpened, setIsOpened] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setIsReady(true)
  }, [])

  return (
    <div
      className={`fixed inset-0 w-full h-dvh z-50 flex flex-col justify-center items-center py-6 md:py-12 px-6 bg-cover bg-center select-none text-white overflow-hidden transition-all duration-1000 ease-out transform ${
        isReady ? 'opacity-100 scale-100' : 'opacity-0 scale-102'
      }`}
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Background overlay for better contrast */}
      <div className="absolute inset-0 bg-black/15 pointer-events-none z-0" />

      {/* Click outside backdrop to close the letter */}
      {isOpened && (
        <div
          className="absolute inset-0 z-10 cursor-pointer"
          onClick={() => setIsOpened(false)}
        />
      )}

      {/* Top Header Section */}
      <div
        className={`z-10 text-center mb-4 md:mb-8 transition-all duration-700 ease-in-out
          ${isOpened ? 'opacity-0 -translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'}
        `}
        style={{ animationFillMode: 'forwards' }}
      >
        {/* You are invited - script font */}
        <p className="text-[24px] md:text-[38px] font-normal font-['Dancing_Script'] tracking-wide text-white/90">
          You are invited
        </p>

        {/* Names - script font */}
        <p className="text-[32px] md:text-[56px] font-normal tracking-wider font-['Playfair_Display'] text-white! leading-tight mt-1! mb-0!">
          Hồng Sơn <span className="font-light italic">&</span> Thanh Tuyền
        </p>
      </div>

      {/* Center Interactive Container */}
      <div className="relative w-full flex justify-center items-center my-4 md:my-8 min-h-[340px] z-20">
        {/* Envelope wrapper */}
        <div
          className={`absolute transition-all duration-700 ease-in-out transform opacity-0 animate-fade-in-scale
            ${isOpened ? 'opacity-0 scale-75 translate-y-[-100px] pointer-events-none rotate-12' : 'opacity-100 scale-100 translate-y-0 rotate-0'}
          `}
          style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
          onClick={(e) => e.stopPropagation()}
        >
          <Envelope onClick={() => setIsOpened(true)} />
        </div>

        {/* Letter wrapper */}
        <div
          className={`absolute w-full flex justify-center transition-all duration-700 ease-in-out transform
            ${isOpened ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-90 translate-y-[100px] pointer-events-none'}
          `}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the letter itself
        >
          <Letter onNext={() => navigate('/card')} isOpen={true} />
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div
        className={`z-10 text-center mb-4 opacity-0 animate-fade-in transition-all duration-700 ease-in-out
          ${isOpened ? 'opacity-0 translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'}
        `}
        style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}
      >
        {/* CLICK ENVELOPE TO OPEN - Montserrat font */}
        <p className="text-[10px] md:text-[12px] tracking-[0.25em] font-medium font-['Montserrat'] text-white/80">
          CHẠM ĐỂ MỞ
        </p>
      </div>
    </div>
  )
}

export default Title
