import { useState, useRef, useEffect } from 'react'
import GalleryComponents1 from "./GalleryComponents-1"
import GalleryComponents2 from "./GalleryComponents-2"

export default function Gallery() {
    const [showLeftArrow, setShowLeftArrow] = useState(false)
    const [showRightArrow, setShowRightArrow] = useState(true)
    const galleryRef = useRef(null)

    const handleScroll = () => {
        if (galleryRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = galleryRef.current
            setShowLeftArrow(scrollLeft > 0)
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1)
        }
    }

    const scrollLeft = () => {
        galleryRef.current?.scrollBy({ left: -300, behavior: 'smooth' })
    }

    const scrollRight = () => {
        galleryRef.current?.scrollBy({ left: 300, behavior: 'smooth' })
    }

    useEffect(() => {
        const gallery = galleryRef.current
        if (gallery) {
            gallery.addEventListener('scroll', handleScroll)
            handleScroll()
            return () => gallery.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className="relative w-full group">
            {/* Main Gallery */}
            <div 
                ref={galleryRef}
                className='gallery flex w-full overflow-x-scroll bg-black text-white pl-22 pr-22 rounded-xl pb-5 scroll-smooth'
                onScroll={handleScroll}
            >
                <GalleryComponents1 />
                <GalleryComponents2 />
                <GalleryComponents1 />
                <GalleryComponents2 />
                <GalleryComponents1 />
                <GalleryComponents2 />
                <GalleryComponents1 />
                <GalleryComponents2 />
                <GalleryComponents1 />
                <GalleryComponents2 />
            </div>

            <button
                onClick={scrollLeft}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-opacity-0 hover:bg-opacity-100 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer">
                <svg className="ease-in-out hover:w-9 hover:h-9 transition-all scroll-btn w-7 h-7 text-white cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={scrollRight}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-opacity-0 hover:bg-opacity-100 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg"
            >
                <svg className="ease-in-out hover:w-9 hover:h-9 transition-all w-7 h-7 text-white cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 select-none ease-in-out">
                <div className="bg-black bg-opacity-75 text-white rounded-lg text-sm font-telegraf">
                    &lt; Scroll horizontally &gt;
                </div>
            </div>

            <div className="left-0 w-20 absolute z-20 top-[10%] h-100 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
            <div className="right-0 w-20 absolute z-20 top-[10%] h-100 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>            
            <div className="left-20 right-20 absolute top-[50%] z-10 h-[3px] bg-white"></div>
        </div>
    )
}