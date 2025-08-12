import upArrow from "../assets/up-arrow.png"

export default function Bottom(){
    return(
    <>  
        <div className="scroller max-w-[100vw] font-helveticaregular overflow-hidden select-none mt-10 items-start 
        border-t-solid border-t-1 border-b-1">
            <div className="scroller__inner flex flex-nowrap gap-0">
                <p>\\\\\\\\\\\\\\\\\ you have reached the end of the website</p>
                <p>\\\\\\\\\\\\\\\\\ you have reached the end of the website</p>
                <p>\\\\\\\\\\\\\\\\\ you have reached the end of the website</p>
                <p>\\\\\\\\\\\\\\\\\ you can leave if you want but I don't mind the company</p>
                <p>\\\\\\\\\\\\\\\\\ you have reached the end of the website</p>
                <p>\\\\\\\\\\\\\\\\\ you have reached the end of the website</p>
                <p>\\\\\\\\\\\\\\\\\ you have reached the end of the website</p>
                <p>\\\\\\\\\\\\\\\\\ you have reached the end of the website</p>
                <p>\\\\\\\\\\\\\\\\\ you have reached the end of the website</p>
                <p>\\\\\\\\\\\\\\\\\ you have reached the end of the website</p>
                <p>\\\\\\\\\\\\\\\\\ you have reached the end of the website</p>
                <p>\\\\\\\\\\\\\\\\\ you have reached the end of the website</p>
                <p>\\\\\\\\\\\\\\\\\ you have reached the end of the website</p>
                <p>\\\\\\\\\\\\\\\\\ you have reached the end of the website</p>
                <p>\\\\\\\\\\\\\\\\\ you have reached the end of the website</p>
                <p>\\\\\\\\\\\\\\\\\ you have reached the end of the website</p>
            </div>
        </div>

        <div className="flex-col bg-white w-full pl-10 pr-10 pb-8">
            <div className="flex pl-4 pr-4 pt-10">
                <div className="flex-col w-800 mr-5">
                    <div className="flex w-full"><span className="font-editorialregular text-[40px] select-none">menu</span><span className="bg-black w-full h-[1px] ml-4 mt-7.5 mr-[30%]"></span></div>
                    <div className="w-full border-1 border-solid border-black flex font-helveticaregular text-[18px] justify-between">
                        <div className="m-1 mb-12 mt-3 cursor-pointer">
                            contact
                        </div>
                        <div className="m-1 mt-12 mb-3 cursor-pointer">
                            projects
                        </div>
                        <div className="m-1 mt-4 cursor-pointer">
                            experiences
                        </div>
                        <div className="m-1 mt-10 cursor-pointer">
                            about me
                        </div>
                    </div>
                </div>
                
                <div className="flex-col w-700 mr-5">
                    <div className="flex w-full"><span className="font-editorialregular text-[40px] select-none">socials</span><span className="bg-black w-full h-[1px] ml-4 mt-7.5 mr-[40%]"></span></div>
                    <div className="w-full border-1 border-solid border-black flex font-helveticaregular text-[18px] justify-between">
                        <div className="m-1 mb-9 mt-4 cursor-pointer">
                            linkedin
                        </div>
                        <div className="m-1 mt-10 mb-1 text-center cursor-pointer">
                            <div>
                                github
                            </div>
                             <div className="text-[10.5px] cursor-pointer">(is that a social?)</div>
                        </div>
                        <div className="m-1 mt-2 cursor-pointer">
                            youtube
                        </div>
                        <div className="m-1 mt-13 cursor-pointer">
                            instagram
                        </div>
                    </div>
                </div>

                <div className="flex-col w-full">
                    <div className="flex w-full"><span className="font-editorialregular text-[40px] select-none">music!</span><span className="bg-black w-full h-[1px] ml-4 mt-7.5 mr-[30%]"></span></div>
                    <div className="w-full border-1 border-solid border-black flex font-helveticaregular text-[18px] justify-between">
                        <div className="m-1 ml-20 mb-12 mt-3 cursor-pointer">
                            spotify
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between pl-4 pr-4 mt-8 items-end">
                <div className="font-telegraf whitespace-pre text-[#4C4C4C] text-[18px] leading-[19px]">
                    <div>Designed using Creative Cloud and Figma.</div>
                    <div>Created using Vite with Tailwind CSS.</div>
                    <div>Last updated August 2025.</div>
                    <div className="font-helveticabold text-[24px] mt-3">© Gerindra Adi, all rights reserved.</div>
                </div>
                <div className="font-helveticabold text-[40px] leading-[25px] underline flex items-center cursor-pointer">
                    Back to the top<span><img className="h-auto w-[40px] ml-2" src={upArrow} alt="upArrow" /></span>
                </div>
            </div>
        </div>
    </>
        
    )
}