import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HeaderItem } from '../Item/HeaderItem'
import heroBg from '../../assets/hero.webp'

interface HeroProps {
  onScrollToNext: () => void
}

export const Hero: React.FC<HeroProps> = ({ onScrollToNext }) => {
  const navigate = useNavigate()

  return (
    <section
      className="relative w-full h-dvh flex flex-col justify-between items-center py-16 px-6 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Background overlay for readability */}
      <div className="absolute inset-0 bg-black/15 pointer-events-none" />

      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-8 left-8 z-20 text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
      >
        ← Quay lại
      </button>

      {/* Top Crest / Monogram */}
      <div className="z-10 mt-4">
        <HeaderItem size={100} color="white" />
      </div>

      {/* Center Title Info */}
      <div className="z-10 text-center my-auto">
        <p className="text-[26px] md:text-[34px] font-normal font-['Dancing_Script'] tracking-wide text-white mb-2">
          Lễ kỷ niệm của
        </p>
        <p className="text-[34px] md:text-[54px] lg:text-[64px] font-normal tracking-[0.15em] font-['Playfair_Display'] text-white uppercase leading-tight mb-4">
          HỒNG SƠN
          <span className="block text-[34px] md:text-[36px] font-light italic my-2">
            &
          </span>
          THANH TUYỀN
        </p>
      </div>

      {/* Bottom Date / Location & Scroll Indicator */}
      <div className="z-10 text-center flex flex-col items-center gap-6">
        <p className="text-[10px] md:text-[12px] tracking-[0.25em] font-medium font-['Montserrat'] text-white/80 uppercase">
          17 THÁNG 5 NĂM 2026 | ĐÀ NẴNG, VIỆT NAM
        </p>

        {/* Scroll Down Button */}
        <button
          onClick={onScrollToNext}
          className="animate-bounce w-8 h-8 rounded-full border border-white/30 flex items-center justify-center bg-black/10 hover:bg-black/20 hover:border-white/60 transition-all cursor-pointer"
        >
          ↓
        </button>
      </div>
    </section>
  )
}
