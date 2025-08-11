import GalleryComponents1 from "./GalleryComponents-1"
import GalleryComponents2 from "./GalleryComponents-2"

export default function Gallery() {
    return (
        <div className="relative w-full">
            <div className='gallery flex w-full overflow-x-scroll bg-black text-white pl-22 pr-22 rounded-xl pb-5'>
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

            <div className="left-20 right-20 absolute top-[50%] z-10 h-[3px] bg-white"></div>

            <div className="left-0 w-20 absolute z-20 top-[10%] h-120 bg-black"></div>
            <div className="right-0 w-20 absolute z-20 top-[10%] h-120 bg-black"></div>
        </div>
    )
}