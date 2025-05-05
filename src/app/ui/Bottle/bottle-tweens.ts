import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function bottleDesktopAnimations(
  refs: {
    bottleContainer: React.RefObject<HTMLElement | null>,
    bottle: React.RefObject<HTMLElement | null>
  }
) {
    const { bottleContainer, bottle } = refs;
    const tl = gsap.timeline();

      gsap.to(bottleContainer.current, {
          scrollTrigger: {
              trigger: bottleContainer.current,
              scrub: true,
              start: "top-=50 top",
              end: "+=500",
          },
          y: -75
      });

    tl.to(bottle.current, {
        scrollTrigger: {
          trigger: bottle.current,
          start: "top+=1000 20%",
          end: "bottom+=1000 center",
          scrub: true,
          markers: true
        },
        scaleX: -1,
        z: 10,
        duration: 0.5,
        ease: "power1.in"
    });
      
}

export function bottleMobileAnimations(
    refs: {
      bottleContainer: React.RefObject<HTMLElement | null>,
    }
  ) {
      const {
          bottleContainer
      } = refs;
  
      gsap.to(bottleContainer.current, {
          scrollTrigger: {
              trigger: bottleContainer.current,
              scrub: true,
              start: "top-=50 top",
              end: "+=500",
          },
          y: -75
      });

    //   const tl = gsap.timeline();

    //   tl.to(bottleContainer, {
    //     duration: 0.3,
    //     rotateY: 90,
    //     ease: "power1.in",
    //   })
    //   .to(bottleContainer, {
    //     duration: 0.3,
    //     rotateY: 0,
    //     ease: "power1.out"
    //   });

  }