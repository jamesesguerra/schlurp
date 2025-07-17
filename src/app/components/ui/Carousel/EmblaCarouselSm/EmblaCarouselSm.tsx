"use client";

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType,
  images: string[]
}
import './embla-sm.css';
import Image from 'next/image';

const EmblaCarouselSm: React.FC<PropType> = (props) => {
  const { slides, options, images } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla_sm">
      <div className="embla__viewport_sm" ref={emblaRef}>
        <div className="embla__container_sm">
          {images.map((image, index) => (
            <div className="embla__slide_sm" key={index}>
              <div className="embla__slide__number_sm">
                <Image
                  className="embla__slide__image_sm rounded-[12px]"
                  src={image}
                  width="738"
                  height="416"
                  alt=""
                />
              <span className="embla__slide__text text-lg">Severance</span>
              </div>
            </div>
          ))}
        </div>
      </div>

        <div className="embla__buttons_sm">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
    </section>
  )
}

export default EmblaCarouselSm
