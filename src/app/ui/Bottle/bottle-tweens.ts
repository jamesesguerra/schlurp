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
    // const { bottleContainer, bottle, setFlavorSrc } = refs;

    // gsap.to(bottleContainer.current, {
    //     scrollTrigger: {
    //         trigger: bottleContainer.current,
    //         scrub: true,
    //         start: "top-=50 top",
    //         end: "+=500",
    //     },
    //     y: -75
    // });

    // flavors.forEach((flavor, index) => {
    //   const nextFlavor = flavors[index + 1];
    
    //   const shrinkTl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: `#flavor-${index}`,
    //       start: index === 0 ? "top+=1000 20%" : "top+=1600 20%",
    //       end: index === 0 ? "bottom+=1600 center" : "bottom+=1600 center",
    //       scrub: true,
    //       id: `flavor-${index}`,
    //       onUpdate: (self) => {
    //         if (self.direction === 1 && self.progress >= 0.8) {
    //           if (nextFlavor) {
    //             setFlavorSrc(nextFlavor.bottleImage);
    //           }
    //         }

    //         if (self.direction === -1 && self.progress < 0.8) {
    //             setFlavorSrc(flavor.bottleImage);
    //         }
    //       },
    //     },
    //   });
    
    //   shrinkTl.to("#bottle", {
    //     scale: 0.05,
    //     duration: 1,
    //     ease: "power1.inOut"
    //   });

    //   shrinkTl.set("#bottle", {
    //     opacity: 1,
    //     scale: 1,
    //     y: "100vh"
    //   });
    
    //   if (index !== 0) {
    //     const reentryTl = gsap.timeline({
    //       scrollTrigger: {
    //         trigger: `#banner-${index}`,
    //         start: 'top-=200 top',
    //         end: 'bottom-=100 center',
    //         scrub: true,
    //       },
    //     });

    //     reentryTl.to("#bottle", {
    //       y: 0,
    //       duration: 1,
    //       ease: "power1.inOut"
    //     });

    //     gsap.to(`#banner-${index}`, {
    //       scrollTrigger: {
    //         trigger: `#banner-${index}`,
    //         start: `top-=450 top`,
    //         end: 'bottom center',
    //         scrub: true,
    //         onEnter: () => {
    //           gsap.set('#bottle', { opacity: 0 })
    //         },
    //         onLeaveBack: () => {
    //           gsap.set('#bottle', { opacity: 1 })
    //         }
    //       },
    //       zIndex: 0
    //     });
    //   }

    // });
}

export function bottleMobileAnimations(
  refs: {
    bottleContainer: React.RefObject<HTMLElement | null>,
    bottle: React.RefObject<HTMLImageElement | null>,
    setFlavorSrc: React.Dispatch<React.SetStateAction<string>>
  }
) {
    // const { bottleContainer, bottle, setFlavorSrc } = refs;

    // gsap.to(bottleContainer.current, {
    //     scrollTrigger: {
    //         trigger: bottleContainer.current,
    //         scrub: true,
    //         start: "top-=50 top",
    //         end: "+=500",
    //     },
    //     y: -75
    // });

    // flavors.forEach((flavor, index) => {
    //   const nextFlavor = flavors[index + 1];
    
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: `#flavor-${index}`,
    //       start: index === 0 ? "top+=600 20%" : "top+=1600 20%",
    //       end: index === 0 ? "bottom+=1300 center" : "bottom+=1600 center",
    //       scrub: true,
    //       id: `flavor-${index}`,
    //       onUpdate: (self) => {
    //         if (self.direction === 1 && self.progress >= 0.5) {
    //           if (nextFlavor) {
    //             setFlavorSrc(nextFlavor.bottleImage);
    //           }
    //         }

    //         if (self.direction === -1 && self.progress < 0.5) {
    //             setFlavorSrc(flavor.bottleImage);
    //         }
    //       },
    //     },
    //   });
    
    //   tl.to("#bottle", {
    //     scale: 0.05,
    //     duration: 1,
    //     ease: "power1.inOut",
    //   });
    
    //   tl.to("#bottle", {
    //     scale: 1,
    //     duration: 1,
    //     ease: "power1.inOut",
    //   });
    // });

}