import Gallery from "./Gallery"

export default function Experiences(){
    return(
        <div className="projects h-fit bg-white ml-4 mr-4 text-[#ff0000] border-white flex-col text-black pt-3.5">
            <div className="flex justify-between pr-4 items-center">
                <span className="w-[100%] h-[1px] bg-black mr-4 ml-4"></span>
                <span className="font-helveticaregular text-[8vw] tracking-[-0.06em] leading-[9vw] select-none text-right">
                    EXPERIENCES
                </span>
            </div>
            <Gallery />
        </div>
    )
}