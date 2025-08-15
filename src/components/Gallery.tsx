import { useState, useRef, useEffect } from 'react'
import GalleryComponents1 from "./GalleryComponents-1"
import GalleryComponents2 from "./GalleryComponents-2"
import { experiencesList } from '../content/ExperiencesList';
import Lenis from "lenis";

export default function Gallery() {
    const [showLeftArrow, setShowLeftArrow] = useState(false)
    const [showRightArrow, setShowRightArrow] = useState(true)
    const galleryRef = useRef<HTMLDivElement>(null)
    const lenisRef = useRef<Lenis | null>(null)
    const rafRef = useRef<number | null>(null)

    const handleScroll = () => {
        if (galleryRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = galleryRef.current
            setShowLeftArrow(scrollLeft > 0)
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1)
        }
    }

    const scrollLeft = () => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(lenisRef.current.scroll - 300)
        }
    }

    const scrollRight = () => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(lenisRef.current.scroll + 300)
        }
    }

    useEffect(() => {
        const gallery = galleryRef.current
        if (!gallery) return

        const lenis = new Lenis({
            wrapper: gallery,
            orientation: 'horizontal',
            gestureOrientation: 'horizontal',
            smoothWheel: true,
            wheelMultiplier: 1,
        })

        lenisRef.current = lenis

        function raf(time: number) {
            lenis.raf(time)
            rafRef.current = requestAnimationFrame(raf)
        }
        rafRef.current = requestAnimationFrame(raf)

        lenis.on('scroll', handleScroll)
        
        handleScroll()

        return () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current)
            }
            lenis.destroy()
        }
    }, [])

    return (
        <div className="relative w-full group">
            <div 
                ref={galleryRef}
                className='gallery-container gallery flex w-full overflow-x-scroll bg-black text-white pl-22 pr-22 rounded-xl pb-5'
                style={{ scrollBehavior: 'auto' }}
            >
                {experiencesList.map((exp, i)=>{
                    return (i%2===0 ? 
                    <GalleryComponents1 key={exp.id} position={exp.position} text={exp.text} date={exp.date} place={exp.place} deskTop={exp.deskTop} phoneTop={exp.phoneTop}/> : 
                    <GalleryComponents2 key={exp.id} position={exp.position} text={exp.text} date={exp.date} place={exp.place} deskTop={exp.deskTop} phoneTop={exp.phoneTop}/> )
                })}
            </div>

            {showLeftArrow && (
                <button
                    onClick={scrollLeft}
                    className="scroll-arrow absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-opacity-0 hover:bg-opacity-100 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer">
                    <svg className="ease-in-out hover:w-9 hover:h-9 transition-all scroll-btn w-7 h-7 text-white cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            )}

            {showRightArrow && (
                <button
                    onClick={scrollRight}
                    className="scroll-arrow bg-gradient-to-l from-black to-transparent absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center shadow-lg"
                >
                    <svg className="ease-in-out hover:w-9 hover:h-9 transition-all w-7 h-7 text-white cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            )}

            <div className="swipe-desktop absolute top-[30px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 select-none ease-in-out">
                <div className="bg-black bg-opacity-75 text-white rounded-lg text-sm font-telegraf">
                    &lt; Scroll horizontally &gt;
                </div>
            </div>

            <div className="swipe-phone hidden absolute top-[15px] left-1/2 -translate-x-1/2 -translate-y-[-30%] z-10">
                <div className="bg-black bg-opacity-75 text-[#c8c8c8] rounded-lg text-sm font-telegraf">
                    &lt; swipe horizontally &gt;
                </div>
            </div>

            <div className="left-block-gall left-0 w-20 absolute z-20 top-[10%] h-120 bg-gradient-to-r from-black from-50% to-transparent pointer-events-none"></div>
            <div className="right-block-gall right-0 w-20 absolute z-20 top-[10%] h-120 bg-gradient-to-l from-black from-50% to-transparent pointer-events-none"></div>            
            <div className="gallery-bar left-20 right-20 absolute top-[50%] z-10 h-[3px] bg-white"></div>
        </div>
    )
}