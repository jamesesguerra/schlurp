import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function bottleDesktopAnimations(
  refs: {
    bottleContainer: React.RefObject<HTMLElement | null>,
    bottle: React.RefObject<HTMLImageElement | null>,
    setFlavorSrc: React.Dispatch<React.SetStateAction<string>>
  }
) {
    const { bottleContainer, bottle, setFlavorSrc } = refs;
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

    // tl
    // .to(bottle.current, {
    //     scrollTrigger: {
    //       trigger: bottle.current,
    //       start: "top+=1000 20%",
    //       end: "bottom+=1000 center",
    //       scrub: true,
    //     },
    //     scaleX: -1,
    //     z: 10,
    //     duration: 0.5,
    //     ease: "power1.in"
    // })


    gsap.to(bottle.current, {
      scrollTrigger: {
        trigger: bottle.current,
        start: "top+=1500 20%",
        end: "bottom+=1400 center",
        scrub: true,
        markers: true,
        onUpdate: (self) => {
          if (!bottle?.current) return;
      
          if (self.progress > 0.99) {
            setFlavorSrc('/green-bottle.png');
          } else {
            setFlavorSrc('/blue-bottle.png');
          }
        },
      },
      scale: 0.05,
      ease: "power1.inOut"
    });
    
      
}

export function bottleMobileAnimations(
  refs: {
    bottleContainer: React.RefObject<HTMLElement | null>,
    bottle: React.RefObject<HTMLImageElement | null>,
    setFlavorSrc: React.Dispatch<React.SetStateAction<string>>
  }
) {
    const { bottleContainer, bottle, setFlavorSrc } = refs;
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

    // tl
    // .to(bottle.current, {
    //     scrollTrigger: {
    //       trigger: bottle.current,
    //       start: "top+=700 20%",
    //       end: "bottom+=1000 center",
    //       scrub: true
    //     },
    //     scaleX: -1,
    //     duration: 2,
    //     ease: "power1.in"
    // })

    gsap.to(bottle.current, {
      scrollTrigger: {
        trigger: bottle.current,
        start: "top+=1500 20%",
        end: "bottom+=1750 center",
        scrub: true,
        onUpdate: (self) => {
          if (!bottle?.current) return;
      
          if (self.progress > 0.99) {
            setFlavorSrc('/green-bottle.png');
          } else {
            setFlavorSrc('/blue-bottle.png');
          }
        },
      },
      scale: 0.05,
      duration: 2,
      ease: "power1.inOut"
    });
    
      
}