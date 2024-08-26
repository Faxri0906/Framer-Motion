import  ReactLenis,{  useLenis } from '@studio-freight/react-lenis';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const SmoothScroll = ({children}) => {
    const lenisRef = useRef();
    useEffect(() => {
        function update(time) {
            lenisRef.current?.lenis?.raf(time * 1000);
        };
        gsap.ticker.add(update);
        return () => {
            gsap.ticker.remove(update);
        };
    });
    const lenis = useLenis(({scroll}) => {});
  return <ReactLenis ref={lenisRef} autoRaf={false} root>
    {children}
  </ReactLenis>;
};

export default SmoothScroll;