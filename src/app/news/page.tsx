import EmblaCarouselLg from "../layout/Carousel/EmblaCarouselLg/EmblaCarouselLg";
import { EmblaOptionsType } from 'embla-carousel';
import EmblaCarouselSm from "../layout/Carousel/EmblaCarouselSm/EmblaCarouselSm";

export default function News() {

  const OPTIONS: EmblaOptionsType = { loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  const images = [
    "https://images.unsplash.com/photo-1746083984990-ba2a8cabc88e?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1739614621579-8f8f396c7412?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1570284613060-766c33850e00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHNwYWNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1504192010706-dd7f569ee2be?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNwYWNlfGVufDB8fDB8fHww"
  ]
  
  return (
    <div className="container mx-auto px-5 lg:px-0">
      <section className="py-6">
        <EmblaCarouselLg slides={SLIDES} options={OPTIONS} />
      </section>

      <section className="py-6">
        <h2 className="text-2xl font-accent font-bold mb-2">CONTINUE WATCHING</h2>
        <EmblaCarouselSm slides={SLIDES} images={images} options={{ loop: false, slidesToScroll: 3 }} />
      </section>

      <section className="py-6">
        <h2 className="text-2xl font-accent font-bold mb-2">TRAILERS</h2>
        <EmblaCarouselSm slides={SLIDES} images={images} options={{ loop: false, slidesToScroll: 3 }} />
      </section>

      <section className="py-6">
        <h2 className="text-2xl font-accent font-bold mb-2">NEW RELEASES</h2>
        <EmblaCarouselSm slides={SLIDES} images={images} options={{ loop: false, slidesToScroll: 3 }} />
      </section>
    </div>
  );
}
