import React from 'react'

interface InvitationProps {
  onAccept: () => void
}

export const Invitation: React.FC<InvitationProps> = ({ onAccept }) => {
  return (
    <div className="w-full max-w-lg bg-bg-light border border-secondary rounded-3xl p-8 md:p-12 shadow-md text-center animate-fade-in relative z-10 select-none">
      <h2 className="text-3xl font-light text-primary mb-6 font-serif">
        Lời Mời Hẹn Hò
      </h2>
      <p className="text-base font-['Montserrat'] font-light text-accent-text/90 leading-relaxed mb-8 text-justify whitespace-pre-line">
        {`Để kỷ niệm 2 tháng yêu nhau, chúng mình có thể đi Hội An chứ? Anh muốn đi với em, anh muốn mình hiểu nhau hơn sau những chuyện vừa qua. 

Em đồng ý đi cùng anh chứ? Anh rất trân trọng cuộc hẹn lần này.`}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
        <button
          onClick={onAccept}
          className="px-8 py-3 bg-primary text-white rounded-full text-sm font-medium hover:opacity-90 transition-all duration-300 cursor-pointer"
        >
          Dạ &lt;3
        </button>
        <button
          onClick={() => {
            alert('Úi, bấm nhầm nút rồi kìa! Nhấn nút kia đi mà 😉')
          }}
          className="px-8 py-3 bg-transparent border border-secondary text-accent-text/80 rounded-full text-sm font-medium hover:bg-white transition-all duration-300 cursor-pointer"
        >
          Để xem đã...
        </button>
      </div>
    </div>
  )
}
