import React, { useState } from 'react'
import { Envelope } from '../Item/Envelope'
import { Invitation } from '../Item/Invitation'

export const Section2: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false)
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle')

  const handleAccept = async () => {
    setStatus('sending')

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/snguyenhong8@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            _subject: 'Phản hồi về lời mời hẹn hò',
            message: 'Em đồng ý đi Hội An cùng anh! ❤️',
          }),
        }
      )

      if (response.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Failed to send email:', error)
      setStatus('error')
    }
  }

  return (
    <section
      className="w-full min-h-dvh flex flex-col items-center justify-center bg-primary py-20 px-6 relative overflow-hidden select-none"
      onClick={() => {
        if (isOpened && status === 'idle') setIsOpened(false)
      }}
    >
      {/* Interactive Container */}
      <div className="relative w-full flex justify-center items-center my-auto min-h-[380px] z-20">
        {/* Envelope Wrapper */}
        <div
          className={`absolute transition-all duration-700 ease-in-out transform
            ${isOpened ? 'opacity-0 scale-75 translate-y-[-100px] pointer-events-none rotate-12' : 'opacity-100 scale-100 translate-y-0 rotate-0'}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          <Envelope onClick={() => setIsOpened(true)} />
        </div>

        {/* Invitation Card / Success Screen Wrapper */}
        <div
          className={`absolute w-full flex justify-center transition-all duration-700 ease-in-out transform
            ${isOpened ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-90 translate-y-[100px] pointer-events-none'}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          {status === 'idle' && <Invitation onAccept={handleAccept} />}

          {status === 'sending' && (
            <div className="w-full max-w-lg bg-bg-light border border-secondary rounded-3xl p-8 md:p-12 shadow-md text-center animate-fade-in flex flex-col items-center justify-center min-h-[300px]">
              <div className="w-12 h-12 rounded-full border-4 border-primary/20 border-t-primary animate-spin mb-6" />
              <p className="text-sm tracking-wider font-['Montserrat'] text-primary font-medium">
                Đang gửi lời phản hồi cho anh...
              </p>
            </div>
          )}

          {status === 'success' && (
            <div className="w-full max-w-lg bg-bg-light border border-secondary rounded-3xl p-8 md:p-12 shadow-md text-center animate-fade-in flex flex-col items-center justify-center min-h-[340px]">
              <div className="w-16 h-16 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-primary text-2xl mb-6 animate-pulse">
                ❤️
              </div>
              <h2 className="text-3xl font-light text-primary mb-4 font-['Playfair_Display'] tracking-wide">
                Gửi Thành Công!
              </h2>
              <p className="font-['Montserrat'] font-light text-base text-accent-text/80 leading-relaxed max-w-[32ch] mx-auto mb-8 text-center">
                Yayy! Lời đồng ý đi Hội An của em đã được gửi đến anh. Hẹn gặp
                em ở Hội An nhé!
              </p>
              <button
                onClick={() => {
                  const title = encodeURIComponent(
                    'Đi Hội An cùng ngiu. Kỷ niệm 2 tháng iu nhauuu'
                  )
                  const location = encodeURIComponent(
                    'Hội An, Đà Nẵng, Việt Nam'
                  )
                  const dates = '20260718T080000/20260718T190000'
                  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&location=${location}`
                  window.open(url, '_blank')
                }}
                className="px-6 py-2.5 bg-primary text-white rounded-full text-xs font-medium uppercase tracking-widest font-['Montserrat'] hover:opacity-90 transition-all duration-300 cursor-pointer"
              >
                Thêm lịch trình
              </button>
            </div>
          )}

          {status === 'error' && (
            <div className="w-full max-w-lg bg-bg-light border border-secondary rounded-3xl p-8 md:p-12 shadow-md text-center animate-fade-in flex flex-col items-center min-h-[300px]">
              <span className="text-xs uppercase tracking-[0.2em] text-red-500 font-semibold mb-4 block">
                Error
              </span>
              <h2 className="text-2xl font-light text-red-500 mb-6 font-serif">
                Có lỗi xảy ra
              </h2>
              <p className="text-base text-accent-text/85 leading-relaxed mb-8 font-light">
                Gửi phản hồi thất bại. Bạn có muốn thử lại không?
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="px-6 py-2.5 bg-primary text-white rounded-full text-xs font-medium hover:opacity-90 transition-all cursor-pointer"
              >
                Thử lại
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Decorative details */}
      <div
        className={`mt-12 text-xs tracking-[0.15em] text-white/50 uppercase font-light z-10 transition-all duration-700
          ${isOpened ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}
        `}
      >
        ❤️ Click vào đi có secret đó ❤️
      </div>
    </section>
  )
}
