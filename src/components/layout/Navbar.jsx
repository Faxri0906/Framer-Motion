import { GiFastArrow } from "react-icons/gi";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { MdClose, MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
export default function Navbar() {
    const headerRef = useRef();
    const [isOpenMenu,setIsOpenMenu] = useState(false);
    let tl = useRef();
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to("nav", {
            backgroundColor: "rgba(255,255,255,0.25)",
            backdropFilter: "blur(10px)",
            scrollTrigger: {
                trigger: headerRef.current,
                start: "top top",
                scrub: 1,
            }
        });
        gsap.to("#logo", {
            opacity: 0,
            display: "none",
            scrollTrigger: {
                trigger: headerRef.current,
                start: "top top",
                scrub: 1,
            }
        });
        gsap.to("#nav", {
            maxWidth: "700px",
            padding: "24px 16px",
            scrollTrigger: {
                trigger: headerRef.current,
                start: "top top",
                scrub: 1,
            }
        });
        gsap.fromTo("#menu", {
            opacity: 0,
        },{opacity: 1,display: "flex",scrollTrigger: {
            trigger: headerRef.current,
            start: "100px",
            scrub: 1,
            onToggle: (self) => {
                if (!self.isActive) {
                    setIsOpenMenu(false);
                    tl.current.seek(0).pause();
                }
            },
        }});
        tl.current = gsap.timeline({paused: true}).to("#menu", {
            borderRadius: "16px",
            duration: 0.01,
        }).to("#menu", {
            width: "300px",
            duration: 0.5,
            height: "500px",
            ease: "power2.in"
        }).to("#menu ul", {
            display: "flex",
        }).to("#menu ul li", {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 0.5,
        });
    }, {scope: headerRef});
    useEffect(() => {
        if (!isOpenMenu) {
            tl.current.reverse();
        } else {
            tl.current.play();
        }
    },[isOpenMenu]);
  return (
    <header ref={headerRef} className="py-8 sticky z-[999] top-0">
        <nav id="nav" className="container py-6 rounded-3xl flex justify-between">
            <ul className="font-medium text-2xl flex items-center gap-12 uppercase ">
                <li>
                    <Link className="hover:border-b-[16px] hover:border-b-[#2191FB] hover:text-[#2191FB]" to={"/"}>Home</Link>
                </li>
                <li>
                    <Link className="hover:border-b-[16px] hover:border-b-[#2191FB] hover:text-[#2191FB]" to={"/works"}>Works</Link>
                </li>
                <li>
                    <Link className="hover:border-b-[16px] hover:border-b-[#2191FB] hover:text-[#2191FB]" to={"/about"}>About</Link>
                </li>
            </ul>
            <div id="logo" className="flex items-center justify-center">
                <GiFastArrow size={32}/>
            </div>
            <Link className="text-2xl hover:border-b-[16px] hover:border-b-[#2191FB] hover:text-[#2191FB]" to={"/contacts"}>Let's talk</Link>
        </nav>
        <div 
        id="menu" className="fixed bg-white/30 backdrop-blur flex-col w-auto h-auto top-8 right-12 min-h-16 min-w-16 border-[2px] border-black rounded-full cursor-pointer">
            <div onClick={() => {setIsOpenMenu(!isOpenMenu)}} id="menuCircle" className="h-16 w-16 flex items-center justify-center">
                {!isOpenMenu ? (<MdMenu size={32}/>) : (<MdClose size={32}/>)}
            </div>
            <ul className="flex-col gap-4 text-4xl uppercase font-semibold mt-12 hidden">
                <li className="-translate-y-10 opacity-0 border-b-2 border-b-black px-4 hover:border-b-[#2191FB] hover:text-[#2191FB]">Home</li>
                <li className="-translate-y-10 opacity-0 border-b-2 border-b-black px-4 hover:border-b-[#2191FB] hover:text-[#2191FB]">About</li>
                <li className="-translate-y-10 opacity-0 border-b-2 border-b-black px-4 hover:border-b-[#2191FB] hover:text-[#2191FB]">Works</li>
                <li className="-translate-y-10 opacity-0 border-b-2 border-b-black px-4 hover:border-b-[#2191FB] hover:text-[#2191FB]">Contacts</li>
            </ul>
        </div>
    </header>
  );
};