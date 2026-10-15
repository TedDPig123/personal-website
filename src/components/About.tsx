import headshot from "../headshots/center.webp"

export default function About(){
    return(
        <div id="about" className="w-full bg-white flex-col justify-center">
            <div className="w-full about text-[#ff0000] bg-white border-white flex-col text-black pt-3.5 z-10 top-0">
                <div className="flex justify-around items-center mt-4 leading-[1px] pb-3.5 pl-8 pr-8">
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

            <div className="about-section bg-[#D9D9D9] p-[3vw] flex items-center just w-full">
                <div className="flex justify-center w-full">
                    <img className="about-portrait m-5 mr-0 min-w-[400px] w-[80vw]" src={headshot} alt="headshot of me" width={1080} height={1350} />
                </div>

                <div className="about-text flex-col ml-15 width-full">
                    <div className="font-helveticabold text-5xl tracking-[-0.1rem] leading-[2.8rem] min-text">
                        I may want to do too many things, but the last thing I want to do is be boring.
                    </div>
                    <div className="mt-7 text-[16px]">
                        Hi, I'm Geri. Glad to see you've stumbled on to my website, unless you're a potential employer, in which case: it was fate that you found this website and now you have to hire me. I don't make the rules. (Just kidding, unless...).
                        <br /><br />
                        I graduated from UMass Amherst in May 2026 with a B.S. in computer science, and I'm now a Founding Product Engineer at SnapMatePhoto, a marketplace for booking local photographers. I get to design things in Figma and then actually build them, all with our users in mind (I got to take our new homepage from spec all the way to shipped!). 
                        <br /><br />
                        I love designing for real users and thinking of creative ways to put my programming skills to use! These days,
                        I'm learning everything it takes to make a real product work for real people, from design systems, learning UI/UX practices, branding, and page speed to the surprisingly fun puzzle of modernizing an older codebase. Going forward, I want to keep exploring the ways that software experiences can aid in story-telling, and the ways it can connect us to our humanity more than distance ourselves from it.
                        <br /><br />
                        Beyond the computer, I just love creating things and engaging in self-expression through the pursuit of a lot of hobbies. Some may argue I've got too many hobbies. They may be right. I like playing music on my guitar and writing songs, though music production is still pretty difficult for me (still not enough to stop me - check out my song on spotify! :p). I also love sketching, collage-making, embroidery, and acting on stage in theater productions.
                    </div>
                </div>
                
            </div>
        </div>
    )
}