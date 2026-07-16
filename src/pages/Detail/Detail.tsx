import { useState, useRef, useEffect } from 'react'
import { Hero } from '../../components/Detail/hero'
import { Section1 } from '../../components/Detail/section-1'
import { Journey } from '../../components/Detail/journey'
import { CountLove } from '../../components/Detail/count-love'
import { Section2 } from '../../components/Detail/section-2'
import { ImgFooter } from '../../components/Detail/img-footer'
import { Footer } from '../../components/Detail/footer'
import { ScrollReveal } from '../../components/Item/ScrollReveal'

const Detail = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const section1Ref = useRef<HTMLDivElement>(null)
  const journeyRef = useRef<HTMLDivElement>(null)
  const section2Ref = useRef<HTMLDivElement>(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setIsReady(true)
  }, [])

  return (
    <div className={`fixed inset-0 w-full h-dvh z-50 bg-bg-light text-accent-text select-none overflow-y-auto overflow-x-hidden scroll-smooth transition-opacity duration-1000 ease-out ${
      isReady ? 'opacity-100' : 'opacity-0'
    }`}>
      {/* Section 1: Hero Cover */}
      <div ref={heroRef}>
        <Hero
          onScrollToNext={() =>
            section1Ref.current?.scrollIntoView({ behavior: 'smooth' })
          }
        />
      </div>

      {/* Section 2: Welcome details */}
      <div ref={section1Ref}>
        <ScrollReveal>
          <Section1
            onScrollToNext={() =>
              journeyRef.current?.scrollIntoView({ behavior: 'smooth' })
            }
          />
        </ScrollReveal>
      </div>

      {/* Section 4: Love Counter */}
      <ScrollReveal>
        <CountLove />
      </ScrollReveal>

      {/* Section 3: Journey Timeline */}
      <div ref={journeyRef}>
        <Journey />
      </div>

      {/* Section 5: Interactive dating request */}
      <div ref={section2Ref}>
        <ScrollReveal>
          <Section2 />
        </ScrollReveal>
      </div>

      {/* ImgFooter separator banner */}
      <ScrollReveal>
        <ImgFooter />
      </ScrollReveal>

      {/* Footer containing Photos and Signatures */}
      <ScrollReveal>
        <Footer
          onScrollToTop={() =>
            heroRef.current?.scrollIntoView({ behavior: 'smooth' })
          }
        />
      </ScrollReveal>
    </div>
  )
}

export default Detail
