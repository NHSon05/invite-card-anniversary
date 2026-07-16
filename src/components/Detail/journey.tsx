import React, { useEffect, useRef, useState } from 'react'

// Image imports
import h1_1 from '../../assets/IMG_4874 2.JPG'
import h1_2 from '../../assets/IMG_4876.jpg'
import h1_3 from '../../assets/IMG_4881.JPG'

import h2_1 from '../../assets/IMG_9364.JPG'
import h2_2 from '../../assets/IMG_9365.JPG'
import h2_3 from '../../assets/IMG_9362.jpg'
import h2_4 from '../../assets/att.zSO0goATxomPMPZKKoBNhr408bPzDM6lOgzm3_MgDXc.JPG'

import h3_1 from '../../assets/IMG_2801.PNG'
import h3_2 from '../../assets/IMG_2800.PNG'

import h4_1 from '../../assets/att.dIypcIcD8Jyq3yKm-JKJRIlmkNQ-GXNQ0o6Xnb7z5s0.JPG'
import h4_2 from '../../assets/att.n1BtLi3KhnE-Y_U2u_K0bMeyhL884sspHA2YOKoN9zs.JPG'

import h5_1 from '../../assets/IMG_6639 2.JPG'
import h5_2 from '../../assets/IMG_6645 2.JPG'

interface TimelineItem {
  time: string
  description: string
  images: string[]
}

const timelineData: TimelineItem[] = [
  {
    time: '3/5/2026',
    description: 'Bọn mình chụp hình ở Huế nè',
    images: [h1_1, h1_2, h1_3],
  },
  {
    time: '17/5/2026',
    description: 'Mình tỏ tình thành công Ty iu của mình nè',
    images: [h2_1, h2_2, h2_3, h2_4],
  },
  {
    time: '31/5/2026',
    description: 'Mùa DIFF đầu tiên của tụi mình',
    images: [h3_1, h3_2],
  },
  {
    time: '2/6/2026',
    description: 'Đi chụp photobooth',
    images: [h4_1, h4_2],
  },
  {
    time: '6/7/2026',
    description: 'Em iu của mình bảo vệ ĐÁTN',
    images: [h5_1, h5_2],
  },
]

export const Journey: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!isDesktop) return

    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const scrollHeight = containerRef.current.scrollHeight
      const clientHeight = window.innerHeight

      // Calculate how far the section has scrolled relative to the viewport
      const offsetTop = -rect.top
      const maxScroll = scrollHeight - clientHeight

      if (offsetTop >= 0 && offsetTop <= maxScroll) {
        const progress = offsetTop / maxScroll
        setScrollProgress(progress)
      } else if (offsetTop < 0) {
        setScrollProgress(0)
      } else {
        setScrollProgress(1)
      }
    }

    // Bind scroll listener on the scroll container (parent layout has overflow-y-auto)
    const scrollParent = document.querySelector('.overflow-y-auto')
    if (scrollParent) {
      scrollParent.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (scrollParent) {
        scrollParent.removeEventListener('scroll', handleScroll)
      }
    }
  }, [isDesktop])

  // Horizontal translate value based on progress
  const getTranslateX = () => {
    if (!trackRef.current) return 0
    const trackWidth = trackRef.current.scrollWidth
    const viewportWidth = window.innerWidth
    const maxMove = trackWidth - viewportWidth + 100 // Extra padding
    return scrollProgress * Math.max(0, maxMove)
  }

  return (
    <div
      ref={containerRef}
      className={`w-full relative ${isDesktop ? 'h-[300vh] bg-bg-light' : 'bg-bg-light py-16 px-6'}`}
    >
      {isDesktop ? (
        // Desktop Sticky Horizontal Scroll View
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden z-10">
          <div className="absolute top-16 text-left left-16 z-20">
            <span className="text-xs uppercase tracking-[0.25em] text-primary/60 font-semibold font-['Montserrat'] block mb-2">
              Timeline
            </span>
            <h2 className="text-4xl font-light text-primary font-serif">
              Hành trình của chúng tớ
            </h2>
          </div>

          {/* Timeline Track */}
          <div
            ref={trackRef}
            className="flex items-center gap-24 px-32 transition-transform duration-100 ease-out will-change-transform mt-12"
            style={{ transform: `translateX(-${getTranslateX()}px)` }}
          >
            {timelineData.map((item, index) => (
              <div key={index} className="flex flex-col min-w-[500px] shrink-0">
                {/* Year / Date indicator */}
                <div className="relative border-l border-primary/20 pl-8 pb-4">
                  <div className="absolute top-0 left-[-4.5px] w-2 h-2 rounded-full bg-primary" />
                  <span className="text-[64px] font-['Montserrat'] font-light text-primary/10 tracking-wider leading-none block select-none">
                    {item.time.split('/')[2]}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] font-medium text-primary block mt-1">
                    {item.time}
                  </span>
                </div>

                {/* Description */}
                <p className="font-['Montserrat'] font-medium text-lg text-accent-text/90 mt-4 mb-6">
                  {item.description}
                </p>

                {/* Images grid */}
                <div className="flex gap-4">
                  {item.images.map((img, imgIdx) => (
                    <div
                      key={imgIdx}
                      className="w-[200px] h-[260px] overflow-hidden rounded-xl bg-black/5 shadow-sm shrink-0"
                    >
                      <img
                        src={img}
                        alt={item.description}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          // Handle HEIC fallback visually
                          e.currentTarget.style.display = 'none'
                          const parent = e.currentTarget.parentElement
                          if (parent) {
                            const placeholder = document.createElement('div')
                            placeholder.className =
                              "w-full h-full flex flex-col items-center justify-center bg-primary/5 text-primary/40 text-center p-4 text-xs font-['Montserrat']"
                            placeholder.innerHTML = `<span>📷 Photo</span><span class="mt-2 text-[10px]">(${item.time})</span>`
                            parent.appendChild(placeholder)
                          }
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Background decorative guidelines grid */}
          <div className="absolute inset-x-0 bottom-1/4 h-px bg-primary/10 -z-10 flex justify-between px-32 pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="w-px h-4 bg-primary/20" />
            ))}
          </div>
        </div>
      ) : (
        // Mobile Vertical Freestyle Timeline View
        <div className="w-full max-w-lg mx-auto">
          <div className="mb-12 text-left ml-10">
            <span className="text-xs uppercase tracking-[0.25em] text-primary/60 font-semibold font-['Montserrat'] block mb-2">
              Timeline
            </span>
            <h2 className="text-3xl font-light text-primary font-serif">
              Hành trình của chúng tớ
            </h2>
          </div>

          <div className="relative border-l border-primary/20 ml-4 pl-6 flex flex-col gap-16">
            {timelineData.map((item, index) => (
              <div key={index} className="relative flex flex-col">
                {/* Node indicator */}
                <div className="absolute top-1.5 left-[-28.5px] w-3 h-3 rounded-full bg-primary border-2 border-white shadow-sm" />

                {/* Date */}
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-primary">
                  {item.time}
                </span>

                {/* Description */}
                <p className="font-['Montserrat'] font-medium text-base text-accent-text/90 mt-2 mb-4">
                  {item.description}
                </p>

                {/* Horizontal scrollable image gallery on mobile */}
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory">
                  {item.images.map((img, imgIdx) => (
                    <div
                      key={imgIdx}
                      className="w-[180px] h-[240px] overflow-hidden rounded-xl bg-black/5 shadow-sm shrink-0 snap-start"
                    >
                      <img
                        src={img}
                        alt={item.description}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                          const parent = e.currentTarget.parentElement
                          if (parent) {
                            const placeholder = document.createElement('div')
                            placeholder.className =
                              "w-full h-full flex flex-col items-center justify-center bg-primary/5 text-primary/40 text-center p-4 text-xs font-['Montserrat']"
                            placeholder.innerHTML = `<span>📷 Photo</span><span class="mt-2 text-[10px]">(${item.time})</span>`
                            parent.appendChild(placeholder)
                          }
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
