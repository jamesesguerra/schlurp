import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function flavorDesktopAnimations(
  refs: {
    flavorBanner: React.RefObject<HTMLElement | null>,
    flavorBannerCopy: React.RefObject<HTMLElement | null>,
    detailsContainer: React.RefObject<HTMLElement | null>,
    flavorFirstName: React.RefObject<HTMLElement | null>,
    flavorSecondName: React.RefObject<HTMLElement | null>,
    ingredientsImage: React.RefObject<HTMLElement | null>,
    flavorDetails: React.RefObject<HTMLElement | null>,
  }
) {
  // const {
  //   flavorBanner,
  //   flavorBannerCopy,
  //   detailsContainer,
  //   flavorFirstName,
  //   flavorSecondName,
  //   ingredientsImage,
  //   flavorDetails,
  // } = refs;

  // gsap.to(flavorBannerCopy.current, {
  //   scrollTrigger: {
  //     trigger: flavorBanner.current,
  //     endTrigger: detailsContainer.current,
  //     end: () => `top top`,
  //     pinSpacing: false,
  //     pin: flavorBannerCopy.current,
  //     scrub: true
  //   },
  // });

  // gsap.to(detailsContainer.current, {
  //   scrollTrigger: {
  //     trigger: detailsContainer.current,
  //     start: "top 100%",
  //     scrub: true,
  //   },
  //   y: -290,
  // });

  // gsap.to(flavorFirstName.current, {
  //   scrollTrigger: {
  //     trigger: flavorFirstName.current,
  //     scrub: true,
  //     start: "top-=400 80%",
  //   },
  //   y: -400,
  //   duration: 1.1,
  // });

  // gsap.to(flavorSecondName.current, {
  //   scrollTrigger: {
  //     trigger: flavorSecondName.current,
  //     scrub: true,
  //     start: "top-=420 80%",
  //   },
  //   y: -550,
  //   duration: 1.2,
  // });

  // gsap.to(ingredientsImage.current, {
  //   scrollTrigger: {
  //     trigger: ingredientsImage.current,
  //     scrub: true,
  //     start: "top-=300 80%",
  //     end: "+=1700px",
  //   },
  //   y: -1000,
  //   duration: 0.1,
  // });

  // gsap.to(flavorDetails.current, {
  //   scrollTrigger: {
  //     trigger: flavorDetails.current,
  //     scrub: true,
  //     start: "top-=450 80%",
  //     end: "+=500px",
  //   },
  //   y: -350,
  //   duration: 1.2,
  // });

  // gsap.fromTo(
  //   flavorBannerCopy.current,
  //   {
  //     opacity: 0,
  //     marginTop: "-75px",
  //   },
  //   {
  //     opacity: 1,
  //     marginTop: "0px",
  //     duration: 0.6,
  //     scrollTrigger: {
  //       trigger: flavorBannerCopy.current,
  //       start: "top-=100 20%",
  //       end: "+=300px",
  //     },
  //   }
  // );
}

export function flavorMobileAnimations(
    refs: {
      flavorBanner: React.RefObject<HTMLElement | null>,
      flavorBannerCopy: React.RefObject<HTMLElement | null>,
      detailsContainer: React.RefObject<HTMLElement | null>,
      flavorFirstName: React.RefObject<HTMLElement | null>,
      flavorSecondName: React.RefObject<HTMLElement | null>,
      ingredientsImage: React.RefObject<HTMLElement | null>,
      flavorDetails: React.RefObject<HTMLElement | null>,
    }
  ) {
    const {
      flavorBanner,
      flavorBannerCopy,
      detailsContainer,
      flavorFirstName,
      flavorSecondName,
      ingredientsImage,
      flavorDetails,
    } = refs;
  
    gsap.to(flavorBannerCopy.current, {
      scrollTrigger: {
        trigger: flavorBanner.current,
        endTrigger: detailsContainer.current,
        end: () => `top top`,
        pinSpacing: false,
        pin: flavorBannerCopy.current,
        scrub: true,
        id: `${Math.random()}`,
      },
    });
  
    gsap.to(detailsContainer.current, {
      scrollTrigger: {
        trigger: detailsContainer.current,
        start: "top 100%",
        scrub: true,
      },
      y: -290,
    });
  
    gsap.to(flavorFirstName.current, {
      scrollTrigger: {
        trigger: flavorFirstName.current,
        scrub: true,
        start: "top-=400 80%",
      },
      y: -300,
      duration: 1.1,
    });
  
    gsap.to(flavorSecondName.current, {
      scrollTrigger: {
        trigger: flavorSecondName.current,
        scrub: true,
        start: "top-=400 80%",
      },
      y: -240,
      duration: 1.2,
    });
  
    gsap.to(ingredientsImage.current, {
      scrollTrigger: {
        trigger: ingredientsImage.current,
        scrub: true,
        start: "top-=300 80%",
        end: "+=700px",
      },
      y: -400,
      duration: 0.1,
    });
  
    gsap.to(flavorDetails.current, {
      scrollTrigger: {
        trigger: flavorDetails.current,
        scrub: true,
        start: "top-=200 80%",
        end: "+=600px",
      },
      y: -200,
      duration: 1.2,
    });
  
    gsap.fromTo(
      flavorBannerCopy.current,
      {
        opacity: 0,
        marginTop: "-75px",
      },
      {
        opacity: 1,
        marginTop: "0px",
        duration: 0.6,
        scrollTrigger: {
          trigger: flavorBannerCopy.current,
          start: "top-=100 20%",
          end: "+=300px",
        },
      }
    );
  }
