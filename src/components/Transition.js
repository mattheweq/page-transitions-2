import { useRef, useEffect } from "react"
import gsap from "gsap"

function Transition() {
  const tl = gsap.timeline()
  const splash = useRef(null)
  const loading = useRef(null)
  const wipe = useRef(null)
  useEffect(() => {
    tl.to(splash.current,{
      opacity: 1,
      display: "block",
      duration: 1.5,
      ease: "Power4.easeOut",
      x: "100%",
    })
    
    // tl.fromTo(loading.current,{ opacity: 0, 
    // }, {duration: .1, opacity: 1, ease: "Power1.easeInOut"})
    
    tl.to(loading.current, { opacity: 0, duration: .5, ease: "sine.out"}, ".5")

    tl.to(wipe.current, {
      duration: 1,
      x: "100%",
      ease: "Power4.easeIn"
    }, "-=1.2")
    
    tl.to(splash.current,{
      opacity: 1,
      display: "none",
    }, "-=1.2")
  })
  return (
    <div>
      <div ref={splash} className="splash"></div>
      <div ref={loading} className="loading">loading...</div>
      <div ref={wipe} className="transition-effect"></div>
    </div>
  )
}

export default Transition
