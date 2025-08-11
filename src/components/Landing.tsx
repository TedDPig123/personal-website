import Projects from "./Projects"
import Experiences from "./Experiences"

export default function Landing(){
    return(
        <div className="landing-container relative">

            <section className="fixed top-0 z-0 w-full">
                <div className="w-full h-[100vh] bg-white">
                    <div className="font-editoriallight text-[4.5vw] leading-[4vw] pt-[20vh] mr-[6%] ml-[5%] mb-[2%] flex justify-between items-center select-none text-black">
                        <span>Hi</span>
                        <span className="w-[100%] h-[1px] bg-black mr-4 ml-4"></span>
                        <span>I'm</span>
                    </div>
                    <div className="flex justify-start pl-[2.6vw]">
                        <pre className="font-helveticaregular text-[15vw] tracking-[-0.1em] leading-[12vw] select-none text-black">
                            GERINDRA  ADI
                        </pre>
                    </div>
                </div>
            </section>

            <section className="fixed top-0 z-16 w-full">
                <div className="align-start w-full h-[50vh]">
                    <div className="orjust opacity-0 font-editoriallight text-[4.5vw] leading-[4vw] pt-[20vh] mr-[6%] ml-[5%] mb-[2%] flex justify-beginning items-center select-none text-white">
                        <span>Or</span>
                        <span className="orjust-line w-[100%] h-[1px] bg-white mr-4 ml-4"></span>
                        <span>just</span>
                    </div>
                    <div className="geri-white opacity-0 overlay-name-container flex justify-start pl-[2.6vw]">
                        <pre className="overlay-name font-helveticaregular text-[15vw] tracking-[-0.1em] leading-[12vw] select-none text-white">
                            GERI
                        </pre>
                    </div>
                    <div className="for-short opacity-0 font-editoriallight text-[4.5vw] leading-[4vw] pt-[3vw] mr-[5%] flex justify-end items-center select-none text-white">
                        for short
                    </div>
                </div>
            </section>


            <section className="h-[53vh] rest-of-stuff-container">
                <div className="sticky top-4 z-10">
                    <div className="h-[100vh] m-4">
                    </div>
                    <div className="name-overlay h-[60vw] bg-black m-4 mb-0">
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
                        <Experiences />
                    </div>
                </div>
            </section>

            
        </div>
    )
}