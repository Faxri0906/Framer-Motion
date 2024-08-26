import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
export default function Home() {
  const container = useRef();
  useGSAP(() => {
    gsap.to('#topText',{
      x: -1500,
      duration: 2,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: container.current,
        start: "top 50%",
        scrub: 1,
      },
    });
    gsap.to("#bottomText",{
      x: -1500,
      duration: 2,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: container.current,
        start: "top 100%",
        scrub: 1,
      },
    });
    gsap.to("#scrollable",{
      opacity: 1,
      y: "-100%",
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#topContainer",
        start: "bottom bottom",
        scrub: 1,
      },
    });
    gsap.to("#track",{
      opacity: 1,
      x: -700,
      duration: 1,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#topContainer",
        start: "50% 50%",
        scrub: 1,
      },
    });
  },{
    scope: container,
  });
  return (
    <div ref={container}>
      <div id="topContainer" className="text-5xl py-96 container">
        <h1 id="topText" className="font-bold text-8xl w-[100000px] text-nowrap">
          WE CREATE WE EXPLORE WE DESIGN WE DEVELOP WE CREATE WE EXPLORE WE DESIGN WE DEVELOP
          WE CREATE WE EXPLORE WE DESIGN WE DEVELOP WE CREATE WE EXPLORE WE DESIGN WE DEVELOP
          WE CREATE WE EXPLORE WE DESIGN WE DEVELOP WE CREATE WE EXPLORE WE DESIGN WE DEVELOP
          WE CREATE WE EXPLORE WE DESIGN WE DEVELOP WE CREATE WE EXPLORE WE DESIGN WE DEVELOP
        </h1>
        <div className="my-4">
          <img src="https://images.pexels.com/photos/1166644/pexels-photo-1166644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </div>
        <h1 id="bottomText" className="font-bold text-8xl w-[100000px] text-nowrap">
          WE CREATE WE EXPLORE WE DESIGN WE DEVELOP WE CREATE WE EXPLORE WE DESIGN WE DEVELOP
          WE CREATE WE EXPLORE WE DESIGN WE DEVELOP WE CREATE WE EXPLORE WE DESIGN WE DEVELOP
          WE CREATE WE EXPLORE WE DESIGN WE DEVELOP WE CREATE WE EXPLORE WE DESIGN WE DEVELOP
          WE CREATE WE EXPLORE WE DESIGN WE DEVELOP WE CREATE WE EXPLORE WE DESIGN WE DEVELOP
        </h1>
      </div>
      <div id="scrollable" className="text-5xl bg-[#232323] h-[100vh] py-32">
        <div id="track" className="flex flex-nowrap gap-4 w-[10000px] h-[500px]">
          <div className="w-[400px] h-full">
            <img className="w-full h-auto" src="https://images.pexels.com/photos/1166644/pexels-photo-1166644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          </div>
          <div className="w-[400px] h-full">
            <img className="w-full h-auto" src="https://images.pexels.com/photos/1166644/pexels-photo-1166644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          </div>
          <div className="w-[400px] h-full">
            <img className="w-full h-auto" src="https://images.pexels.com/photos/1166644/pexels-photo-1166644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          </div>
          <div className="w-[400px] h-full">
            <img className="w-full h-auto" src="https://images.pexels.com/photos/1166644/pexels-photo-1166644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          </div>
          <div className="w-[400px] h-full">
            <img className="w-full h-auto" src="https://images.pexels.com/photos/1166644/pexels-photo-1166644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          </div>
          <div className="w-[400px] h-full">
            <img className="w-full h-auto" src="https://images.pexels.com/photos/1166644/pexels-photo-1166644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          </div>
        </div>
      </div>
    </div>
  );
};