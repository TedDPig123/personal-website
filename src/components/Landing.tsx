import Projects from "./Projects"
import Experiences from "./Experiences"
import About from "./About"
import Bottom from "./Bottom"
import comp1 from "../landingshots/comp1.png"
import comp2 from "../landingshots/comp2.png"
import comp3 from "../landingshots/comp3.png"
import art1 from "../landingshots/art1.png"
import music1 from "../landingshots/music1.png"

export default function Landing(){
    return(
        <div className="landing-container relative">

            <section className="fixed top-0 z-0 w-full">
                <div className="relative">
                    <div className="w-full h-[100vh] bg-white">
                    <div className="hi-im font-editoriallight text-[4.5vw] leading-[4vw] pt-[20vh] mr-[6%] ml-[5%] mb-[2%] flex justify-between items-center select-none text-black">
                        <span>Hi</span>
                        <span className="w-[100%] h-[1px] bg-black mr-4 ml-4"></span>
                        <span>I'm</span>
                    </div>
                    <div className="flex pl-[2.6vw]">
                        <pre className="geri-black-desktop font-helveticaregular text-[15vw] tracking-[-0.1em] [-0.1em] leading-[12vw] select-none text-black">
                        GERINDRA  ADI
                        </pre>
                        <div className="geri-black-phone pl-1 font-helveticaregular text-[19vw] tracking-[-0.1em] leading-[16vw] select-none text-black hidden ">
                            GERINDRA
                            ADI
                        </div>
                    </div>
                    </div>

                    <div className="landing-shot-container absolute top-[25vw] w-full">
                        <div className="grid grid-cols-3 justify-center">
                            <img src={art1} alt="" className=""/>
                            <img src={comp2} alt="" className=""/>
                            <img src={music1} alt="" className=""/>
                        </div>
                    </div>

                </div>
            </section>

            <section className="fixed top-0 z-16 w-full">
                <div className="align-start w-full h-[50vh]">
                    <div className="orjust opacity-0 font-editoriallight text-[4.5vw] leading-[4vw] pt-[20vh] mr-[5%] ml-[5%] mb-[2%] flex justify-beginning items-center select-none text-white">
                        <span>Or</span>
                        <span className="orjust-line w-[100%] h-[1px] bg-white mr-4 ml-4"></span>
                        <span>just</span>
                    </div>
                    <div className="geri-white opacity-0 overlay-name-container flex pl-[2.6vw]">
                        <pre className="overlay-name-desktop overlay-name font-helveticaregular text-[15vw] tracking-[-0.1em] leading-[12vw] select-none text-white">
                            GERI
                        </pre>
                        <pre className="hidden overlay-name-phone overlay-name font-helveticaregular pl-1 text-[19vw] tracking-[-0.1em] leading-[16vw] select-none text-[#ffffff]">
                            GERI
                        </pre>
                    </div>
                    <div className="for-short opacity-0 font-editoriallight text-[4.5vw] leading-[4vw] pt-[3vw] mr-[5%] flex justify-end items-center select-none text-white">
                        for short.
                    </div>
                </div>
            </section>


            <section className="h-[53vh] rest-of-stuff-container">
                <div className="sticky top-4 z-10">
                    {/* blankspace */}
                    <div className="h-[120vh] m-4 track-container"></div>
                    {/* important */}
                    <div className="name-overlay h-[65vw] bg-black m-4 mb-0">
                    </div>
                </div>

                <div className="h-fit">
                    <div className="sticky top-4 z-20">
                        <Projects />
                    </div>
                </div>
                <div className="h-fit">
                    <div className="sticky top-4 z-20">
                        <Experiences />
                    </div>
                </div>
                <div className="h-fit">
                    <div className="sticky top-4 z-20">
                        <About />
                    </div>
                </div>
                <div className="h-fit">
                    <div className="sticky top-4 z-20">
                        <Bottom />
                    </div>
                </div>
            </section>
        </div>
    )
}