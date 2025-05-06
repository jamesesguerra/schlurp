import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { flavors } from "@/app/data/flavors";

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

    gsap.to(bottle.current, {
      scrollTrigger: {
        trigger: bottle.current,
        start: "top+=1500 20%",
        end: "bottom+=1400 center",
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

    flavors.forEach((flavor, index) => {
      const nextFlavor = flavors[index + 1];
    
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: `#flavor-${index}`,
          start: index === 0 ? "top+=600 20%" : "top+=1600 20%",
          end: index === 0 ? "bottom+=1300 center" : "bottom+=1600 center",
          scrub: true,
          id: `flavor-${index}`,
          onUpdate: (self) => {
            if (self.direction === 1 && self.progress >= 0.5) {
              if (nextFlavor) {
                setFlavorSrc(nextFlavor.bottleImage);
              }
            }

            if (self.direction === -1 && self.progress < 0.5) {
                setFlavorSrc(flavor.bottleImage);
            }
          },
        },
      });
    
      tl.to("#bottle", {
        scale: 0.05,
        duration: 1,
        ease: "power1.inOut",
      });
    
      tl.to("#bottle", {
        scale: 1,
        duration: 1,
        ease: "power1.inOut",
      });
    });

}