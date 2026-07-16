import React, { useEffect, useState } from 'react'

interface TimeDuration {
  years: number
  months: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

export const CountLove: React.FC = () => {
  const [duration, setDuration] = useState<TimeDuration>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeDifference = () => {
      const startDate = new Date(2026, 4, 17, 0, 0, 0) // May 17, 2026
      const now = new Date()

      let years = now.getFullYear() - startDate.getFullYear()
      let months = now.getMonth() - startDate.getMonth()
      let days = now.getDate() - startDate.getDate()

      if (days < 0) {
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0)
        days += prevMonth.getDate()
        months--
      }

      if (months < 0) {
        months += 12
        years--
      }

      // Calculate exact hours, minutes, seconds remaining in the day
      const diffMs = now.getTime() - startDate.getTime()
      const totalSeconds = Math.floor(diffMs / 1000)
      const hours = Math.floor((totalSeconds % 86400) / 3600)
      const minutes = Math.floor((totalSeconds % 3600) / 60)
      const seconds = totalSeconds % 60

      setDuration({ years, months, days, hours, minutes, seconds })
    }

    calculateTimeDifference()
    const timer = setInterval(calculateTimeDifference, 1000)

    return () => clearInterval(timer)
  }, [])

  const padZero = (num: number) => {
    return num.toString().padStart(2, '0')
  }

  const timeBlocks = [
    { value: padZero(duration.years), label: 'Năm' },
    { value: padZero(duration.months), label: 'Tháng' },
    { value: padZero(duration.days), label: 'Ngày' },
    { value: padZero(duration.hours), label: 'Giờ' },
    { value: padZero(duration.minutes), label: 'Phút' },
    { value: padZero(duration.seconds), label: 'Giây' },
  ]

  return (
    <section className="w-full bg-primary text-white py-16 md:py-20 px-6 flex flex-col items-center justify-center select-none border-b border-white/10">
      {/* Title Header */}
      <div className="text-center mb-10 flex flex-col items-center">
        <span className="text-3xl uppercase tracking-[0.25em] text-white/70 font-semibold font-['Montserrat'] block">
          ĐẾM NGÀY
        </span>
        <span className="font-['Dancing_Script'] text-3xl md:text-4xl text-white block">
          bên nhau
        </span>
      </div>

      {/* Clock Counter Display */}
      <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 max-w-4xl w-full">
        {timeBlocks.map((block, index) => (
          <React.Fragment key={index}>
            {/* Number Block */}
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-6xl font-light font-['Montserrat'] tracking-tight leading-none block">
                {block.value}
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-white/60 font-medium mt-3">
                {block.label}
              </span>
            </div>

            {/* Separator Colons */}
            {index < timeBlocks.length - 1 && (
              <span className="text-2xl md:text-4xl font-light text-white/30 self-start mt-1 md:mt-2 hidden sm:inline">
                :
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
