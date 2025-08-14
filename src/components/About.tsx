import headshot from "../headshots/center.png"

export default function About(){
    return(
        <div id="about" className="about-section w-full bg-white flex-col justify-center">
            <div className="w-full about text-[#ff0000] bg-white border-white flex-col text-black pt-3.5 z-10 top-0">
                <div className="flex justify-around items-center mt-4 leading-[1px]">
                    <span className="w-[100%] h-[1px] bg-black mr-4 mb-2"></span>
                    <span className="mr-2 font-editorialitalic text-[9vw] tracking-[-0.06em] leading-[9vw] select-none text-right">
                        About
                    </span>
                    <span className="ml-2 font-telegraf text-[9vw] tracking-[-0.06em] leading-[9vw] select-none text-right">
                        me
                    </span>
                     <span className="w-[100%] h-[1px] bg-black ml-4 mb-2"></span>
                </div>
            </div>
            <div className="about-section bg-[#D9D9D9] px-[8vw] z-5  ml-4 mr-4 flex items-center">

                <img className="about-portrait m-5 min-w-[400px] w-[30%]" src={headshot} alt="headshot of me" />

                <div className="about-text flex-col mr-20 mt-20 mb-20 ml-5">
                    <div className="font-helveticabold text-[4.5vw] tracking-[-0.03em] leading-[4vw]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <div className="mt-7 text-[16px]">
                   Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore aute irure dolor in reprehenderit in voluptate velit esse cillum dolore aute irure dolor in reprehenderit in voluptate velit esse cillum dolore aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore aute irure dolor in reprehenderit in voluptate velit esse cillum dolore aute irure dolor in reprehenderit in voluptate velit esse cillum dolore aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                    </div>
                </div>
                
            </div>
        </div>
    )
}