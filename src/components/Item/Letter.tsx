import React, { useState } from 'react'

interface LetterProps {
  onNext?: () => void
  isOpen?: boolean
}

export const Letter: React.FC<LetterProps> = ({
  onNext,
  isOpen: initialOpen = true,
}) => {
  const [isOpen, setIsOpen] = useState(initialOpen)

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-lg md:max-w-xl lg:max-w-2xl select-none">
      {/* Letter Container */}
      <div
        onClick={() => setIsOpen(true)}
        className={`relative w-full bg-bg-light border border-secondary rounded-2xl shadow-md transition-all duration-700 cursor-pointer overflow-hidden
          ${isOpen ? 'p-5 md:p-12 h-auto max-h-[480px] md:max-h-[700px] scale-100 opacity-100' : 'p-6 h-[120px] max-w-[360px] flex items-center justify-center hover:scale-105 hover:shadow-lg'}
        `}
      >
        {!isOpen ? (
          <div className="text-center animate-pulse">
            <span className="text-3xl mb-2 block">✉️</span>
            <p className="text-xs uppercase tracking-[0.2em] text-primary/70 font-semibold">
              Chạm để mở thư tay
            </p>
          </div>
        ) : (
          <div className="flex flex-col animate-fade-in">
            {/* Stamp / Decorative Top */}
            <div className="flex justify-between items-center border-b border-secondary pb-3 mb-4 md:pb-4 md:mb-6">
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                TY YÊU CỦA MÌNH
              </span>
            </div>

            {/* Content */}
            <div className="font-['Montserrat'] font-light text-[13px] md:text-sm text-accent-text leading-relaxed mb-4 md:mb-8 text-justify whitespace-pre-line">
              {`Gửi Ty iu,

Mới đó mà chúng ta đã đi cùng nhau được 2 tháng rồi. Khoảng thời gian không quá dài, nhưng đủ để mình cảm nhận được sự ấm áp, sự quan tâm và tình yêu mà bạn dành cho mình. 

Cảm ơn em vì đã luôn kiên nhẫn, luôn lắng nghe và làm cho mỗi ngày trôi qua đều tràn ngập niềm vui.`}
            </div>

            {/* Signature */}
            <div className="text-right font-['Dancing_Script'] text-2xl text-primary border-t border-secondary pt-3 md:pt-4">
              Hồng Sơn
            </div>
          </div>
        )}
      </div>

      {/* Underneath Next Button */}
      {isOpen && (
        <button
          onClick={onNext}
          className="mt-4 md:mt-8 px-6 md:px-8 py-2 md:py-3 bg-primary text-white rounded-full text-xs md:text-sm font-medium hover:opacity-90 transition-all duration-300 shadow-sm cursor-pointer hover:shadow animate-fade-in"
        >
          Tiếp theo →
        </button>
      )}
    </div>
  )
}
